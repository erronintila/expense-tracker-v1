<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReportResource;
use App\Models\Expense;
use App\Models\ExpenseDetail;
use App\Models\ExpenseReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseReportController extends Controller
{
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
                case 'Archived':
                    $expense_reports = $expense_reports->onlyTrashed();
                    break;
                case 'Cancelled':
                    $expense_reports = $expense_reports->onlyTrashed();
                    // $expense_reports = $expense_reports->where("cancelled_at", '<>', null);
                    break;
                case 'Approved':
                    $expense_reports = $expense_reports->where("approved_at", '<>', null)->where("cancelled_at", null);
                    break;
                case 'Pending':
                    $expense_reports = $expense_reports->where("submitted_at", '<>', null)->where("approved_at", null)->where("cancelled_at", null);
                    break;
                case 'For Submission':
                    $expense_reports = $expense_reports->where("submitted_at", null)->where("approved_at", null)->where("cancelled_at", null);
                    break;
                default:
                    $expense_reports = $expense_reports->where("submitted_at", '<>', null)->where("cancelled_at", null);
                    break;
            }
        }

        if (request()->has("employee_id")) {
            if ($request->employee_id > 0) {
                $expense_reports = $expense_reports->where("employee_id", $request->employee_id);
            }
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $expense_reports = $expense_reports->whereBetween("created_at", [$request->start_date, $request->end_date]);
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

        $expense_report->code = "ER" . date("Y") . str_pad($expense_report->id, 5, '0', STR_PAD_LEFT);
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
                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->find($id);
                    $expense_report->submitted_at = now();
                    $expense_report->approved_at = null;
                    $expense_report->cancelled_at = null;
                    $expense_report->save();
                }

                $message = "Expense Report(s) submitted successfully";

                break;
            case 'approve':
                foreach ($request->ids as $id) {
                    $expense_report = ExpenseReport::withTrashed()->find($id);
                    $expense_report->submitted_at = $expense_report->submitted_at == null ? now() : $expense_report->submitted_at;
                    $expense_report->approved_at = now();
                    $expense_report->cancelled_at = null;
                    $expense_report->save();
                }

                $message = "Expense Report(s) approved successfully";

                break;
            case 'duplicate':
                foreach ($request->ids as $value) {
                    $expense_report = ExpenseReport::withTrashed()->find($value);

                    $new_report = $expense_report->replicate();
                    $new_report->code = null;

                    $new_report->submitted_at = null;
                    $new_report->approved_at = null;
                    $new_report->cancelled_at = null;
                    $new_report->deleted_at = null;

                    $new_report->submitted_by_user_id = null;
                    $new_report->approved_by_user_id = null;
                    $new_report->cancelled_by_user_id = null;
                    $new_report->deleted_by_user_id = null;

                    $new_report->save();

                    foreach ($expense_report->expenses->withTrashed()->get() as $key => $value) {
                        $expense = Expense::withTrashed()->find($value["id"]);
                        $new_expense = $expense->replicate();
                        $new_expense->deleted_at = null;
                        $new_expense->expense_report_id = $new_report->id;
                        $new_expense->save();

                        foreach ($expense->expense_details->withTrashed()->get() as $key => $value) {
                            $expense_detail = ExpenseDetail::find($value["id"]);
                            $new_expense_detail = $expense_detail->replicate();
                            $new_expense_detail->deleted_at = null;
                            $new_expense_detail->expense_id = $new_expense->id;
                            $new_expense_detail->save();
                        }
                    }
                }

                $message = "Expense Report(s) duplicated successfully";

                break;
                // case 'cancel':
                //     foreach ($request->ids as $id) {
                //         $expense_report = ExpenseReport::withTrashed()->find($id);
                //         $expense_report->cancelled_at = now();
                //         $expense_report->save();

                //         foreach ($expense_report->expenses()->withTrashed()->get() as $expense) {
                //             $expense->delete();
                //         }
                //     }

                //     $message = "Expense Report(s) cancelled successfully";

                //     break;
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
                $this->validator($request->all(), $id)->validate();

                $expense_report = ExpenseReport::findOrFail($id);

                $expense_report->description = $request->description;
                $expense_report->employee_id = $request->employee_id;
                $expense_report->remarks = $request->remarks;
                $expense_report->notes = $request->notes;

                $expense_report->save();

                // set existing references to null
                foreach ($expense_report->expenses as $key => $value) {
                    $expense = Expense::find($value["id"]);
                    $expense->expense_report_id = null;
                    $expense->save();
                }

                foreach ($request->expenses as $key => $value) {
                    $expense = Expense::find($value["id"]);
                    $expense->expense_report_id = $expense_report->id;
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
        foreach ($request->ids as $id) {
            $expense_report = ExpenseReport::find($id);
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
}
