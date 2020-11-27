<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * expense_types_expenses_summary
     *
     * @param  mixed $request
     * @return void
     */
    public function expense_types_expenses_summary(Request $request)
    {
        $expense_types = ExpenseType::with(['expenses' => function ($q) use ($request) {
            $q->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            });
            if (request()->has("employee_id")) {
                if (request()->has("admin_page")) {
                    if ($request->employee_id > 0) {
                        $q->where('employee_id', $request->employee_id);
                    }
                } else {
                    $q->where('employee_id', $request->employee_id);
                }
            }
        }])->where('expense_type_id', null)->get();

        $expense_types_summary = [];

        foreach ($expense_types as $key => $value) {
            $total_expenses = $value["expenses"]->where('cancelled_at', null)
                ->where('deleted_at', null)
                ->whereBetween('date', [$request->start_date, $request->end_date]);

            if (request()->has('employee_id')) {
                if ($request->employee_id > 0) {
                    $total_expenses = $total_expenses->where('employee_id', $request->employee_id);
                }
            }

            $total_expenses = $total_expenses->sum("amount");

            array_push(
                $expense_types_summary,
                [
                    "text" => $value["name"],
                    "value" => $total_expenses
                ]
            );
        }

        return $expense_types_summary;
    }
    
    /**
     * employees_expenses_summary
     *
     * @param  mixed $request
     * @return void
     */
    public function employees_expenses_summary(Request $request)
    {
        $employees = Employee::with(['expenses' => function ($q) use ($request) {
            $q->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            });
            if (request()->has("employee_id")) {
                if ($request->employee_id > 0) {
                    $q->where('employee_id', $request->employee_id);
                }
            }
        }])->get();

        $employees_expenses_summary = [];

        foreach ($employees as $key => $value) {
            $total_expenses = $value["expenses"]->where('cancelled_at', null)
                ->where('deleted_at', null)
                ->whereBetween('date', [$request->start_date, $request->end_date])
                ->sum("amount");

            array_push(
                $employees_expenses_summary,
                [
                    "text" => $value->getFullNameAttribute(),
                    "value" => $total_expenses
                ]
            );
        }

        return $employees_expenses_summary;
    }
    
    /**
     * departments_expenses_summary
     *
     * @param  mixed $request
     * @return void
     */
    public function departments_expenses_summary(Request $request)
    {
        $departments = Department::with(['jobs.employees.expenses' => function ($q) use ($request) {
            $q->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            });
            if (request()->has("employee_id")) {
                if ($request->employee_id > 0) {
                    $q->where('employee_id', $request->employee_id);
                }
            }
        }])->get();


        $departments_expenses_summary = [];

        foreach ($departments as $key => $value) {
            $name = $value["name"];
            $total_expenses = 0;

            foreach ($value["jobs"] as $key => $value) {
                foreach ($value["employees"] as $key => $value) {
                    $total_expenses += $value["expenses"]->where('cancelled_at', null)
                        ->where('deleted_at', null)
                        ->whereBetween('date', [$request->start_date, $request->end_date])
                        ->sum("amount");
                }
            }

            array_push(
                $departments_expenses_summary,
                [
                    "text" => $name,
                    "value" => $total_expenses
                ]
            );
        }

        return $departments_expenses_summary;
    }
    
    /**
     * total_expenses
     *
     * @param  mixed $request
     * @return void
     */
    public function total_expenses(Request $request)
    {
        $expenses = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();

        if (request()->has('employee_id')) {
            $expenses = $expenses->where('employee_id', $request->employee_id);
        }

        $expenses = $expenses->sum('amount');

        return $expenses;
    }
    
    /**
     * expenses_summary
     *
     * @param  mixed $request
     * @return void
     */
    public function expenses_summary(Request $request)
    {
        $expenses = Expense::whereBetween('date', [$request->start_date, $request->end_date])
            ->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            })
            ->orderBy('date')
            ->select(DB::raw('date as text, sum(amount) as value'));

        if (request()->has('employee_id')) {
            if (request()->has("admin_page")) {
                if ($request->employee_id > 0) {
                    $expenses = $expenses->where('employee_id', $request->employee_id);
                }
            } else {
                $expenses = $expenses->where('employee_id', $request->employee_id);
            }
        }

        switch ($request->time_unit) {
            case 'day':
                $expenses = $expenses
                    ->groupBy(DB::raw('(date)'))
                    ->get();
                return $expenses;
                break;
            case 'week':
                $expenses = $expenses
                    ->groupBy(DB::raw('WEEK(date)'))
                    ->get();
                return $expenses;
                break;
            case 'month':
                $expenses = $expenses
                    ->groupBy(DB::raw('MONTH(date)'))
                    ->get();
                return $expenses;
                break;
            case 'quarter':
                $expenses = $expenses
                    ->groupBy(DB::raw('QUARTER(date)'))
                    ->get();
                return $expenses;
                break;
            case 'year':
                $expenses = $expenses
                    ->groupBy(DB::raw('YEAR(date)'))
                    ->get();
                return $expenses;
                break;
            default:
                # code...
                break;
        }

        return "";
    }
    
    /**
     * expense_stats
     *
     * @param  mixed $request
     * @return void
     */
    public function expense_stats(Request $request)
    {
        // $expenses_by_date = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();

        $expenses_by_date = Expense::whereBetween('date', [$request->start_date, $request->end_date])
            ->with(['employee' => function ($query) {
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
            ->whereHas('expense_report', function ($q) {
                $q->where('submitted_at', "<>", null);
                $q->where('approved_at', '<>', null);
                $q->where('rejected_at', null);
                $q->where('cancelled_at', null);
                $q->where('deleted_at', null);
            })
            ->get();

        $all_expenses = Expense::all();
        $employees = Employee::all();

        $unsubmitted_reports = Expense::with(['employee' => function ($query) {
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
            ->whereHas('expense_report', function ($q) {
                $q->where('submitted_at', null);
                $q->where('approved_at', null);
                $q->where('rejected_at', null);
                $q->where('cancelled_at', null);
                $q->where('deleted_at', null);

                $q->whereDoesntHave("payments");
            })
            ->get();

        $submitted_reports = Expense::with(['employee' => function ($query) {
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
            ->whereHas('expense_report', function ($q) {
                $q->where('submitted_at', "<>", null);
                $q->where('approved_at', null);
                $q->where('rejected_at', null);
                $q->where('cancelled_at', null);
                $q->where('deleted_at', null);

                $q->whereDoesntHave("payments");
            })
            ->get();

        $approved_reports = Expense::with(['employee' => function ($query) {
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
            ->whereHas("expense_report", function ($query) {
                $query->where([
                ["submitted_at", "<>", null],
                ["approved_at", "<>", null],
                ["cancelled_at", "=", null],
                ["rejected_at", "=", null],
                ["deleted_at", "=", null],
            ]);

                $query->whereDoesntHave("payments");
            })->get();

        $payment_to_receive = Expense::with(['employee' => function ($query) {
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
            ->whereHas("expense_report", function ($query) {
                $query->where([
                    ["submitted_at", "<>", null],
    
                    ["approved_at", "<>", null],
    
                    ["cancelled_at", "=", null],
    
                    ["rejected_at", "=", null],
    
                    ["deleted_at", "=", null],
                ]);
    
                $query->whereHas("payments", function ($query) {
                    $query->where([
                    ["approved_at", "<>", null],
    
                    ["released_at", "<>", null],
    
                    ["received_at", "=", null],
    
                    ["cancelled_at", "=", null],
    
                    ["deleted_at", "=", null],
                ]);
                });
            })->get();

        //
        //
        //
        $total_expenses_by_date = Expense::with(['employee' => function ($query) {
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
            ->whereBetween('date', [$request->start_date, $request->end_date])->get();
        $pending_expenses = Expense::with(['employee' => function ($query) {
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
            ->with(['expense_report' => function ($q) {
                $q->where('submitted_at', "<>", null);
                $q->where('approved_at', null);
                $q->where('rejected_at', null);
                $q->where('cancelled_at', null);
                $q->where('deleted_at', null);
            }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null);

        $total_expenses = Expense::with(['employee' => function ($query) {
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
            ->whereBetween('date', [$request->start_date, $request->end_date])
            ->where(function ($q) {
                $q->whereHas("expense_report");
                $q->orWhereDoesntHave("expense_report");
            })
            ->get();

        //
        //
        //

        // if (request()->has('employee_id') && request()->has("admin_page")) {
        if (request()->has('employee_id')) {
            if ($request->employee_id > 0) {
                $total_expenses_by_date = $total_expenses_by_date->where('employee_id', $request->employee_id);
                $pending_expenses = $pending_expenses->where('employee_id', $request->employee_id);
                $total_expenses = $total_expenses->where('employee_id', $request->employee_id);
                //
                //
                //
                $all_expenses = $all_expenses->where("employee_id", $request->employee_id);
                $employees = $employees->where("id", $request->employee_id);
                $expenses_by_date =  $expenses_by_date->where('employee_id', $request->employee_id);
                $unsubmitted_reports = $unsubmitted_reports->where('employee_id', $request->employee_id);
                $submitted_reports = $submitted_reports->where('employee_id', $request->employee_id);
                $approved_reports = $approved_reports->where('employee_id', $request->employee_id);
                $payment_to_receive = $payment_to_receive->where('employee_id', $request->employee_id);
            }
        }
        // elseif (request()->has('employee_id')) {
        //     $total_expenses_by_date = $total_expenses_by_date->where('employee_id', $request->employee_id);
        //     $pending_expenses = $pending_expenses->where('employee_id', $request->employee_id);
        //     $reimbursements = $reimbursements->where('employee_id', $request->employee_id);
        //     $total_expenses = $total_expenses->where('employee_id', $request->employee_id);
        // }
        // $unsubmitted_reports = $unsubmitted_reports->where('employee_id', 2);

        $total_count = [
            "expenses" => count($total_expenses_by_date),
            "replenishments" => count($total_expenses->where("amount", "<>", "reimbursable_amount")),
            "reimbursements" => count($total_expenses->where("reimbursable_amount", ">", 0)),
            "unreported" => count($total_expenses_by_date->where("expense_report_id", null)),
        ];

        $total_expenses_by_date = $total_expenses_by_date->sum("amount");
        $pending_expenses = $pending_expenses->sum("amount");
        $reimbursements = $total_expenses->sum("reimbursable_amount");
        $total_expenses = $total_expenses->sum("amount");

        $stats = [
            "summary" => [
                "unsub" => $unsubmitted_reports,
                "total" => $total_expenses_by_date,
                "pending" => $pending_expenses,
                "reimbursements" => $reimbursements,
                "replenishments" => $total_expenses - $reimbursements,
                "total_count" => $total_count,
            ],
            "total" => [
                "expenses_by_date" => $expenses_by_date->sum("amount"),
                "remaining_fund" => $employees->sum("remaining_fund"),
                "total_fund" => $employees->sum("fund"),
                "unreported_expenses" => $all_expenses->where("expense_report_id", null)->sum("amount"),
                "unsubmitted_reports" => $unsubmitted_reports->sum("amount"),
                "pending_for_approval_reports" => $submitted_reports->sum("amount"),
                "awaiting_for_reimbursement_reports" => $approved_reports->sum("amount"),
                "payment_to_receive" => $payment_to_receive->sum("amount")
            ],
            "count" => [
                "expenses_by_date" => count($expenses_by_date),
                "unreported_expenses" => $all_expenses->where("expense_report_id", null)->count(),
                "unsubmitted_reports" => $unsubmitted_reports->groupBy('expense_report_id')->count(),
                "pending_for_approval_reports" => $submitted_reports->groupBy('expense_report_id')->count(),
                "awaiting_for_reimbursement_reports" => $approved_reports->groupBy('expense_report_id')->count(),
                "payment_to_receive" => $payment_to_receive->groupBy('expense_report_id')->count(),
            ],
            // "data" => [
            //     "expenses" => $total_expenses,
            //     "pending_expenses" => $pending_expenses,
            //     "reimbursements" => $reimbursements
            // ]
        ];

        return $stats;
    }
}
