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
use App\Models\Vendor;
use App\Traits\ApiResponse;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Models\Activity;
use Spatie\Permission\Models\Permission;

class DataController extends Controller
{
    use ApiResponse;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | GENERAL
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * permissions
     *
     * @return void
     */
    public function permissions()
    {
        return Permission::all();
    }
    
    /**
     * users
     *
     * @param  mixed $request
     * @return void
     */
    public function users(Request $request)
    {
        $users = User::orderBy("name");

        return UserResource::collection($users->get());
    }
    
    /**
     * employees
     *
     * @param  mixed $request
     * @return void
     */
    public function employees(Request $request)
    {
        $employee = Employee::orderBy("last_name");

        if (request()->has("no_user") && request()->has("user_id")) {
            $employee->where("user_id", null)->orwhere("user_id", $request->user_id);
        }

        return EmployeeResource::collection($employee->get());
    }
    
    /**
     * vendors
     *
     * @return void
     */
    public function vendors()
    {
        return VendorResource::collection(Vendor::orderBy("name")->get());
    }
    
    /**
     * departments
     *
     * @param  mixed $request
     * @return void
     */
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
    
    /**
     * expense_types
     *
     * @param  mixed $request
     * @return void
     */
    public function expense_types(Request $request)
    {
        if(request()->has('id')) {

            $expense_type = ExpenseType::withTrashed()->findOrFail($request->id);

            return new ExpenseTypeResource($expense_type);
        }

        $expense_types = ExpenseType::withTrashed()->where('expense_type_id', null)->get();

        return ExpenseTypeResource::collection($expense_types);
    }
    
    /**
     * jobs
     *
     * @param  mixed $request
     * @return void
     */
    public function jobs(Request $request)
    {
        $jobs = Job::with('department')->orderBy("name");

        if (request()->has("department_id")) {
            if ($request->department_id > 0) {
                $jobs = $jobs->where("department_id", $request->department_id);
            }
        }

        return JobResource::collection($jobs->get());
    }
    
    /**
     * expenses
     *
     * @param  mixed $request
     * @return void
     */
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
    
    /**
     * expense_reports
     *
     * @param  mixed $request
     * @return void
     */
    public function expense_reports(Request $request)
    {
        $expense_reports = ExpenseReport::orderBy("created_at");

        if (request()->has("id")) {
            $expense_reports = $expense_reports->where("id", $request->id);
        }

        if (request()->has("employee_id")) {
            $expense_reports = $expense_reports->where("employee_id", $request->employee_id);
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

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | DATA VALIDATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * validateFund
     *
     * @param  mixed $request
     * @return void
     */
    public function validateFund(Request $request)
    {

        // // $this->validate_remaining_fund();

        $employee = Employee::withTrashed()->findOrFail($request->id);

        $expenses = Expense::where("employee_id", $employee->id)
            ->where("deleted_at", null)
            ->orWhereHas("expense_report", function ($query) {
                $query->where([

                    ["cancelled_at", "=", null],

                    ["rejected_at", "=", null],

                    ["deleted_at", "=", null],
                ]);
            })
            ->get();

        $paid_expenses = Expense::where("employee_id", $employee->id)
                ->where("deleted_at", null)
                ->whereHas("expense_report", function ($query) {
                    $query->where([

                        ["cancelled_at", "=", null],

                        ["rejected_at", "=", null],

                        ["deleted_at", "=", null],
                    ]);
                    $query->whereHas("payments", function ($query) {
                        $query->where([

                            ["cancelled_at", "=", null],
    
                            ["received_at", "<>", null],
    
                            ["deleted_at", "=", null],
                        ]);
                    });
                })
                ->get();

        $deduct = $expenses->sum("amount") - $expenses->sum("reimbursable_amount");

        $paid = $paid_expenses->sum("amount") - $paid_expenses->sum("reimbursable_amount");

        $employee->remaining_fund = $employee->fund - $deduct + $paid;

        $employee->save();

        return response("Validated Employee Remaining Fund", 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | PRINTING DATA
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | TESTING
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    public function test()
    {
        $activity = Activity::all()->last();

        return $activity;
        // return $activity->description; //returns 'deleted'
        // return $activity->changes; //

        return "test";
    }

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
