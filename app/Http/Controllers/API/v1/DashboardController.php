<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Expense;
use App\Models\ExpenseType;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Displays total expenses amount on each expense type
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
            if (request()->has("user_id")) {
                if (request()->has("admin_page")) {
                    if ($request->user_id > 0) {
                        $q->where('user_id', $request->user_id);
                    }
                } else {
                    $q->where('user_id', $request->user_id);
                }
            }
        }])->where('expense_type_id', null)->get();

        $expense_types_summary = [];

        foreach ($expense_types as $key => $value) {
            $total_expenses = $value["expenses"]->where('cancelled_at', null)
                ->where('deleted_at', null)
                ->whereBetween('date', [$request->start_date, $request->end_date]);

            if (request()->has('user_id')) {
                if ($request->user_id > 0) {
                    $total_expenses = $total_expenses->where('user_id', $request->user_id);
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
     * Displays total expenses amount on each user
     *
     * @param  mixed $request
     * @return void
     */
    public function users_expenses_summary(Request $request)
    {
        $users = User::with(['expenses' => function ($q) use ($request) {
            $q->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            });

            
        }]);
        
        if (request()->has("user_id")) {
            if ($request->user_id > 0) {
                $users->where('user_id', $request->user_id)->get();
            }
        }

        $users_expenses_summary = [];

        foreach ($users as $key => $value) {
            $total_expenses = $value["expenses"]->where('cancelled_at', null)
                ->where('deleted_at', null)
                ->whereBetween('date', [$request->start_date, $request->end_date])
                ->sum("amount");

            array_push(
                $users_expenses_summary,
                [
                    "text" => $value->getFullNameAttribute(),
                    "value" => $total_expenses
                ]
            );
        }

        return $users_expenses_summary;
    }
    
    /**
     * Displays total expenses amount on each department
     *
     * @param  mixed $request
     * @return void
     */
    public function departments_expenses_summary(Request $request)
    {
        $departments = Department::with(['jobs.users.expenses' => function ($q) use ($request) {
            $q->whereHas("expense_report", function ($q) {
                $q->where("approved_at", "<>", null);
                $q->where("rejected_at", null);
                $q->where("deleted_at", null);
                $q->where("cancelled_at", null);
            });

            if (request()->has("user_id")) {
                if ($request->user_id > 0) {
                    $q->where('user_id', $request->user_id);
                }
            }
        }])->get();


        $departments_expenses_summary = [];

        foreach ($departments as $key => $value) {
            $name = $value["name"];

            $total_expenses = 0;

            foreach ($value["jobs"] as $key => $value) {
                foreach ($value["users"] as $key => $value) {
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
     * Displays total expenses amount
     *
     * @param  mixed $request
     * @return void
     */
    public function total_expenses(Request $request)
    {
        $expenses = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();

        if (request()->has('user_id')) {
            $expenses = $expenses->where('user_id', $request->user_id);
        }

        $expenses = $expenses->sum('amount');

        return $expenses;
    }
    
    /**
     * Displays total expense amount based on time unit
     * i.e. per day, per week, per month, per quarter, per year
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

        if (request()->has('user_id')) {
            if (request()->has("admin_page")) {
                if ($request->user_id > 0) {
                    $expenses = $expenses->where('user_id', $request->user_id);
                }
            } else {
                $expenses = $expenses->where('user_id', $request->user_id);
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
     * Displays total expenses and expenses per report status
     *
     * @param  mixed $request
     * @return void
     */
    public function expense_stats(Request $request)
    {
        $expenses_by_date = Expense::whereBetween('date', [$request->start_date, $request->end_date])
            ->with(['user' => function ($query) {
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
        $users = User::all();

        $unsubmitted_reports = Expense::with(['user' => function ($query) {
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

        $submitted_reports = Expense::with(['user' => function ($query) {
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

        $approved_reports = Expense::with(['user' => function ($query) {
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

        $payment_to_receive = Expense::with(['user' => function ($query) {
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
        $total_expenses_by_date = Expense::with(['user' => function ($query) {
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
        $pending_expenses = Expense::with(['user' => function ($query) {
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

        $total_expenses = Expense::with(['user' => function ($query) {
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

        // if (request()->has('user_id') && request()->has("admin_page")) {
        if (request()->has('user_id')) {
            if ($request->user_id > 0) {
                $total_expenses_by_date = $total_expenses_by_date->where('user_id', $request->user_id);
                $pending_expenses = $pending_expenses->where('user_id', $request->user_id);
                $total_expenses = $total_expenses->where('user_id', $request->user_id);
                //
                $all_expenses = $all_expenses->where("user_id", $request->user_id);
                $users = $users->where("id", $request->user_id);
                $expenses_by_date =  $expenses_by_date->where('user_id', $request->user_id);
                $unsubmitted_reports = $unsubmitted_reports->where('user_id', $request->user_id);
                $submitted_reports = $submitted_reports->where('user_id', $request->user_id);
                $approved_reports = $approved_reports->where('user_id', $request->user_id);
                $payment_to_receive = $payment_to_receive->where('user_id', $request->user_id);
            }
        }

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
                "remaining_fund" => $users->sum("remaining_fund"),
                "total_fund" => $users->sum("fund"),
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
        ];

        return $stats;
    }
    
    /**
     * Displays expense statistics
     *
     * @param  mixed $request
     * @return void
     */
    public function statistics(Request $request)
    {
        $user_id = $request->user_id ?? 0;
        $start_date = $request->start_date ?? "2020-01-01";
        $end_date = $request->end_date ?? "2020-12-31";

        $expenses = DB::table('expenses')
            ->join("users", "users.id", "=", "expenses.user_id")
            ->join("jobs", "jobs.id", "=", "users.job_id")
            ->join("departments", "departments.id", "=", "jobs.department_id")
            ->join("expense_types", "expense_types.id", "=", "expenses.expense_type_id")
            ->leftJoin("expense_reports", "expense_reports.id", "=", "expenses.expense_report_id")
            ->leftJoin("expense_report_payment", "expense_report_payment.expense_report_id", "=", "expense_reports.id")
            ->leftJoin("payments", "payments.id", "=", "expense_report_payment.payment_id")
            ->whereBetween("expenses.date", [$start_date, $end_date])
            ->where("expenses.deleted_at", "=", null)
            ->where("expense_reports.rejected_at", "=", null)
            ->where("expense_reports.cancelled_at", "=", null)
            ->where("expense_reports.deleted_at", "=", null)
            ->select(DB::raw("
                distinct 
                `expenses`.`id` AS expense_id,
                `expenses`.`date`,
                `expenses`.`amount`,
                `expenses`.`created_at` AS expense_created_at,
                `users`.`id` AS user_id,
                `users`.`last_name`,
                `users`.`first_name`,
                `users`.`middle_name`,
                `users`.`suffix`,
                `departments`.`id` AS department_id,
                `departments`.`name` AS department_name,
                `expense_types`.`id` AS expense_type_id,
                `expense_types`.`name` AS expense_type_name,
                `expense_reports`.`id` AS expense_report_id,
                `expense_reports`.`created_at`,
                `expense_reports`.`submitted_at`,
                `expense_reports`.`reviewed_at`,
                `expense_reports`.`approved_at`,

                
                IFNULL((SELECT 
                    SUM(`expenses`.`amount`) 
                FROM
                    `expenses` 
                    JOIN `expense_reports` er
                    ON `er`.`id` = `expenses`.`expense_report_id` 
                WHERE `er`.`id` = `expense_reports`.`id` AND `expenses`.`date` BETWEEN '2020-01-01' AND '2020-12-31'
                    ), 0) AS expense_report_amount,


                IFNULL(
                    (SELECT 
                        SUM(
                        `expense_report_payment`.`payment`
                        ) 
                    FROM
                        `expense_reports` er 
                        JOIN `expenses` 
                    ON `expenses`.`expense_report_id` = `er`.`id`
                        JOIN `expense_report_payment` 
                        ON `expense_report_payment`.`expense_report_id` = `er`.`id` 
                        JOIN `payments` 
                        ON `payments`.`id` = `expense_report_payment`.`payment_id` 
                    WHERE `er`.`id` = `expense_reports`.`id` AND `expenses`.`date` BETWEEN '2020-01-01' AND '2020-12-31'),
                    0
                    ) AS paid,


                IFNULL(
                    (SELECT 
                        SUM(
                        `expense_report_payment`.`payment`
                        ) 
                    FROM
                        `expense_reports` er 
                        JOIN `expenses` 
                    ON `expenses`.`expense_report_id` = `er`.`id`
                        JOIN `expense_report_payment` 
                        ON `expense_report_payment`.`expense_report_id` = `er`.`id` 
                        JOIN `payments` 
                        ON `payments`.`id` = `expense_report_payment`.`payment_id` 
                    WHERE `er`.`id` = `expense_reports`.`id` 
                    AND `payments`.`received_at` IS NULL AND `expenses`.`date` BETWEEN '2020-01-01' AND '2020-12-31'),
                    0
                    ) AS unreceived,


                IFNULL((SELECT 
                    SUM(`expenses`.`amount`) 
                FROM
                    `expenses` 
                    JOIN `expense_reports` er 
                    ON `er`.`id` = `expenses`.`expense_report_id` 
                WHERE `er`.`id` = `expense_reports`.`id` AND `expenses`.`date` BETWEEN '2020-01-01' AND '2020-12-31'), 0) - IFNULL(
                    (SELECT 
                    SUM(
                        `expense_report_payment`.`payment`
                    ) 
                    FROM
                    `expense_reports` er 
                    JOIN `expenses` 
                    ON `expenses`.`expense_report_id` = `er`.`id`
                    JOIN `expense_report_payment` 
                        ON `expense_report_payment`.`expense_report_id` = `er`.`id` 
                    JOIN `payments` 
                        ON `payments`.`id` = `expense_report_payment`.`payment_id` 
                    WHERE `er`.`id` = `expense_reports`.`id` 
                    AND `payments`.`received_at` IS NOT NULL AND `expenses`.`date` BETWEEN '2020-01-01' AND '2020-12-31'),
                    0
                ) AS balance 
            "));

        if ($user_id) {
            if ($request->user_id > 0) {
                $expenses = $expenses->where("user_id", $request->user_id);
            }
        }

        $expenses = $expenses->get();

        $unreported = $expenses->where("expense_report_id", null);
        $unsubmitted = $expenses->where("expense_report_id", "<>", null)
            ->where("submitted_at", null)
            ->where("approved_at", null);
        $submitted = $expenses->where("expense_report_id", "<>", null)
            ->where("submitted_at", "<>", null)
            ->where("approved_at", null);
        $approved = $expenses->where("expense_report_id", "<>", null)
            ->where("submitted_at", "<>", null)
            ->where("approved_at", "<>", null);
        $unreceived = $expenses->where("expense_report_id", "<>", null)
            ->where("submitted_at", "<>", null)
            ->where("approved_at", "<>", null)
            ->where("balance", ">", 0);

        return response()->json([
            "data" => $expenses,
            "all" => [
                "total_amount" => $approved->sum('amount'),
                "total_count" => $approved->count()
            ],
            "unreported" => [
                "total_amount" => $unreported->sum("amount"),
                "total_count" => $unreported->count(),
            ],
            "unsubmitted" => [
                "total_amount" => $unsubmitted->sum("amount"),
                "total_count" => $unsubmitted->count(),
                "total_report" => $unsubmitted->groupBy("expense_report_id")->count()
            ],
            "submitted" => [
                "total_amount" => $submitted->sum("amount"),
                "total_count" => $submitted->count(),
                "total_report" => $submitted->groupBy("expense_report_id")->count()
            ],
            "approved" => [
                "total_amount" => $approved->sum("amount"),
                "total_count" => $approved->count(),
                "total_report" => $approved->groupBy("expense_report_id")->count()
            ],
            "unreceived" => [
                "total_amount" => $unreceived->sum("amount"),
                "total_count" => $unreceived->count(),
                "total_report" => $unreceived->groupBy("expense_report_id")->count()
            ],
        ]);
    }

    public function expense_reports()
    {
    }
}
