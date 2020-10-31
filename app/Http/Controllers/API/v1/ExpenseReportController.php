<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReportResource;
use App\Models\Expense;
use App\Models\ExpenseDetail;
use App\Models\ExpenseReport;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Spatie\Activitylog\Models\Activity;

class ExpenseReportController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:view all expense reports'], ['only' => ['index']]);
        $this->middleware(['permission:view expense reports'], ['only' => ['show']]);
        $this->middleware(['permission:add expense reports'], ['only' => ['create', 'store']]);
        // $this->middleware(['permission:edit expense reports'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete expense reports'], ['only' => ['destroy']]);
    }

    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id)
    {
        return Validator::make($data, [

            'code' => ['nullable', Rule::unique('employees')->ignore($id, 'id'), 'max:255'],

            'description' => ['required', 'max:255'],

            'employee_id' => ['required'],

            'remarks' => ['nullable'],

            'notes' => ['nullable'],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search ?? "";

        $sortBy = $request->sortBy ?? "updated_at";

        $sortType = $request->sortType ?? "desc";

        $itemsPerPage = $request->itemsPerPage ?? 10;

        $expense_reports = ExpenseReport::orderBy($sortBy, $sortType);

        if (request()->has('status')) {

            switch ($request->status) {

                    // case 'Archived Expense Reports':
                    //     $expense_reports = $expense_reports->onlyTrashed();

                    //     break;
                case 'Overdue Expense Reports':
                    $expense_reports = $expense_reports;

                    break;
                case 'Cancelled Expense Reports':

                    $expense_reports = $expense_reports->onlyTrashed();

                    // $expense_reports = $expense_reports->where([
                    //     ["expense_report_id", "<>", null],
                    //     // ["submitted_at", "<>", null],
                    //     // ["approved_at", "<>", null],
                    //     // ["rejected_at", "=", null],
                    //     ["cancelled_at", "<>", null],
                    // ]);

                    break;
                case 'Reimbursed Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                        ["payment_id", "<>", null],
                    ]);

                    break;
                case 'Rejected Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        // ["approved_at", "=", null],
                        ["rejected_at", "<>", null],
                        // ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Approved Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Submitted Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Unsubmitted Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "=", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;

                default:

                    // if (request()->has("admin_page")) {

                    //     $expense_reports = $expense_reports->where("submitted_at", '<>', null);

                    //     break;
                    // }

                    $expense_reports = $expense_reports;

                    break;
            }
        }

        if (request()->has("employee_id")) {

            if ($request->employee_id > 0) {

                $expense_reports = $expense_reports->where("employee_id", $request->employee_id);
            }
        }

        if (request()->has("start_date") && request()->has("end_date")) {

            $start_date = Carbon::parse($request->start_date)->startOfDay();

            $end_date = Carbon::parse($request->end_date)->endOfDay();

            $expense_reports = $expense_reports->whereBetween("created_at", [$start_date, $end_date]);
        }

        $expense_reports = $expense_reports->where(function ($query) use ($search) {

            $query->where('code', "like", "%" . $search . "%");

            $query->orWhere('description', "like", "%" . $search . "%");
        });

        $expense_reports = $expense_reports->paginate($itemsPerPage);

        return ExpenseReportResource::collection($expense_reports);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validator($request->all(), null)->validate();

        $expense_report = new ExpenseReport();

        $expense_report->description = $request->description;

        $expense_report->employee_id = $request->employee_id;

        $expense_report->remarks = $request->remarks;

        $expense_report->notes = $request->notes;

        $expense_report->save();

        $expense_report->code = generate_code(ExpenseReport::class, "EXR", 10);

        $expense_report->save();

        foreach ($request->expenses as $key => $value) {

            $expense = Expense::find($value["id"]);

            $expense->expense_report_id = $expense_report->id;

            $expense->save();
        }

        return response(
            [
                'data' => new ExpenseReportResource($expense_report),

                'message' => 'Created successfully'
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

        return response(
            [
                'data' => new ExpenseReportResource($expense_report),

                'message' => 'Retrieved successfully'
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $message = "Item(s) updated successfully";

        switch ($request->action) {

            case 'submit':

                if (!app("auth")->user()->hasPermissionTo('submit expense reports')) {

                    abort(403);
                }

                // // Prevent submit if expense report has been submitted or approved or cancelled
                $submitted = ExpenseReport::whereIn("id", $request->ids)
                    ->where("submitted_at", "<>", null)->count();

                if ($submitted > 0) {
                    return response("Expense Report has already been submitted", 403);
                }

                foreach ($request->ids as $id) {

                    $expense_report = ExpenseReport::withTrashed()->find($id);

                    $this->updateReport($expense_report, true, false, false, false, false);

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {

                        $this->updateExpense($expense, true, false, false, false, false);
                    }
                }

                $message = "Expense Report(s) submitted successfully";

                break;

            case 'approve':

                if (!app("auth")->user()->hasPermissionTo('approve expense reports')) {

                    abort(403);
                }

                // // Prevent approve if expense report has been approved or cancelled
                $approved = ExpenseReport::whereIn("id", $request->ids)
                    ->where("approved_at", "<>", null)->count();

                if ($approved > 0) {
                    return response("Expense Report has already been approved", 422);
                }

                foreach ($request->ids as $id) {

                    $expense_report = ExpenseReport::withTrashed()->find($id);

                    $this->updateReport($expense_report, false, false, true, false, false);

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {

                        $this->updateExpense($expense, false, false, true, false, false);
                    }
                }

                $message = "Expense Report(s) approved successfully";

                break;

            case 'cancel':

                if (!app("auth")->user()->hasPermissionTo('cancel expense reports')) {

                    abort(403);
                }

                // // Prevent approve if expense report has been approved or cancelled
                $cancelled = ExpenseReport::whereIn("id", $request->ids)
                    ->where("cancelled_at", "<>", null)->count();

                if ($cancelled > 0) {
                    return response("Expense Report has already been cancelled", 422);
                }

                foreach ($request->ids as $id) {

                    $expense_report = ExpenseReport::withTrashed()->find($id);

                    $this->updateReport($expense_report, false, false, false, false, true);

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {

                        $this->updateExpense($expense, false, false, false, false, true);
                    }
                }

                $message = "Expense Report(s) cancelled successfully";

                break;

            case 'reject':

                if (!app("auth")->user()->hasPermissionTo('reject expense reports')) {

                    abort(403);
                }

                // // Prevent approve if expense report has been approved or cancelled
                $rejected = ExpenseReport::whereIn("id", $request->ids)
                    ->where("rejected_at", "<>", null)->count();

                if ($rejected > 0) {
                    return response("Expense Report has already been rejected", 422);
                }

                foreach ($request->ids as $id) {

                    $expense_report = ExpenseReport::withTrashed()->find($id);

                    $this->updateReport($expense_report, false, false, false, true, false);

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {

                        $this->updateExpense($expense, false, false, false, true, false);
                    }
                }

                $message = "Expense Report(s) rejected successfully";

                break;

            case 'duplicate':

                if (!app("auth")->user()->hasPermissionTo('duplicate expense reports')) {

                    abort(403);
                }

                foreach ($request->ids as $value) {

                    $expense_report = ExpenseReport::withTrashed()->find($value);

                    $new_report = $expense_report->replicate();

                    $new_report->code = null;

                    $new_report->submitted_at = null;

                    $new_report->reviewed_at = null;

                    $new_report->approved_at = null;

                    $new_report->rejected_at = null;

                    $new_report->cancelled_at = null;

                    $new_report->deleted_at = null;

                    $new_report->submitted_by = null;

                    $new_report->reviewed_by = null;

                    $new_report->approved_by = null;

                    $new_report->rejected_by = null;

                    $new_report->cancelled_by = null;

                    $new_report->deleted_by = null;

                    $new_report->save();

                    $new_report->code = "ER" . date("Y") . str_pad($new_report->id, 5, '0', STR_PAD_LEFT);

                    $new_report->save();

                    foreach ($expense_report->expenses()->withTrashed()->get() as $key => $value) {

                        $expense = Expense::withTrashed()->find($value["id"]);

                        $new_expense = $expense->replicate();

                        $new_expense->submitted_at = null;

                        $new_expense->reviewed_at = null;

                        $new_expense->approved_at = null;

                        $new_expense->rejected_at = null;

                        $new_expense->cancelled_at = null;

                        $new_expense->deleted_at = null;

                        $new_expense->submitted_by = null;

                        $new_expense->reviewed_by = null;

                        $new_expense->approved_by = null;

                        $new_expense->rejected_by = null;

                        $new_expense->cancelled_by = null;

                        $new_expense->deleted_by = null;

                        $new_expense->expense_report_id = $new_report->id;

                        $new_expense->save();
                    }
                }

                $message = "Expense Report(s) duplicated successfully";

                break;

            case 'restore':

                foreach ($request->ids as $id) {

                    $expense_report = ExpenseReport::withTrashed()->find($id);

                    $expense_report->restore();

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {

                        $expense->restore();
                    }
                }

                $message = "Expense Report(s) restored successfully";

                break;

            default:

                if (!app("auth")->user()->hasPermissionTo('edit expense reports')) {

                    abort(403);
                }

                $this->validator($request->all(), $id)->validate();

                $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                // // Prevent update if expense report has been cancelled
                if (Auth::user()->is_admin) {

                    if ($expense_report->payment_id > 0) {

                        return response("Expense Report already has payment", 422);
                    }

                    if ($expense_report->rejected_at !== null || $expense_report->cancelled_at !== null || $expense_report->deleted_at !== null) {

                        return response("Action can't be performed", 422);
                    }
                } else {

                    if ($expense_report->approved_at !== null || $expense_report->rejected_at !== null || $expense_report->cancelled_at !== null || $expense_report->deleted_at !== null) {

                        return response("Action can't be performed", 422);
                    }
                    
                    if ($expense_report->payment_id > 0) {

                        return response("Expense Report already has payment", 422);
                    }
                }

                $expense_report->description = $request->description;

                $expense_report->employee_id = $request->employee_id;

                $expense_report->remarks = $request->remarks;

                $expense_report->notes = $request->notes;

                $expense_report->save();

                // set existing references to null
                foreach ($expense_report->expenses as $key => $value) {

                    $expense = Expense::withTrashed()->find($value["id"]);

                    $expense->expense_report_id = null;

                    $expense->deleted_at = now();

                    $expense->save();
                }

                foreach ($request->expenses as $key => $value) {

                    $expense = Expense::withTrashed()->find($value["id"]);

                    $expense->expense_report_id = $expense_report->id;

                    $expense->deleted_at = null;

                    $expense->save();
                }

                $message = "Expense Report updated successfully";

                break;
        }

        return response(
            [
                'message' => $message
            ],
            201
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $deleted = ExpenseReport::whereIn("id", $request->ids)
            ->where("deleted_at", "<>", null)->count();

        if ($deleted > 0) {
            return response("Expense Report has already been cancelled", 422);
        }

        foreach ($request->ids as $id) {

            $expense_report = ExpenseReport::find($id);

            // // Prevent delete if expense report has been cancelled/deleted
            // // Approved expense report can only be cancelled/deleted by Admin if expense report has no payment yet
            // if(true) {
            //     abort(403);
            // }

            $expense_report->deleted_by = Auth::user()->id;

            $expense_report->delete();

            foreach ($expense_report->expenses as $expense) {

                $expense->delete();
            }
        }

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }

    public function updateReport(ExpenseReport $expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $expense_report->submitted_at = $submitted ? now() : $expense_report->submitted_at;
        $expense_report->reviewed_at = $reviewed ? now() : $expense_report->reviewed_at;
        $expense_report->approved_at = $approved ? now() : $expense_report->approved_at;
        $expense_report->rejected_at = $rejected ? now() : $expense_report->rejected_at;
        $expense_report->cancelled_at = $cancelled ? now() : $expense_report->cancelled_at;

        $expense_report->submitted_by = $submitted ? Auth::user()->id : $expense_report->submitted_by;
        $expense_report->reviewed_by = $reviewed ? Auth::user()->id : $expense_report->reviewed_by;
        $expense_report->approved_by = $approved ? Auth::user()->id : $expense_report->approved_by;
        $expense_report->rejected_by = $rejected ? Auth::user()->id : $expense_report->rejected_by;
        $expense_report->cancelled_by = $cancelled ? Auth::user()->id : $expense_report->cancelled_by;

        if ($approved) {

            $expense_report->submitted_at = $expense_report->submitted_at == null ? now() : $expense_report->submitted_at;

            $expense_report->submitted_by = $expense_report->submitted_by == null ? Auth::user()->id : $expense_report->submitted_by;
        }

        $expense_report->disableLogging();

        $expense_report->save();

        $this->logUpdateActivity($expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled);
    }

    public function updateExpense(Expense $expense, $reviewed, $submitted, $approved, $rejected, $cancelled)
    {
        $expense->submitted_at = $submitted ? now() : $expense->submitted_at;
        $expense->reviewed_at = $reviewed ? now() : $expense->reviewed_at;
        $expense->approved_at = $approved ? now() : $expense->approved_at;
        $expense->rejected_at = $rejected ? now() : $expense->rejected_at;
        $expense->cancelled_at = $cancelled ? now() : $expense->cancelled_at;

        $expense->submitted_by = $submitted ? Auth::user()->id : $expense->submitted_by;
        $expense->reviewed_by = $reviewed ? Auth::user()->id : $expense->reviewed_by;
        $expense->approved_by = $approved ? Auth::user()->id : $expense->approved_by;
        $expense->rejected_by = $rejected ? Auth::user()->id : $expense->rejected_by;
        $expense->cancelled_by = $cancelled ? Auth::user()->id : $expense->cancelled_by;

        if ($approved) {

            $expense->submitted_at = $expense->submitted_at == null ? now() : $expense->submitted_at;

            $expense->submitted_by = $expense->submitted_by == null ? Auth::user()->id : $expense->submitted_by;
        }

        $expense->disableLogging();

        $expense->save();
    }

    public function logUpdateActivity(ExpenseReport $expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $action = "";
        $key = "";
        $value = "";

        if ($submitted) {

            $action = "submitted";

            $key = "submitted_at";

            $value = $expense_report->submitted_at;
        } elseif ($reviewed) {

            $action = "reviewed";

            $key = "reviewed_at";

            $value = $expense_report->reviewed_at;
        } elseif ($approved) {

            $action = "approved";

            $key = "approved_at";

            $value = $expense_report->approved_at;
        } elseif ($rejected) {

            $action = "rejected";

            $key = "rejected_at";

            $value = $expense_report->rejected_at;
        } elseif ($cancelled) {

            $action = "cancelled";

            $key = "cancelled_at";

            $value = $expense_report->cancelled_at;
        }

        activity()
            ->performedOn($expense_report)
            ->withProperties(['attributes' => ["code" => $expense_report->code, $key => $value]])
            ->log($action . ' expense report');
    }
}
