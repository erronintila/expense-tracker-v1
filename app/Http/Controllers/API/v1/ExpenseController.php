<?php

namespace App\Http\Controllers\API\v1;

use App\User;
use App\Models\Expense;
use App\Models\ExpenseType;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\ExpenseReport;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ExpenseResource;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Expense\ExpenseStoreRequest;
use App\Http\Requests\Expense\ExpenseUpdateRequest;
use App\Http\Resources\Expense\ExpenseIndexResource;
use App\Http\Resources\Expense\ExpenseShowResource;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx\Rels;

class ExpenseController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        $this->middleware(['permission:view all expenses'], ['only' => ['index']]);
        $this->middleware(['permission:view expenses'], ['only' => ['show']]);
        $this->middleware(['permission:add expenses'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit expenses'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete expenses'], ['only' => ['destroy']]);
        $this->middleware(['permission:restore expenses'], ['only' => ['restore']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $expenses = Expense::with(['user' => function ($query) {
            if (request("status") == "Cancelled Expenses") {
                $query->withTrashed();
            }
        }])
            ->with('expense_type')
            ->with('expense_report')
            ->with('vendor')
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request("status")) {
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
            $expenses = $expenses->whereBetween("date", [request("start_date"), request("end_date")]);
        }

        if (request()->has('user_id')) {
            if (request("user_id") > 0) {
                $expenses = $expenses->where("user_id", request("user_id"));
            }
        }

        if (request()->has('expense_type_id')) {
            if (request("expense_type_id") > 0) {
                $expenses = $expenses->where("expense_type_id", request("expense_type_id"));
            }
        }

        if (request()->has('expense_report_id')) {
            if (request("expense_report_id") > 0) {
                $expenses = $expenses->where("expense_report_id", request("expense_report_id"));
            }
        }

        $expenses = $expenses->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere("description", "like", "%" . $search . "%");
            $query->orWhere("receipt_number", "like", "%" . $search . "%");
            $query->orWhere("date", "like", "%" . $search . "%");
        });

        if (request()->has("update_report")) {
            $expenses = Expense::with('user')
                ->with('expense_type')
                ->with('expense_report')
                ->with('sub_type')
                ->with('vendor')
                ->orderBy($sortBy, $sortType)
                ->where(function ($q) use ($request) {
                    $q->where("expense_report_id", request("expense_report_id"));
                    $q->orWhere("expense_report_id", null);
                })
                ->where(function ($q) use ($request) {
                    $q->whereBetween("date", [request("start_date"), request("end_date")]);
                    $q->orWhere("expense_report_id", request("expense_report_id"));
                })
                ->where("user_id", request("user_id"));

            if (request()->has('start_date') && request()->has('end_date')) {
                $expenses = $expenses->whereBetween("date", [request("start_date"), request("end_date")]);
            }
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
    public function store(ExpenseStoreRequest $request)
    {
        $validated = $request->validated();
        $message = "Expense created successfully";
        $user = User::findOrFail(request("user_id"));

        if (request("reimbursable_amount") > request("amount")) {
            $this->errorResponse("Reimbursable amount is greater than total expense amount", 422);
        }

        if (($user->remaining_fund - (request("amount") - request("reimbursable_amount"))) < 0) {
            $this->errorResponse("Amount to replenish is greater than remaining fund", 422);
        }

        $expense_type = ExpenseType::findOrFail(request("sub_type_id") ?? request("expense_type_id"));
        $expense = new Expense();
        $expense->fill($validated);
        $expense->code = generate_code(Expense::class, "EXP", 10);
        $expense->description = request("description") ?? $expense_type->name;
        $expense->tax_rate = request("is_tax_inclusive") ? request("tax_rate") : 0;
        $expense->tax_amount = request("is_tax_inclusive") ? request("tax_amount") : 0;
        $expense->details  = request("details") == null ? null : json_encode(request("details"));
        $expense->created_by = Auth::id();
        $expense->updated_by = Auth::id();
        $expense->save();

        return $this->successResponse(new ExpenseResource($expense), $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (request()->has("isDeleted")) {
            if (request("isDeleted")) {
                $expense = Expense::withTrashed()
                ->with(['user' => function ($query) {
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
            }
        } else {
            $expense = Expense::with(['user' => function ($query) {
                $query->with(['expense_types' => function ($query2) {
                    $query2->with('sub_types');
                }]);
            }])
            ->with(['expense_type' => function ($query) {
                $query->with('sub_types');
            }])
            ->with(['expense_report' => function ($query) {
                $query->with('payments');
            }])
            ->with('sub_type')
            ->with('vendor')
            ->findOrFail($id);
        }

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
    public function update(ExpenseUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $message = "Expense updated successfully";

        $user = User::findOrFail(request("user_id"));
        $expense_type = ExpenseType::findOrFail(request("sub_type_id") ?? request("expense_type_id"));
        $expense = Expense::findOrFail($id);

        if (request("reimbursable_amount") > request("amount")) {
            $this->errorResponse("Reimbursable amount is greater than total expense amount", 422);
        }

        $rem_fund = $user->remaining_fund + ($expense->amount - $expense->reimbursable_amount);
        
        if (($rem_fund - (request("amount") - request("reimbursable_amount"))) < 0) {
            $this->errorResponse("Amount to replenish is greater than remaining fund", 422);
        }

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

        $expense->fill($validated);
        $expense->description = request("description") ?? $expense_type->name;
        $expense->tax_rate = request("is_tax_inclusive") ? request("tax_rate") : 0;
        $expense->tax_amount = request("is_tax_inclusive") ? request("tax_amount") : 0;
        $expense->details  = request("details") == null ? null : json_encode(request("details"));
        $expense->updated_by = Auth::id();
        $expense->disableLogging();
        $expense->save();

        log_activity(
            "expense",
            $expense,
            [
                    "attributes" => ["code" => $expense->code, "updated_at" => $expense->updated_at],
                    "custom" => ["link" => "expenses/{$expense->id}"]
                ],
            "updated expense record"
        );

        return $this->successResponse(null, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        DB::transaction(function () use ($id) {
            if (request()->has("ids")) {
                foreach (request("ids") as $id) {
                    Expense::findOrFail($id)->delete();
                }
            } else {
                Expense::findOrFail($id)->delete();
            }
        });

        $message = "Expense(s) deleted successfully";
        return $this->successResponse(null, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function restore(Request $request, $id)
    {
        DB::transaction(function () use ($id) {
            if (request()->has("ids")) {
                foreach (request("ids") as $id) {
                    $expense = Expense::onlyTrashed()->findOrFail($id);
                    $expense->disableLogging();
                    $expense->restore();
    
                    log_activity(
                        "expense",
                        $expense,
                        [
                            "attributes" => ["code" => $expense->code, "restored_at" => $expense->updated_at],
                            "custom" => ["link" => "expenses/{$expense->id}"]
                        ],
                        "restored expense record"
                    );
                }
            } else {
                $expense = Expense::onlyTrashed()->findOrFail($id);
                $expense->disableLogging();
                $expense->restore();
    
                log_activity(
                    "expense",
                    $expense,
                    [
                        "attributes" => ["code" => $expense->code, "updated_at" => $expense->updated_at],
                        "custom" => ["link" => "expenses/{$expense->id}"]
                    ],
                    "restored expense record"
                );
            }
        });

        $message = "Expense(s) restored successfully";
        return $this->successResponse(null, $message, 200);
    }

    /**
     * Get Expenses data
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenses(Request $request)
    {
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";

        if (request()->has("only")) {
            if (request()->has("expense_report_id")) {
                $expenses = Expense::with("expense_type")
                ->with("vendor")
                ->where("expense_report_id", request("expense_report_id"))
                ->orderBy($sortBy, $sortType)
                ->get();

                return ExpenseIndexResource::collection($expenses);
            }
        }

        $expenses = Expense::with('user')
            ->with('expense_type')
            ->with('expense_report')
            ->with('sub_type')
            ->with('vendor')
            ->orderBy('date', 'desc');

        if (request()->has("summary")) {
            if (request("summary")) {
                $expenses = $expenses->where("id", request("id"));
                return $expenses;
            }

            $expenses = $expenses->where("id", request("id"));
            return $expenses;
        }

        if (request()->has("id")) {
            $expenses = $expenses->where("id", request("id"));
        }

        if (request()->has("expense_type_id")) {
            $expenses = $expenses->where("expense_type_id", request("expense_type_id"));
        }

        if (request()->has("user_id")) {
            $expenses = $expenses->where("user_id", request("user_id"));
        }

        if (request()->has("vendor_id")) {
            $expenses = $expenses->where("vendor_id", request("vendor_id"));
        }

        if (request()->has("status")) {
            switch (request("status")) {
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
            $expenses = Expense::with('user')
                ->with('expense_type')
                ->with('expense_report')
                ->with('sub_type')
                ->with('vendor')
                ->orderBy("date")
                ->where(function ($q) use ($request) {
                    $q->where("expense_report_id", request("expense_report_id"));
                    // $q->orWhere("expense_report_id", null);
                })
                ->where("user_id", request("user_id"));

            if (request()->has('start_date') && request()->has('end_date')) {
                $expenses = $expenses->whereBetween("date", [request("start_date"), request("end_date")]);
            }
            // ->where(function ($q) use ($request) {
            //     $q->whereBetween("date", [request("start_date"), request("end_date")]);
            //     // $q->orWhere("expense_report_id", request("")expense_report_id);
            // })
                
            $expenses = $expenses->get();

            return response()->json([
                "data" => ExpenseResource::collection($expenses),
                "total11" => $expenses->sum("amount")
            ]);
        }

        if (request()->has("expense_report_id")) {
            $expenses = $expenses->where("expense_report_id", request("expense_report_id"));
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $expenses = $expenses->whereBetween("date", [request("start_date"), request("end_date")]);
        }

        return response()->json([
            "data" => ExpenseResource::collection($expenses->get()),
            "total" => $expenses->sum("amount")
        ]);
    }

    public function getExpenseSummary()
    {
        $expenses = DB::table('expenses')
            ->select(DB::raw("sum(amount) as total_amount, count(id) as total_count"))
            ->where("deleted_at", null)
            ->where("expense_report_id", null);

        if (request()->has("user_id")) {
            $expenses = $expenses->where("user_id", request("user_id"));
        }

        $expenses = $expenses->first();

        return response()->json([
            "expenses" => $expenses,
        ]);
    }
}
