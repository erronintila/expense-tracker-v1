<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReportResource;
use App\Models\ExpenseReport;
use App\Models\ExpenseType;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PrintController extends Controller
{
    /**
     * print
     *
     * @param  mixed $request
     * @return void
     */
    public function print(Request $request)
    {
        if (request()->has("expense_report_detailed")) {
            $expense_types = ExpenseType::withTrashed()->get();
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
    }
}
