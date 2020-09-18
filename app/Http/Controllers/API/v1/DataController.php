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

class DataController extends Controller
{
    public function test()
    {
        return "test";
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

    public function jobs()
    {
        return JobResource::collection(Job::orderBy("name")->get());
    }

    public function expenses(Request $request)
    {
        $expenses = Expense::orderBy('date', 'desc');

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
}
