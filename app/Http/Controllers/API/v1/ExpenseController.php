<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseController extends Controller
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
            'code' => ['nullable', Rule::unique('expenses')->ignore($id, 'id'), 'max:255'],
            'description' => ['required', 'max:255'],
            'receipt_number' => ['required', 'max:255'],
            'date' => ['required'],
            'amount' => ['required', 'numeric', 'gt:0'],
            'remarks' => ['nullable'],
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
        $sortBy = $request->sortBy ?? "created_at";
        $sortType = $request->sortType ?? "desc";
        $itemsPerPage = $request->itemsPerPage ?? 10;

        $expenses = Expense::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $expenses = $expenses->onlyTrashed();
                    break;
                default:
                    $expenses = $expenses;
                    break;
            }
        }

        $expenses = $expenses->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere("description", "like", "%" . $search . "%");
            $query->orWhere("receipt_number", "like", "%" . $search . "%");
            $query->orWhere("date", "like", "%" . $search . "%");
        });
        $expenses = $expenses->paginate($itemsPerPage);

        $expenses->appends(['sort' => 'votes'])->links();

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
        $this->validator($request->all(), null)->validate();

        $expense = new Expense();

        $expense->description = $request->description;
        $expense->receipt_number = $request->receipt_number;
        $expense->date = $request->date;
        $expense->amount = $request->amount;
        $expense->remarks = $request->remarks;
        $expense->expense_type_id = $request->expense_type_id;
        $expense->employee_id  = $request->employee_id;
        $expense->vendor_id  = $request->vendor_id;

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
        $expense = Expense::findOrFail($id);

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
                $expense = Expense::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), null)->validate();

                $expense = Expense::findOrFail($id);

                $expense->description = $request->description;
                $expense->receipt_number = $request->receipt_number;
                $expense->date = $request->date;
                $expense->amount = $request->amount;
                $expense->remarks = $request->remarks;
                $expense->expense_type_id = $request->expense_type_id;
                $expense->employee_id  = $request->employee_id;
                $expense->vendor_id  = $request->vendor_id;

                $expense->save();

                break;
        }

        return response(
            [
                'message' => 'Updated successfully'
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
        $expense = Expense::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
