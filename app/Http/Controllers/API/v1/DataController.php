<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ExpenseReportResource;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\JobResource;
use App\Http\Resources\VendorResource;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseReport;
use App\Models\ExpenseType;
use App\Models\Job;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function test()
    {
        $expenses = Expense::all();


        return $expenses;
    }

    public function employees()
    {
        return EmployeeResource::collection(Employee::orderBy("last_name")->get());
    }

    public function vendors()
    {
        return VendorResource::collection(Vendor::orderBy("name")->get());
    }

    public function departments()
    {
        return DepartmentResource::collection(Department::orderBy("name")->get());
    }

    public function expense_types()
    {
        return ExpenseTypeResource::collection(ExpenseType::orderBy("name")->get());
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
                ->where(function($q) use($request) {
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
            $expense_reports = $expense_reports->where("payment_id", null);
        }

        if (request()->has("employee_id")) {
            $expense_reports = $expense_reports->where("employee_id", $request->employee_id);
        }

        if (request()->has("payment_id")) {
            $expense_reports = $expense_reports->where("payment_id", $request->payment_id);
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $expense_reports = $expense_reports->whereBetween("created_at", [$request->start_date, $request->end_date]);
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
        $expense_types = ExpenseType::with(['expenses.expense_report' => function ($q) {
            $q->where('approved_at', '<>', null);
            $q->where('deleted_at', null);
        }])->get();

        $expense_types_summary = [];

        foreach ($expense_types as $key => $value) {
            $total_expenses = $value["expenses"]->where('expense_report', '<>', null)
                ->whereBetween('date', [$request->start_date, $request->end_date]);

            if (request()->has('employee_id')) {
                $total_expenses = $total_expenses->where('employee_id', $request->employee_id);
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
        $employees = Employee::with(['expenses.expense_report' => function ($q) {
            $q->where('approved_at', '<>', null);
            $q->where('deleted_at', null);
        }])->get();

        $employees_expenses_summary = [];

        foreach ($employees as $key => $value) {
            $total_expenses = $value["expenses"]->where('expense_report', '<>', null)
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
        $departments = Department::with(['jobs.employees.expenses.expense_report' => function ($q) {
            $q->where('approved_at', '<>', null);
            $q->where('deleted_at', null);
        }])->get();

        $departments_expenses_summary = [];

        foreach ($departments as $key => $value) {
            $name = $value["name"];
            $total_expenses = 0;

            foreach ($value["jobs"] as $key => $value) {
                foreach ($value["employees"] as $key => $value) {
                    $total_expenses += $value["expenses"]->where('expense_report', '<>', null)
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
        $expenses = Expense::with(['expense_report' => function ($q) {
            $q->where('approved_at', '<>', null);
            $q->where('deleted_at', null);
        }])
            ->whereHas('expense_report')
            ->get()
            ->where('expense_report', '<>', null)
            ->whereBetween('date', [$request->start_date, $request->end_date]);

        if (request()->has('employee_id')) {
            $expenses = $expenses->where('employee_id', $request->employee_id);
        }

        $expenses = $expenses->sum('amount');

        return $expenses;
    }

    public function expenses_summary(Request $request)
    {


        $expenses = Expense::whereBetween('expenses.date', [$request->start_date, $request->end_date])
            ->where('expense_reports.approved_at', '<>', null)
            ->where('expense_reports.deleted_at', null)
            ->join('expense_reports', 'expense_reports.id', '=', 'expenses.expense_report_id')
            ->orderBy('expenses.date')
            ->select(DB::raw('expenses.date as text, sum(expenses.amount) as value'));

        if (request()->has('employee_id')) {
            $expenses = $expenses->where('expenses.employee_id', $request->employee_id);
        }

        switch ($request->time_unit) {
            case 'day':
                $expenses = $expenses
                    ->groupBy(DB::raw('(expenses.date)'))
                    ->get();
                return $expenses;
                break;
            case 'week':
                $expenses = $expenses
                    ->groupBy(DB::raw('WEEK(expenses.date)'))
                    ->get();
                return $expenses;
                break;
            case 'month':
                $expenses = $expenses
                    ->groupBy(DB::raw('MONTH(expenses.date)'))
                    ->get();
                return $expenses;
                break;
            case 'quarter':
                $expenses = $expenses
                    ->groupBy(DB::raw('QUARTER(expenses.date)'))
                    ->get();
                return $expenses;
                break;
            case 'year':
                $expenses = $expenses
                    ->groupBy(DB::raw('YEAR(expenses.date)'))
                    ->get();
                return $expenses;
                break;
            default:
                # code...
                break;
        }

        return "";
    }
}
