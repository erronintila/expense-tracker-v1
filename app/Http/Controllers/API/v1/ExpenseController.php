<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Expense\ExpenseIndexResource;
use App\Http\Resources\Expense\ExpenseOnlyResource;
use App\Http\Resources\Expense\ExpenseShowResource;
use App\Http\Resources\ExpenseResource;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseReport;
use App\Models\ExpenseType;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class ExpenseController extends Controller
{
    use ApiResponse;

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

            'is_compound_tax' => ['nullable'],

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

        $expenses = Expense::with(['employee' => function ($query) {
            $query->withTrashed();
        }])
            ->with(['expense_type' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['expense_report' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['vendor' => function ($query) {
                $query->withTrashed();
            }])
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {

                case 'Cancelled Expenses':

                    $expenses = $expenses->onlyTrashed();

                    break;
                case 'Reimbursed Expenses':

                    $expenses = $expenses->whereHas("expense_report", function ($query) {
                        $query->where([

                            ["submitted_at", "<>", null],

                            ["approved_at", "<>", null],

                            ["rejected_at", "=", null],

                            ["cancelled_at", "=", null]
                        ]);

                        $query->whereHas("payments", function ($query) {
                            $query->where([
                                ["approved_at", "<>", null],

                                ["released_at", "<>", null],

                                ["received_at", "<>", null],

                                ["cancelled_at", "=", null],

                                ["deleted_at", "=", null],
                            ]);
                        });
                    });

                    break;
                case 'Rejected Expenses':

                    $expenses = $expenses->whereHas("expense_report", function ($query) {
                        $query->where([

                            ["expense_report_id", "<>", null],

                            ["submitted_at", "<>", null],

                            // ["approved_at", "<>", null],

                            ["rejected_at", "<>", null],

                            // ["cancelled_at", "=", null],
                        ]);
                    });

                    break;
                case 'Approved Expenses':

                    $expenses = $expenses->whereHas("expense_report", function ($query) {
                        $query->where([

                            ["submitted_at", "<>", null],

                            ["approved_at", "<>", null],

                            ["rejected_at", "=", null],

                            ["cancelled_at", "=", null],
                        ]);

                        $query->whereDoesntHave("payments");
                    });

                    break;
                case 'Submitted Expenses':

                    $expenses = $expenses->whereHas("expense_report", function ($query) {
                        $query->where([

                            ["submitted_at", "<>", null],

                            ["approved_at", "=", null],

                            ["rejected_at", "=", null],

                            ["cancelled_at", "=", null],
                        ]);

                        $query->whereDoesntHave("payments");
                    });

                    break;
                case 'Unsubmitted Expenses':

                    $expenses = $expenses->whereHas("expense_report", function ($query) {
                        $query->where([

                            ["submitted_at", "=", null],

                            ["approved_at", "=", null],

                            ["rejected_at", "=", null],

                            ["cancelled_at", "=", null],
                        ]);

                        $query->whereDoesntHave("payments");
                    });

                    break;
                case 'Unreported Expenses':

                    $expenses = $expenses->doesnthave("expense_report");

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

        if (request()->has('expense_report_id')) {
            if ($request->expense_report_id > 0) {
                $expenses = $expenses->where("expense_report_id", $request->expense_report_id);
            }
        }

        $expenses = $expenses->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");

            $query->orWhere("description", "like", "%" . $search . "%");

            $query->orWhere("receipt_number", "like", "%" . $search . "%");

            $query->orWhere("date", "like", "%" . $search . "%");
        });

        if (request()->has("update_report")) {
            $expenses = Expense::with(['employee' => function ($query) {
                $query->withTrashed();
            }])
                ->with(['expense_type' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['expense_report' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['sub_type' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['vendor' => function ($query) {
                    $query->withTrashed();
                }])
                ->orderBy($sortBy, $sortType)
                ->where(function ($q) use ($request) {
                    $q->where("expense_report_id", $request->expense_report_id);
                    $q->orWhere("expense_report_id", null);
                })
                ->where(function ($q) use ($request) {
                    $q->whereBetween("date", [$request->start_date, $request->end_date]);
                    $q->orWhere("expense_report_id", $request->expense_report_id);
                })
                ->where("employee_id", $request->employee_id);
        }

        $expenses = $expenses->paginate($itemsPerPage);

        return ExpenseIndexResource::collection($expenses);
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

        $employee = Employee::withTrashed()->findOrFail($request->employee_id);

        $this->validator($request->all(), null, $employee->remaining_fund)->validate();

        $expense_type = ExpenseType::withTrashed()->findOrFail($request->sub_type_id ?? $request->expense_type_id);

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

        $expense->details  = $request->details == null ? null : json_encode($request->details);

        $expense->tax_name = $request->tax_name;

        $expense->tax_rate = $request->tax_rate;

        $expense->tax_amount = $request->tax_amount;

        $expense->is_tax_inclusive = $request->is_tax_inclusive;

        $expense->created_by = Auth::id();

        $expense->updated_by = Auth::id();

        $expense->encoding_period = setting("expense_encoding_period");

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
        $expense = Expense::withTrashed()
            ->with(['employee' => function ($query) {
                $query->withTrashed();
                $query->with(['expense_types' => function ($query2) {
                    $query2->withTrashed();
                    $query2->with(['sub_types' => function ($query) {
                        $query->withTrashed();
                    }]);
                }]);
            }])
            ->with(['expense_type' => function ($query) {
                $query->withTrashed();
                $query->with(['sub_types' => function ($query2) {
                    $query2->withTrashed();
                }]);
            }])
            ->with(['expense_report' => function ($query) {
                $query->withTrashed();
                $query->with(['payments' => function ($query) {
                    $query->withTrashed();
                }]);
            }])
            ->with(['sub_type' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['vendor' => function ($query) {
                $query->withTrashed();
            }])
            ->findOrFail($id);

        return response(
            [
                'data' => new ExpenseShowResource($expense),

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

                        $expense->disableLogging();

                        $expense->restore();

                        log_activity("expense", $expense, 
                        [ 
                            "attributes" => ["code" => $expense->code, "restored_at" => $expense->updated_at], 
                            "custom" => ["link" => "expenses/{$expense->id}"]
                        ], 
                        "restored expense record");
                    }
                } else {
                    $expense = Expense::withTrashed()->findOrFail($id);

                    $expense->disableLogging();

                    $expense->restore();

                    log_activity("expense", $expense, 
                    [ 
                        "attributes" => ["code" => $expense->code, "updated_at" => $expense->updated_at], 
                        "custom" => ["link" => "expenses/{$expense->id}"]
                    ], 
                    "restored expense record");
                }

                break;
            default:

                Validator::make($request->all(), [

                    'employee_id' => ['required'],
                ]);

                $employee = Employee::withTrashed()->findOrFail($request->employee_id);

                $this->validator($request->all(), $id, $employee->remaining_fund)->validate();

                $expense = Expense::withTrashed()->findOrFail($id);

                $expense_type = ExpenseType::withTrashed()->findOrFail($request->sub_type_id ?? $request->expense_type_id);

                // // Prevent update if expense has an approve expense report and user is not admin
                // if(true && !Auth::user()->is_admin) {
                //     abort(403);
                // }

                // // Prevent update if expense has an approve expense report and user is not admin
                if ($expense->expense_report) {
                    if (Auth::user()->is_admin) {
                        $expense_report = ExpenseReport::where("id", $expense->expense_report_id)
                        ->where(function ($query) {
                            $query->whereHas('payments');
                            $query->orWhere("cancelled_at", "<>", null);
                            $query->orWhere("rejected_at", "<>", null);
                            $query->orWhere("deleted_at", "<>", null);
                        })
                        ->count();
                    } else {    
                        $expense_report = ExpenseReport::where("id", $expense->expense_report_id)
                        ->where(function ($query) {
                            $query->where("approved_at", "<>", null);
                            $query->orWhere("cancelled_at", "<>", null);
                            $query->orWhere("rejected_at", "<>", null);
                            $query->orWhere("deleted_at", "<>", null);
                        })
                        ->count();
                    }

                    if ($expense_report > 0) {
                        return $this->errorResponse("Expense Report has already been submitted.", 422);
                    }
                }

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

                $expense->encoding_period = setting("expense_encoding_period");

                $expense->updated_by = Auth::id();

                $expense->disableLogging();

                $expense->save();

                log_activity("expense", $expense, 
                [ 
                    "attributes" => ["code" => $expense->code, "updated_at" => $expense->updated_at], 
                    "custom" => ["link" => "expenses/{$expense->id}"]
                ], 
                "updated expense record");

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
                $expense = Expense::withTrashed()->findOrFail($id);

                // // Prevent delete if expense has an expense report and user is not admin
                // if(true && !Auth::user()->is_admin) {
                //     abort(403);
                // }

                $expense->delete();
            }
        } else {
            $expense = Expense::withTrashed()->findOrFail($id);

            // // Prevent delete if expense has an expense report and user is not admin
            // if(true && !Auth::user()->is_admin) {
            //     abort(403);
            // }

            $expense->delete();
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
    | EXPENSE CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * expenses
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenses(Request $request)
    {
        if (request()->has("only")) {
            if (request()->has("expense_report_id")) {
                $expenses = Expense::with(["expense_type" => function ($query) {
                    $query->withTrashed();
                }])
                ->with(["vendor" => function ($query) {
                    $query->withTrashed();
                }])
                ->where("expense_report_id", $request->expense_report_id)->get();

                return ExpenseIndexResource::collection($expenses);
            }
        }
        
        $expenses = Expense::with(['employee' => function ($query) {
            $query->withTrashed();
        }])
            ->with(['expense_type' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['expense_report' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['sub_type' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['vendor' => function ($query) {
                $query->withTrashed();
            }])
            ->orderBy('date', 'desc');

        if (request()->has("summary")) {
            if ($request->summary) {
                $expenses = $expenses->where("id", $request->id);
                return $expenses;
            }

            $expenses = $expenses->where("id", $request->id);
            return $expenses;
        }

        if (request()->has("id")) {
            $expenses = $expenses->where("id", $request->id);
        }

        if (request()->has("expense_type_id")) {
            $expenses = $expenses->where("expense_type_id", $request->expense_type_id);
        }

        if (request()->has("employee_id")) {
            $expenses = $expenses->where("employee_id", $request->employee_id);
        }

        if (request()->has("vendor_id")) {
            $expenses = $expenses->where("vendor_id", $request->vendor_id);
        }

        if (request()->has("status")) {
            switch ($request->status) {
                case 'Archived':
                    $expenses = $expenses->onlyTrashed();
                    break;
                default:
                    $expenses = $expenses;
                    break;
            }
        }

        if (request()->has("create_report")) {
            $expenses = $expenses->where("expense_report_id", null);
        }

        if (request()->has("update_report")) {
            $expenses = Expense::with(['employee' => function ($query) {
                $query->withTrashed();
            }])
                ->with(['expense_type' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['expense_report' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['sub_type' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['vendor' => function ($query) {
                    $query->withTrashed();
                }])
                ->orderBy("date")
                ->where(function ($q) use ($request) {
                    $q->where("expense_report_id", $request->expense_report_id);
                    $q->orWhere("expense_report_id", null);
                })
                ->where(function ($q) use ($request) {
                    $q->whereBetween("date", [$request->start_date, $request->end_date]);
                    $q->orWhere("expense_report_id", $request->expense_report_id);
                })
                ->where("employee_id", $request->employee_id)
                ->get();

            return response()->json([
                "data" => ExpenseResource::collection($expenses),
                "total11" => $expenses->sum("amount")
            ]);
        }

        if (request()->has("expense_report_id")) {
            $expenses = $expenses->where("expense_report_id", $request->expense_report_id);
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $expenses = $expenses->whereBetween("date", [$request->start_date, $request->end_date]);
        }

        return response()->json([
            "data" => ExpenseResource::collection($expenses->get()),
            "total" => $expenses->sum("amount")
        ]);
    }
}
