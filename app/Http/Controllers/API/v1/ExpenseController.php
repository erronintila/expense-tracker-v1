<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseResource;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:view all expenses'], ['only' => ['index']]);

        $this->middleware(['permission:view expenses'], ['only' => ['show']]);

        $this->middleware(['permission:add expenses'], ['only' => ['create', 'store']]);

        $this->middleware(['permission:edit expenses'], ['only' => ['edit', 'update']]);

        $this->middleware(['permission:delete expenses'], ['only' => ['destroy']]);
    }

    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id, $fund)
    {
        return Validator::make($data, [

            'code' => ['nullable', Rule::unique('expenses')->ignore($id, 'id'), 'max:255'],

            'reference_no' => ['nullable'],

            'description' => ['nullable', 'max:255'],

            'amount' => ['required', 'numeric', 'gt:0',],

            'reimbursable_amount' => ['required', 'numeric'],

            'tax_name' => ['nullable', 'max:100'],

            'tax_rate' => ['required'],

            'is_compound_tax' => ['required'],

            'is_tax_inclusive' => ['required'],

            'tax_amount' => ['required'],

            'receipt_number' => ['nullable', 'max:255'],

            'date' => ['required'],

            'details' => ['nullable'],

            'remarks' => ['nullable'],

            'notes' => ['nullable'],

            'expense_type_id' => ['required'],

            'employee_id' => ['required'],
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

        $expenses = Expense::orderBy($sortBy, $sortType);

        if (request()->has('status')) {

            switch ($request->status) {

                case 'Cancelled Expenses':

                    $expenses = $expenses->onlyTrashed();

                    break;
                case 'Reimbursed Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "<>", null],
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                        ["paid_at", "<>", null],
                    ]);

                    break;
                case 'Rejected Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "<>", null],
                        ["submitted_at", "<>", null],
                        // ["approved_at", "<>", null],
                        ["rejected_at", "<>", null],
                        // ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Approved Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "<>", null],
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Submitted Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "<>", null],
                        ["submitted_at", "<>", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Unsubmitted Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "<>", null],
                        ["submitted_at", "=", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                case 'Unreported Expenses':

                    $expenses = $expenses->where([
                        ["expense_report_id", "=", null],
                        ["submitted_at", "=", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ]);

                    break;
                default:

                    $expenses = $expenses;

                    break;
            }
        }

        if (request()->has('start_date') && request()->has('end_date')) {

            $expenses = $expenses->whereBetween("date", [$request->start_date, $request->end_date]);
        }

        if (request()->has('employee_id')) {

            if ($request->employee_id > 0) {

                $expenses = $expenses->where("employee_id", $request->employee_id);
            }
        }

        if (request()->has('expense_type_id')) {

            if ($request->expense_type_id > 0) {

                $expenses = $expenses->where("expense_type_id", $request->expense_type_id);
            }
        }

        $expenses = $expenses->where(function ($query) use ($search) {

            $query->where('code', "like", "%" . $search . "%");

            $query->orWhere("description", "like", "%" . $search . "%");

            $query->orWhere("receipt_number", "like", "%" . $search . "%");

            $query->orWhere("date", "like", "%" . $search . "%");
        });

        $expenses = $expenses->paginate($itemsPerPage);

        // $expenses->appends(['sort' => 'votes'])->links();

        return ExpenseResource::collection($expenses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [

            'employee_id' => ['required'],
        ]);

        $employee = Employee::findOrFail($request->employee_id);

        $this->validator($request->all(), null, $employee->remaining_fund)->validate();

        $expense_type = ExpenseType::withTrashed()->findOrFail($request->expense_type_id);

        $expense = new Expense();

        $expense->code = generate_code(Expense::class, "EXP", 10);

        $expense->description = $request->description ?? $expense_type->name;

        $expense->receipt_number = $request->receipt_number;

        $expense->date = $request->date;

        $expense->amount = $request->amount;

        $expense->reimbursable_amount = $request->reimbursable_amount;

        $expense->remarks = $request->remarks;

        $expense->expense_type_id = $request->expense_type_id;

        $expense->sub_type_id = $request->sub_type_id;

        $expense->employee_id  = $request->employee_id;

        $expense->vendor_id  = $request->vendor_id;

        $expense->details  = json_encode($request->details);

        $expense->tax_name = $request->tax_name;

        $expense->tax_rate = $request->tax_rate;

        $expense->tax_amount = $request->tax_amount;

        $expense->is_tax_inclusive = $request->is_tax_inclusive;

        $expense->save();

        return response(
            [
                'data' => new ExpenseResource($expense),

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
        $expense = Expense::withTrashed()->findOrFail($id);

        return response(
            [
                'data' => new ExpenseResource($expense),

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
        switch ($request->action) {

            case 'restore':

                if (request()->has("ids")) {

                    foreach ($request->ids as $id) {

                        $expense = Expense::withTrashed()->findOrFail($id);

                        $expense->restore();
                    }
                } else {

                    $expense = Expense::withTrashed()->findOrFail($id);

                    $expense->restore();
                }

                // $expense = Expense::withTrashed()
                //     ->whereIn('id', $request->ids)
                //     ->restore();

                break;
            default:

                Validator::make($request->all(), [

                    'employee_id' => ['required'],
                ]);

                $employee = Employee::withTrashed()->findOrFail($request->employee_id);

                $this->validator($request->all(), $id, $employee->remaining_fund)->validate();

                $expense = Expense::findOrFail($id);

                $expense_type = ExpenseType::withTrashed()->findOrFail($request->expense_type_id);

                // // Prevent update if expense has an approve expense report and user is not admin
                // if(true) {
                //     abort(403);
                // }

                $expense->description = $request->description ?? $expense_type->name;

                $expense->receipt_number = $request->receipt_number;

                $expense->date = $request->date;

                $expense->amount = $request->amount;

                $expense->reimbursable_amount = $request->reimbursable_amount;

                $expense->remarks = $request->remarks;

                $expense->expense_type_id = $request->expense_type_id;

                $expense->sub_type_id = $request->sub_type_id;

                $expense->employee_id  = $request->employee_id;

                $expense->vendor_id  = $request->vendor_id;

                $expense->details  = json_encode($request->details);

                $expense->tax_name = $request->tax_name;

                $expense->tax_rate = $request->tax_rate;

                $expense->tax_amount = $request->tax_amount;

                $expense->is_tax_inclusive = $request->is_tax_inclusive;


                $expense->save();

                break;
        }

        return response(
            [
                'message' => 'Updated successfully',
                'sub_type' => $request->sub_type_id
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
        if (request()->has("ids")) {

            foreach ($request->ids as $id) {

                $expense = Expense::findOrFail($id);

                // // Prevent delete if expense has an expense report and user is not admin
                // if(true) {
                //     abort(403);
                // }

                $expense->delete();
            }
        } else {
            $expense = Expense::findOrFail($id);

            // // Prevent delete if expense has an expense report and user is not admin
            // if(true) {
            //     abort(403);
            // }

            $expense->delete();
        }

        // $expense = Expense::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
