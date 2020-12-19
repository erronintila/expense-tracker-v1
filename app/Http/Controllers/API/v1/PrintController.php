<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReportResource;
use App\Models\ExpenseReport;
use App\Models\ExpenseType;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class PrintController extends Controller
{
    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function print(Request $request)
    {
        if (request()->has("expense_report_detailed")) {
            $expense_types = ExpenseType::withTrashed()->where('expense_type_id', null)->get();
            $expense_report = ExpenseReport::withTrashed()->where("id", $request->expense_report_id);

            $expense_report = new ExpenseReportResource($expense_report->first());

            $data =  $expense_report->expenses()->withTrashed()->get()
                ->sortBy("date")
                ->groupBy("date")
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
                $temp['particulars'] = "";

                foreach ($expense_types as $key => $value) {
                    if (!array_key_exists(str_replace(' ', '_', strtolower($value["name"])), $temp)) {
                        $temp[str_replace(' ', '_', strtolower($value["name"]))] = 0;
                    }
                }

                array_push($main, $temp);
            }

            $expenses = $expense_report->expenses()->withTrashed()->orderBy("date")->get()
                // ->sortBy("date")
                // ->groupBy("id")
                ->map(function ($row) {
                    return [
                        "description" => $row->description,
                        "date" => $row->date,
                        "total" => $row->amount,
                        "expense_type" => $row->expense_type->name,
                        str_replace(' ', '_', strtolower($row->expense_type->name)) => $row->amount,
                        "items" => $row->details == null ? null : json_decode($row->details),
                    ];
                    // return $row->expense_type;
                    // return $row->groupBy('expense_type.name')->map(function ($row) {
                    //     return $row->sum("amount");
                    // });
                });

            $main2 = [];

            foreach ($expenses as $key => $expense) {
                $temp2 = [];
                array_push($temp2, $expense);
    
                foreach ($expense_types as $key => $value) {
                    if (!array_key_exists(str_replace(' ', '_', strtolower($value["name"])), $temp2)) {
                        $temp2[str_replace(' ', '_', strtolower($value["name"]))] = 0;
                    }
                }
    
                array_push($main2, $temp2);
            }

            return response()->json([
                "temp" => $main2,
                "data" => $main,
                "expense_report" => $expense_report,
                "min_date" => collect($main)->min("date"),
                "max_date" => collect($main)->max("date")
            ]);
        }

        if (request()->has("expense_report_summary")) {
            $expense_types = ExpenseType::withTrashed()->where('expense_type_id', null)->get();
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
    }
    
    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function print_expense_reports(Request $request)
    {
        $ids = $request->ids ?? [];

        // if (request()->has("ids")) {
        //     foreach ($request->ids as $id) {
        //         array_push($id, $ids);
        //     }
        // }
        
        if (request()->has('by_expense_id')) {
            $expenses = DB::table('expenses')
            ->join("employees", "employees.id", "=", "expenses.employee_id")
            ->join("jobs", "jobs.id", "=", "employees.job_id")
            ->join("departments", "departments.id", "=", "jobs.department_id")
            ->join("expense_types", "expense_types.id", "=", "expenses.expense_type_id")
            ->join("expense_reports", "expense_reports.id", "=", "expenses.expense_report_id")
            ->leftJoin(DB::raw("expense_types as sub"), DB::raw("sub.id") , "=", "expenses.sub_type_id")
            // ->where(DB::raw("expense_reports.id IN ({$request->ids})"))
            ->whereIn('expense_reports.id', explode(",", $ids))
            ->groupBy(DB::raw("`employees`.`id`, `expense_types`.`id`, `expenses`.`id`"))
            ->orderBy(DB::raw("`employees`.`id`, `expenses`.`date`, `expenses`.`id`, `expense_types`.`name`"))
            // ->select(DB::raw("
            //     `employees`.`id` AS employee_id,
            //     `employees`.`last_name`,
            //     `employees`.`first_name`,
            //     `employees`.`middle_name`,
            //     `employees`.`suffix`,
            //     `jobs`.`id` AS job_id,
            //     `jobs`.`name` job_name,
            //     `departments`.`id` AS department_id,
            //     `departments`.`name` department_name,
            //     `expense_types`.`id` expense_type_id,
            //     `expense_types`.`name` expense_type_name,
            //     `expense_reports`.`id` AS expense_report_id,
            //     `expenses`.`id` AS expense_id,
            //     `expenses`.`date` AS expense_date,
            //     SUM(`expenses`.`amount`) AS expense_amount
            // "))
            ->select(DB::raw("
                `employees`.`id` AS employee_id,
                `employees`.`last_name`,
                `employees`.`first_name`,
                `employees`.`middle_name`,
                `employees`.`suffix`,
                `jobs`.`id` AS job_id,
                `jobs`.`name` job_name,
                `departments`.`id` AS department_id,
                `departments`.`name` department_name,
                `expense_types`.`id` expense_type_id,
                `expense_types`.`name` expense_type_name,
                `expense_reports`.`id` AS expense_report_id,
                `expenses`.`id` AS expense_id,
                `expenses`.`description` AS expense_description,
                `expenses`.`details` AS expense_details,
                `sub`.`name` sub_type_name,
                `expenses`.`date` AS expense_date,
                `sub`.`name` AS sub_type_name,
                SUM(`expenses`.`amount`) AS expense_amount
            "))
            ->get();

            return response()->json([
                "data" => $expenses
            ]);
        }

        if (request()->has('by_employee_id')) {
            $expenses = DB::table('expenses')
            ->join("employees", "employees.id", "=", "expenses.employee_id")
            ->join("jobs", "jobs.id", "=", "employees.job_id")
            ->join("departments", "departments.id", "=", "jobs.department_id")
            ->join("expense_types", "expense_types.id", "=", "expenses.expense_type_id")
            ->join("expense_reports", "expense_reports.id", "=", "expenses.expense_report_id")
            ->whereIn('expense_reports.id', explode(",", $ids))
            ->groupBy(DB::raw("`employees`.`id`, `expense_types`.`id`"))
            ->orderBy(DB::raw("`employees`.`id`, `expenses`.`date`, `expense_types`.`name`"))
            // ->select(DB::raw("
            //     `employees`.`id` AS employee_id,
            //     `employees`.`last_name`,
            //     `employees`.`first_name`,
            //     `employees`.`middle_name`,
            //     `employees`.`suffix`,
            //     `jobs`.`id` AS job_id,
            //     `jobs`.`name` job_name,
            //     `departments`.`id` AS department_id,
            //     `departments`.`name` department_name,
            //     `expense_types`.`id` expense_type_id,
            //     `expense_types`.`name` expense_type_name,
            //     `expense_reports`.`id` AS expense_report_id,
            //     `expenses`.`id` AS expense_id,
            //     `expenses`.`date` AS expense_date,
            //     SUM(`expenses`.`amount`) AS expense_amount
            // "))
            ->select(DB::raw("
                `employees`.`id` AS employee_id,
                `employees`.`last_name`,
                `employees`.`first_name`,
                `employees`.`middle_name`,
                `employees`.`suffix`,
                `departments`.`name` department_name,
                `expense_types`.`name` expense_type_name,
                `expenses`.`date` AS expense_date,
                SUM(`expenses`.`amount`) AS expense_amount
            "))
            ->get();

            return response()->json([
                "data" => $expenses
            ]);
        }

        if (request()->has('by_date')) {
            $expenses = DB::table('expenses')
            ->join("employees", "employees.id", "=", "expenses.employee_id")
            ->join("jobs", "jobs.id", "=", "employees.job_id")
            ->join("departments", "departments.id", "=", "jobs.department_id")
            ->join("expense_types", "expense_types.id", "=", "expenses.expense_type_id")
            ->join("expense_reports", "expense_reports.id", "=", "expenses.expense_report_id")
            ->whereIn('expense_reports.id', explode(",", $ids))
            ->groupBy(DB::raw("`employees`.`id`, `expense_types`.`id`, `expenses`.`date`"))
            ->orderBy(DB::raw("`employees`.`id`, `expenses`.`date`, `expense_types`.`name`"))
            // ->select(DB::raw("
            //     `employees`.`id` AS employee_id,
            //     `employees`.`last_name`,
            //     `employees`.`first_name`,
            //     `employees`.`middle_name`,
            //     `employees`.`suffix`,
            //     `jobs`.`id` AS job_id,
            //     `jobs`.`name` job_name,
            //     `departments`.`id` AS department_id,
            //     `departments`.`name` department_name,
            //     `expense_types`.`id` expense_type_id,
            //     `expense_types`.`name` expense_type_name,
            //     `expense_reports`.`id` AS expense_report_id,
            //     `expenses`.`id` AS expense_id,
            //     `expenses`.`date` AS expense_date,
            //     SUM(`expenses`.`amount`) AS expense_amount
            // "))->get();
            ->select(DB::raw("
                `employees`.`id` AS employee_id,
                `employees`.`last_name`,
                `employees`.`first_name`,
                `employees`.`middle_name`,
                `employees`.`suffix`,
                `jobs`.`name` job_name,
                `departments`.`name` department_name,
                `expense_types`.`name` expense_type_name,
                `expenses`.`date` AS expense_date,
                SUM(`expenses`.`amount`) AS expense_amount
            "))->get();


            return response()->json([
                "data" => $expenses
            ]);
        }
    }
}
