<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ExpenseReportResource;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\JobResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\VendorResource;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseReport;
use App\Models\ExpenseType;
use App\Models\Job;
use App\Models\Payment;
use App\Models\SubType;
use App\Models\Vendor;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Models\Activity;
use Spatie\Permission\Models\Permission;

class DataController extends Controller
{
    public function test()
    {
        $activity = Activity::all()->last();

        return $activity;
        // return $activity->description; //returns 'deleted'
        // return $activity->changes; //

        return "test";
    }

    public function print(Request $request)
    {
        if (request()->has("expense_report_detailed")) {

            $expense_types = ExpenseType::withTrashed()->get();
            $expense_report = ExpenseReport::withTrashed()->where("id", $request->expense_report_id);

            $expense_report = new ExpenseReportResource($expense_report->first());

            $data =  $expense_report->expenses()->withTrashed()->get()
                ->sortBy("date")->groupBy("date")
                ->map(function ($row) {
                    return $row->groupBy('expense_type.name')->map(function ($row) {
                        return $row->sum("amount");
                    });
                });

            $main = [];

            foreach ($data as $key => $value) {
                $temp = [];
                $date = $key;

                foreach ($value as $key => $value) {
                    $temp[str_replace(' ', '_', strtolower($key))] = $value;
                }

                $temp["total"] = array_sum(array_values($temp));
                $temp['date'] = Carbon::parse($date)->toDate()->format("Y-m-d");

                foreach ($expense_types as $key => $value) {
                    if (!array_key_exists(str_replace(' ', '_', strtolower($value["name"])), $temp)) {
                        $temp[str_replace(' ', '_', strtolower($value["name"]))] = 0;
                    }
                }

                array_push($main, $temp);
            }

            return response()->json([
                "data" => $main,
                "expense_report" => $expense_report,
                "min_date" => collect($main)->min("date"),
                "max_date" => collect($main)->max("date")
            ]);
        }

        if (request()->has("expense_report_summary")) {
        }
    }

    public function users(Request $request)
    {
        $users = User::orderBy("name");

        return UserResource::collection($users->get());
    }

    public function employees(Request $request)
    {
        $employee = Employee::orderBy("last_name");

        if (request()->has("no_user") && request()->has("user_id")) {
            $employee->where("user_id", null)->orwhere("user_id", $request->user_id);
        }

        return EmployeeResource::collection($employee->get());
    }

    public function vendors()
    {
        return VendorResource::collection(Vendor::orderBy("name")->get());
    }

    public function departments(Request $request)
    {
        $departments = Department::orderBy("name");

        if (request()->has("department_id")) {
            if ($request->department_id > 0) {
                $departments = $departments->where("id", $request->department_id);
            }
        }

        return DepartmentResource::collection($departments->get());
    }

    public function expense_types(Request $request)
    {
        $expense_types = ExpenseType::withTrashed()->orderBy("name")->get();
        return ExpenseTypeResource::collection($expense_types);
    }

    public function jobs(Request $request)
    {
        $jobs = Job::orderBy("name");

        if (request()->has("department_id")) {
            if ($request->department_id > 0) {
                $jobs = $jobs->where("department_id", $request->department_id);
            }
        }

        return JobResource::collection($jobs->get());
    }

    public function expenses(Request $request)
    {
        $expenses = Expense::orderBy('date', 'desc');

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
            $expenses = Expense::orderBy("date")
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

    public function expense_reports(Request $request)
    {
        $expense_reports = ExpenseReport::orderBy("created_at");

        if (request()->has("id")) {
            $expense_reports = $expense_reports->where("id", $request->id);
        }

        if (request()->has("create_payment")) {
            $expense_reports = $expense_reports
                ->where("approved_at", "<>", null)
                ->where("submitted_at", "<>", null)
                ->where("cancelled_at", null)
                ->where("payment_id", null);
        }

        if (request()->has("employee_id")) {
            $expense_reports = $expense_reports->where("employee_id", $request->employee_id);
        }

        if (request()->has("payment_id")) {
            $expense_reports = $expense_reports->where("payment_id", $request->payment_id);
        }

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

        // return ExpenseReportResource::collection($expense_reports->get());
        return response()->json([
            "data" => ExpenseReportResource::collection($expense_reports->get()),
        ]);
    }

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
        }])->get();

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
                    "text" => $value->name(),
                    "value" => $total_expenses
                ]
            );
        }

        return $employees_expenses_summary;
    }

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

    public function total_expenses(Request $request)
    {
        $expenses = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();

        if (request()->has('employee_id')) {
            $expenses = $expenses->where('employee_id', $request->employee_id);
        }

        $expenses = $expenses->sum('amount');

        return $expenses;
    }

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

    public function expense_stats(Request $request)
    {
        // $expenses_by_date = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();
        $expenses_by_date = Expense::with(['expense_report' => function ($q) {
            $q->where('submitted_at', "<>", null);
            $q->where('approved_at', '<>', null);
            $q->where('rejected_at', null);
            $q->where('cancelled_at', null);
            $q->where('deleted_at', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null)
            ->whereBetween('date', [$request->start_date, $request->end_date]);
        $all_expenses = Expense::all();
        $employees = Employee::all();

        $unsubmitted_reports = Expense::with(['expense_report' => function ($q) {
            $q->where('submitted_at', null);
            $q->where('approved_at', null);
            $q->where('rejected_at', null);
            $q->where('cancelled_at', null);
            $q->where('deleted_at', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null);

        $submitted_reports =  Expense::with(['expense_report' => function ($q) {
            $q->where('submitted_at', "<>", null);
            $q->where('approved_at', null);
            $q->where('rejected_at', null);
            $q->where('cancelled_at', null);
            $q->where('deleted_at', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null);

        $approved_reports =  Expense::with(['expense_report' => function ($q) {
            $q->where('submitted_at', "<>", null);
            $q->where('approved_at', "<>", null);
            $q->where('rejected_at', null);
            $q->where('cancelled_at', null);
            $q->where('deleted_at', null);
            $q->where('payment_id', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null);

        //
        //
        //
        $total_expenses_by_date = Expense::whereBetween('date', [$request->start_date, $request->end_date])->get();
        $pending_expenses = Expense::with(['expense_report' => function ($q) {
            $q->where('submitted_at', "<>", null);
            $q->where('approved_at', null);
            $q->where('rejected_at', null);
            $q->where('cancelled_at', null);
            $q->where('deleted_at', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null);

        $total_expenses = Expense::with("expense_report.payment")
            ->whereBetween('date', ["2020-01-01", "2020-12-31"])
            ->where(function ($q) {
                $q->whereHas("expense_report", function ($q) {
                    $q->whereDoesntHave("payment");
                });
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
                "total_count" => $total_count
            ],
            "total" => [
                "expenses_by_date" => $expenses_by_date->sum("amount"),
                "remaining_fund" => $employees->sum("remaining_fund"),
                "total_fund" => $employees->sum("fund"),
                "unreported_expenses" => $all_expenses->where("expense_report_id", null)->sum("amount"),
                "unsubmitted_reports" => $unsubmitted_reports->sum("amount"),
                "pending_for_approval_reports" => $submitted_reports->sum("amount"),
                "awaiting_for_reimbursement_reports" => $approved_reports->sum("amount"),
            ],
            "count" => [
                "expenses_by_date" => count($expenses_by_date),
                "unreported_expenses" => $all_expenses->where("expense_report_id", null)->count(),
                "unsubmitted_reports" => $unsubmitted_reports->count(),
                "pending_for_approval_reports" => $submitted_reports->count(),
                "awaiting_for_reimbursement_reports" => $approved_reports->count(),
            ],
            // "data" => [
            //     "expenses" => $total_expenses,
            //     "pending_expenses" => $pending_expenses,
            //     "reimbursements" => $reimbursements
            // ]
        ];

        return $stats;
    }

    public function permissions()
    {
        return Permission::all();
    }

    ////////////
    ////////////
    ////////////

    public function expenses_summary1(Request $request)
    {
        $start_date = "";
        $end_date = "";

        return response()->json([
            "all_expenses" => "",
            "pending_expenses" => "",
            "approved_expenses" => "",
            "cancelled_expenses" => "",
            "paid_expenses" => "",
        ]);
    }

    public function expenses_per_category1(Request $request)
    {
        $start_date = "";
        $end_date = "";

        return response()->json([
            "all_expenses" => "",
            "pending_expenses" => "",
            "approved_expenses" => "",
            "cancelled_expenses" => "",
            "paid_expenses" => "",
        ]);
    }

    public function expenses_per_employee1(Request $request)
    {
        $start_date = "";
        $end_date = "";

        return response()->json([
            "all_expenses" => "",
            "pending_expenses" => "",
            "approved_expenses" => "",
            "cancelled_expenses" => "",
            "paid_expenses" => "",
        ]);
    }

    public function expenses_per_department1(Request $request)
    {
        $start_date = "";
        $end_date = "";

        return response()->json([
            "all_expenses" => "",
            "pending_expenses" => "",
            "approved_expenses" => "",
            "cancelled_expenses" => "",
            "paid_expenses" => "",
        ]);
    }

    public function expenses_per_time_unit1(Request $request)
    {
        $start_date = "";
        $end_date = "";

        return response()->json([
            "expenses" => ""
        ]);
    }
}
