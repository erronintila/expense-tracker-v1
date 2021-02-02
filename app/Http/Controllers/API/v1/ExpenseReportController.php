<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReport\ExpenseReportIndexResource;
use App\Http\Resources\ExpenseReport\ExpenseReportShowResource;
use App\Http\Resources\ExpenseReportResource;
use App\Models\Expense;
use App\Models\ExpenseReport;
use App\Notifications\ExpenseReportNotification;
use App\Traits\ApiResponse;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseReportController extends Controller
{
    use ApiResponse;

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

            'code' => ['nullable', Rule::unique('expense_reports')->ignore($id, 'id'), 'max:255'],

            'description' => ['required', 'max:255'],

            'user_id' => ['required'],

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

        $expense_reports = ExpenseReport::with(['user' => function ($query) {
            $query->withTrashed();
        }])
            // ->with(['expenses' => function ($query) {
            //     $query->withTrashed();
            // }])
            ->with(['payments' => function ($query) {
                $query->withTrashed();
            }])
            ->orderBy($sortBy, $sortType);

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
                    ])
                        ->whereHas("payments", function ($query) {
                            $query->where([
                                ["approved_at", "<>", null],

                                ["released_at", "<>", null],

                                ["received_at", "<>", null],

                                ["cancelled_at", "=", null],

                                ["deleted_at", "=", null],
                            ]);
                        });

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
                    ])->whereDoesntHave("payments");

                    break;
                case 'Submitted Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])->whereDoesntHave("payments");

                    break;
                case 'Unsubmitted Expense Reports':

                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "=", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])->whereDoesntHave("payments");

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

        if (request()->has("user_id")) {
            if ($request->user_id > 0) {
                $expense_reports = $expense_reports->where("user_id", $request->user_id);
            }
        }

        if (request()->has("payment_id")) {
            $payment_id = $request->payment_id;

            $expense_reports = $expense_reports->whereHas("payments", function ($query) use ($payment_id) {
                $query->where("payments.id", $payment_id);
            });
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

        if (request()->has("create_payment")) {
            $start_date = Carbon::parse($request->start_date)->startOfDay();

            $end_date = Carbon::parse($request->end_date)->endOfDay();

            $expense_reports = ExpenseReport::with(['user' => function ($query) {
                $query->withTrashed();
            }])
                ->where(function ($query) use ($search) {
                    $query->where('code', "like", "%" . $search . "%");
        
                    $query->orWhere('description', "like", "%" . $search . "%");
                })
                ->where("user_id", $request->user_id)
                ->orderBy($sortBy, $sortType)
                ->whereBetween("created_at", [$start_date, $end_date])
                ->where("approved_at", "<>", null)
                ->where("submitted_at", "<>", null)
                ->where("cancelled_at", null)
                ->whereDoesntHave("payments");
        }

        $expense_reports = $expense_reports->paginate($itemsPerPage);

        return ExpenseReportIndexResource::collection($expense_reports);
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

        $expense_report->user_id = $request->user_id;

        $expense_report->remarks = $request->remarks;

        $expense_report->notes = $request->notes;

        $expense_report->code = generate_code(ExpenseReport::class, "EXR", 10);

        $expense_report->submission_period = setting("submission_period");

        $expense_report->approval_period = setting("approval_period");

        $expense_report->created_by = Auth::id();

        $expense_report->updated_by = Auth::id();

        $expense_report->save();

        foreach ($request->expenses as $key => $value) {
            $expense = Expense::withTrashed()->findOrFail($value["id"]);

            $expense->expense_report_id = $expense_report->id;

            $expense->disableLogging();

            $expense->save();

            log_activity(
                "expense",
                $expense,
                [
                "attributes" => [
                    "code" => $expense->code,
                    "updated_at" => $expense->updated_at
                ],
                "custom" => [
                    "link" => "expenses/{$expense->id}"
                ]],
                "expense associated with expense report #{$expense_report->code}"
            );
        }

        return response(
            [
                // 'data' => new ExpenseReportResource($expense_report),

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
        $expense_report = ExpenseReport::withTrashed()
            ->with(['user' => function ($query) {
                $query->withTrashed();
            }])
            // ->with(['expenses' => function ($query) {
            //     $query->withTrashed();
            //     $query->with(['vendor' => function ($query) {
            //         $query->withTrashed();
            //     }]);
            //     $query->with(['expense_type' => function ($query) {
            //         $query->withTrashed();
            //     }]);
            // }])
            ->with(['payments' => function ($query) {
                $query->withTrashed();
            }])
            ->findOrFail($id);

        return response(
            [
                'data' => new ExpenseReportShowResource($expense_report),

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

                // check if user is allowed to submit
                if (!app("auth")->user()->hasPermissionTo('submit expense reports')) {
                    abort(403);
                }
                
                // check if deleted/cancelled
                $deleted = ExpenseReport::whereIn("id", $request->ids)
                    ->where("deleted_at", "<>", null)->count();

                if ($deleted > 0) {
                    return $this->errorResponse("Expense Report has already been cancelled.", 422);
                }

                // check if rejected
                $rejected = ExpenseReport::whereIn("id", $request->ids)
                    ->where("rejected_at", "<>", null)->count();

                if ($rejected > 0) {
                    return $this->errorResponse("Expense Report has already been rejected.", 422);
                }

                // check if approved
                $approved = ExpenseReport::whereIn("id", $request->ids)
                    ->where("rejected_at", "<>", null)->count();

                if ($approved > 0) {
                    return $this->errorResponse("Expense Report has already been approved.", 422);
                }

                // check if submitted
                $submitted = ExpenseReport::whereIn("id", $request->ids)
                    ->where("submitted_at", "<>", null)->count();

                if ($submitted > 0) {
                    return $this->errorResponse("Expense Report has already been submitted.", 422);
                }

                // check if has payment
                $paid = ExpenseReport::whereIn("id", $request->ids)
                    ->whereHas("payments")->count();

                if ($paid > 0) {
                    return $this->errorResponse("Expense Report has payment records", 422);
                }

                // // Prevent submit if expense report has been submitted or approved or cancelled
                // $submitted = ExpenseReport::whereIn("id", $request->ids)
                //     ->where("submitted_at", "<>", null)->count();

                // if ($submitted > 0) {
                //     return $this->errorResponse("Expense Report has already been submitted.", 422);
                // }

                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                    $this->updateReport($expense_report, true, false, false, false, false);

                    foreach (User::where("is_admin", 1)->get() as $user) {
                        Notification::send($user, new ExpenseReportNotification([
                            "action" => "submit",
                            "expense_report" => $expense_report
                        ]));
                    }
                }

                $message = "Expense Report(s) submitted successfully";
                
                

                break;

            case 'approve':

                // check if user is allowed to approve
                if (!app("auth")->user()->hasPermissionTo('approve expense reports')) {
                    abort(403);
                }

                // check if deleted/cancelled
                $deleted = ExpenseReport::whereIn("id", $request->ids)
                    ->where("deleted_at", "<>", null)->count();

                if ($deleted > 0) {
                    return $this->errorResponse("Expense Report has already been cancelled.", 422);
                }

                // check if rejected
                $rejected = ExpenseReport::whereIn("id", $request->ids)
                    ->where("rejected_at", "<>", null)->count();

                if ($rejected > 0) {
                    return $this->errorResponse("Expense Report has already been rejected.", 422);
                }

                // check if approved
                $approved = ExpenseReport::whereIn("id", $request->ids)
                    ->where("approved_at", "<>", null)->count();

                if ($approved > 0) {
                    return $this->errorResponse("Expense Report has already been approved.", 422);
                }

                // check if has payment
                $paid = ExpenseReport::whereIn("id", $request->ids)
                    ->whereHas("payments")->count();

                if ($paid > 0) {
                    return $this->errorResponse("Expense Report has payment records", 422);
                }

                // // Prevent approve if expense report has been approved or cancelled
                // $approved = ExpenseReport::whereIn("id", $request->ids)
                //     ->where("approved_at", "<>", null)->count();

                // if ($approved > 0) {
                //     return $this->errorResponse("Expense Report has already been approved.", 422);
                // }

                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                    $this->updateReport($expense_report, false, false, true, false, false);

                    Notification::send(User::withTrashed()->find($expense_report->user->id), new ExpenseReportNotification([
                        "action" => "approve",
                        "expense_report" => $expense_report
                    ]));
                }

                $message = "Expense Report(s) approved successfully";

                break;

            case 'cancel':

                // check if user is allowed to cancel
                if (!app("auth")->user()->hasPermissionTo('cancel expense reports')) {
                    abort(403);
                }

                // check if deleted/cancelled
                $deleted = ExpenseReport::whereIn("id", $request->ids)
                    ->where("deleted_at", "<>", null)->count();

                if ($deleted > 0) {
                    return $this->errorResponse("Expense Report has already been cancelled.", 422);
                }

                // check if has payment
                $paid = ExpenseReport::whereIn("id", $request->ids)
                    ->whereHas("payments")->count();

                if ($paid > 0) {
                    return $this->errorResponse("Expense Report has payment records", 422);
                }

                // // Prevent approve if expense report has been approved or cancelled
                // $cancelled = ExpenseReport::whereIn("id", $request->ids)
                //     ->where("cancelled_at", "<>", null)->count();

                // if ($cancelled > 0) {
                //     return $this->errorResponse("Expense Report has already been cancelled.", 422);
                // }

                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                    $this->updateReport($expense_report, false, false, false, false, true);

                    // foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {
                    //     $this->updateExpense($expense, false, false, false, false, true);
                    // }
                }

                $message = "Expense Report(s) cancelled successfully";

                break;

            case 'reject':

                // check if user is allowed to reject
                if (!app("auth")->user()->hasPermissionTo('reject expense reports')) {
                    abort(403);
                }

                // check if rejected
                $rejected = ExpenseReport::whereIn("id", $request->ids)
                    ->where("rejected_at", "<>", null)->count();

                if ($rejected > 0) {
                    return $this->errorResponse("Expense Report has already been rejected.", 422);
                }

                // check if has payment
                $paid = ExpenseReport::whereIn("id", $request->ids)
                    ->whereHas("payments")->count();

                if ($paid > 0) {
                    return $this->errorResponse("Expense Report has payment records", 422);
                }

                // // Prevent approve if expense report has been approved or cancelled
                // $rejected = ExpenseReport::whereIn("id", $request->ids)
                //     ->where("rejected_at", "<>", null)->count();

                // if ($rejected > 0) {
                //     return $this->errorResponse("Expense Report has already been rejected.", 422);
                // }

                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                    $this->updateReport($expense_report, false, false, false, true, false);

                    $expense_report->notes = $request->notes ?? "";

                    $expense_report->disableLogging();

                    $expense_report->save();

                    Notification::send(User::withTrashed()->find($expense_report->user->id), new ExpenseReportNotification([
                        "action" => "reject",
                        "expense_report" => $expense_report
                    ]));

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {
                        $expense_amount = $expense->amount - $expense->reimbursable_amount;

                        $expense->user->remaining_fund += $expense_amount;

                        $expense->user->disableLogging();

                        $expense->user->save();
                    }
                }

                $message = "Expense Report(s) rejected successfully";

                break;

            case 'duplicate':

                // check if user is allowed to duplicate
                if (!app("auth")->user()->hasPermissionTo('duplicate expense reports')) {
                    abort(403);
                }

                foreach ($request->ids as $value) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($value);

                    // check if remaining fund will be less than zero when duplicated
                    $report_amount = $expense_report->expenses()->withTrashed()->sum("amount") - $expense_report->expenses()->withTrashed()->sum("reimbursable_amount");

                    $user = User::withTrashed()->findOrFail($expense_report->user_id);

                    if (($user->remaining_fund - $report_amount) < 0) {
                        return $this->errorResponse("Employee revolving fund can't be less than zero.", 422);
                    }

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

                    // $new_report->save();

                    $new_report->code = generate_code(ExpenseReport::class, "EXR", 10);

                    $new_report->save();

                    foreach ($expense_report->expenses()->withTrashed()->get() as $key => $value) {
                        $expense = Expense::withTrashed()->findOrFail($value["id"]);

                        $new_expense = $expense->replicate();

                        $new_expense->code = generate_code(Expense::class, "EXP", 10);

                        $new_expense->deleted_at = null;

                        $new_expense->deleted_by = null;

                        $new_expense->expense_report_id = $new_report->id;

                        $new_expense->disableLogging();

                        $new_expense->save();

                        log_activity(
                            "expense",
                            $new_expense,
                            [
                        "attributes" => [
                            "code" => $new_expense->code,
                            "updated_at" => $new_expense->updated_at
                        ],
                        "custom" => [
                            "link" => "expenses/{$new_expense->id}"
                        ]],
                            "duplicated expense"
                        );
                    }
                }

                $message = "Expense Report(s) duplicated successfully";

                break;

            case 'restore':

                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                    $expense_report->restore();

                    foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {
                        $expense->restore();
                    }
                }

                $message = "Expense Report(s) restored successfully";

                break;

            default:

                // check if user is allowed to edit
                if (!app("auth")->user()->hasPermissionTo('edit expense reports')) {
                    abort(403);
                }

                $this->validator($request->all(), $id)->validate();

                $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                // // Prevent update if expense report has been cancelled
                if (Auth::user()->is_admin) {
                    $count = 0;

                    $count = ExpenseReport::withTrashed()->where("id", $id)
                    ->where(function ($query) {
                        $query->whereHas('payments');
                        $query->orWhere("cancelled_at", "<>", null);
                        $query->orWhere("rejected_at", "<>", null);
                        $query->orWhere("deleted_at", "<>", null);
                    })
                    ->count();
                    
                    if ($count > 0) {
                        return $this->errorResponse("Expense Report can't be edited.", 422);
                    }
                } else {
                    $count = 0;

                    $count = ExpenseReport::withTrashed()->where("id", $id)
                    ->where(function ($query) {
                        $query->where("approved_at", "<>", null);
                        $query->orWhere("cancelled_at", "<>", null);
                        $query->orWhere("rejected_at", "<>", null);
                        $query->orWhere("deleted_at", "<>", null);
                    })
                    ->count();
                    
                    if ($count > 0) {
                        return $this->errorResponse("Expense Report can't be edited.", 422);
                    }
                    // if ($expense_report->approved_at !== null || $expense_report->rejected_at !== null || $expense_report->cancelled_at !== null || $expense_report->deleted_at !== null) {
                    //     return $this->errorResponse("Action can't be performed", 422);
                    // }

                    // if ($expense_report->payment_id > 0) {
                    //     return $this->errorResponse("Expense Report already has payment", 422);
                    // }
                }

                $expense_report->description = $request->description;

                $expense_report->user_id = $request->user_id;

                $expense_report->remarks = $request->remarks;

                $expense_report->notes = $request->notes;

                $expense_report->submission_period = setting("submission_period");

                $expense_report->approval_period = setting("approval_period");

                $expense_report->updated_by = Auth::id();

                $expense_report->save();

                // set existing references to null
                foreach ($expense_report->expenses as $key => $value) {
                    $expense = Expense::withTrashed()->findOrFail($value["id"]);

                    $expense->expense_report_id = null;

                    // $expense->deleted_at = now();

                    $expense->disableLogging();

                    $expense->save();
                }

                foreach ($request->expenses as $key => $value) {
                    $expense = Expense::withTrashed()->findOrFail($value["id"]);

                    $expense->expense_report_id = $expense_report->id;

                    $expense->deleted_at = null;

                    $expense->disableLogging();

                    $expense->save();

                    log_activity(
                        "expense",
                        $expense,
                        [
                        "attributes" => [
                            "code" => $expense->code,
                            "updated_at" => $expense->updated_at
                        ],
                        "custom" => [
                            "link" => "expenses/{$expense->id}"
                        ]],
                        "updated expense association with expense report #{$expense_report->code}"
                    );
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
        // check if deleted/cancelled
        $deleted = ExpenseReport::whereIn("id", $request->ids)
            ->where("deleted_at", "<>", null)->count();

        if ($deleted > 0) {
            return $this->errorResponse("Expense Report has already been cancelled", 422);
        }

        //check if has payment
        $paid = ExpenseReport::whereIn("id", $request->ids)
            ->whereHas("payments")->count();

        if ($paid > 0) {
            return $this->errorResponse("Expense Report has payment records", 422);
        }

        if (request()->has("ids")) {
            foreach ($request->ids as $id) {
                $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

                // // Prevent delete if expense report has been cancelled/deleted
                // // Approved expense report can only be cancelled/deleted by Admin if expense report has no payment yet
                // if(true && !Auth::user()->is_admin) {
                //     abort(403);
                // }

                $expense_report->deleted_by = Auth::id();

                // $expense_report->notes = $request->notes;

                $expense_report->disableLogging();

                $expense_report->save();

                $expense_report->enableLogging();

                $expense_report->delete();

                foreach ($expense_report->expenses as $expense) {
                    $expense->delete();
                }
            }
        } else {
            $expense_report = ExpenseReport::withTrashed()->findOrFail($id);

            // // Prevent delete if expense report has been cancelled/deleted
            // // Approved expense report can only be cancelled/deleted by Admin if expense report has no payment yet
            // if(true && !Auth::user()->is_admin) {
            //     abort(403);
            // }

            // $expense_report->deleted_by = Auth::id();

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

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE REPORT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Update Expense Report status
     *
     * @param  mixed $expense_report
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
    public function updateReport(ExpenseReport $expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $expense_report->submitted_at = $submitted ? now() : $expense_report->submitted_at;
        $expense_report->reviewed_at = $reviewed ? now() : $expense_report->reviewed_at;
        $expense_report->approved_at = $approved ? now() : $expense_report->approved_at;
        $expense_report->rejected_at = $rejected ? now() : $expense_report->rejected_at;
        $expense_report->cancelled_at = $cancelled ? now() : $expense_report->cancelled_at;

        $expense_report->submitted_by = $submitted ? Auth::id() : $expense_report->submitted_by;
        $expense_report->reviewed_by = $reviewed ? Auth::id() : $expense_report->reviewed_by;
        $expense_report->approved_by = $approved ? Auth::id() : $expense_report->approved_by;
        $expense_report->rejected_by = $rejected ? Auth::id() : $expense_report->rejected_by;
        $expense_report->cancelled_by = $cancelled ? Auth::id() : $expense_report->cancelled_by;

        if ($approved) {
            $expense_report->submitted_at = $expense_report->submitted_at == null ? now() : $expense_report->submitted_at;

            $expense_report->submitted_by = $expense_report->submitted_by == null ? Auth::id() : $expense_report->submitted_by;
        }

        $expense_report->disableLogging();

        $expense_report->save();

        $this->logUpdateActivity($expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled);
    }
    
    /**
     * Update Expense status
     *
     * @param  mixed $expense
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
    public function updateExpense(Expense $expense, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $expense->submitted_at = $submitted ? now() : $expense->submitted_at;
        $expense->reviewed_at = $reviewed ? now() : $expense->reviewed_at;
        $expense->approved_at = $approved ? now() : $expense->approved_at;
        $expense->rejected_at = $rejected ? now() : $expense->rejected_at;
        $expense->cancelled_at = $cancelled ? now() : $expense->cancelled_at;

        $expense->submitted_by = $submitted ? Auth::id() : $expense->submitted_by;
        $expense->reviewed_by = $reviewed ? Auth::id() : $expense->reviewed_by;
        $expense->approved_by = $approved ? Auth::id() : $expense->approved_by;
        $expense->rejected_by = $rejected ? Auth::id() : $expense->rejected_by;
        $expense->cancelled_by = $cancelled ? Auth::id() : $expense->cancelled_by;

        if ($approved) {
            $expense->submitted_at = $expense->submitted_at == null ? now() : $expense->submitted_at;

            $expense->submitted_by = $expense->submitted_by == null ? Auth::id() : $expense->submitted_by;
        }

        $expense->disableLogging();

        $expense->save();
    }
    
    /**
     * Logs activity
     *
     * @param  mixed $expense_report
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
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

        activity("expense_report")
            ->causedBy(Auth::user())
            ->performedOn($expense_report)
            ->withProperties(['attributes' => ["code" => $expense_report->code, $key => $value], 'custom' => ["link" => "expense_reports/{$expense_report->id}"]])
            ->log($action . ' expense report');
    }

    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenseReports(Request $request)
    {
        if (request()->has('edit_report')) {
            $expense_report = ExpenseReport::withTrashed()
            ->with(['user' => function ($query) {
                $query->withTrashed();
            }])
            // ->with(['expenses' => function ($query) {
            //     $query->withTrashed();
            //     $query->with(['vendor' => function ($query) {
            //         $query->withTrashed();
            //     }]);
            //     $query->with(['expense_type' => function ($query) {
            //         $query->withTrashed();
            //     }]);
            // }])
            // ->with('payments')
            ->findOrFail($request->id);

            return response(
                [
                'data' => new ExpenseReportResource($expense_report),

                'message' => 'Retrieved successfully'
            ],
                200
            );
        }

        $expense_reports = ExpenseReport::with(['expenses' => function ($query) {
            $query->withTrashed();
            $query->with(['expense_type' => function ($query2) {
                $query2->withTrashed();
            }]);
        }])
        ->with(['user' => function ($query) {
            $query->withTrashed();
        }])
        ->orderBy("created_at");

        if (request()->has("id")) {
            $expense_reports = $expense_reports->where("id", $request->id);
        }

        if (request()->has("user_id")) {
            $expense_reports = $expense_reports->where("user_id", $request->user_id);
        }

        // if (request()->has("payment_id")) {
        //     // $expense_reports = $expense_reports->where("payment_id", $request->payment_id);
        //     $expense_reports = $expense_reports;
        // }

        if (request()->has("start_date") && request()->has("end_date")) {
            $start_date = Carbon::parse($request->start_date)->startOfDay();

            $end_date = Carbon::parse($request->end_date)->endOfDay();

            $expense_reports = $expense_reports->whereBetween("created_at", [$start_date, $end_date]);
        }

        if (request()->has("status")) {
            switch ($request->status) {
                case 'Archived':
                    $expense_reports = $expense_reports->onlyTrashed();
                    break;
                default:
                    $expense_reports = $expense_reports;
                    break;
            }
        }

        if(request()->has("total_count")) {
            $total_unsubmitted = DB::table('expense_reports')->where([
                ["submitted_at", "=", null],
                ["approved_at", "=", null],
                ["rejected_at", "=", null],
                ["cancelled_at", "=", null],
                ["deleted_at", "=", null],
            ])
            ->count();

            $total_unapproved = DB::table('expense_reports')->where([
                ["submitted_at", "<>", null],
                ["approved_at", "=", null],
                ["rejected_at", "=", null],
                ["cancelled_at", "=", null],
                ["deleted_at", "=", null],
            ])
            ->count();

            return $this->successResponse([
                "total_unsubmitted" => $total_unsubmitted,
                "total_unapproved" => $total_unapproved
            ], 
            "Success",
            200);
        }

        if (request()->has("create_payment")) {
            $expense_reports = $expense_reports
                ->where("approved_at", "<>", null)
                ->where("submitted_at", "<>", null)
                ->where("cancelled_at", null)
                ->whereDoesntHave("payments")
                ->get();

            return response()->json([
                "data" => ExpenseReportResource::collection($expense_reports),
            ]);
        }

        return response()->json([
            "data" => ExpenseReportResource::collection($expense_reports->get()),
        ]);
    }
}
