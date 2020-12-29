<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use anlutro\LaravelSettings\Facade as Setting;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Setting::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $settings = request()->has("settings") ? $request->settings : [];

        foreach ($settings as $key => $value) {
            Setting::set($key, $value);
        }

        Setting::save();

        // Update Expenses Settings
        DB::table('expenses')
        ->leftJoin("expense_reports", "expense_reports.id", "=", "expenses.expense_report_id")
        ->where("expenses.deleted_at", null)
        ->where("expense_reports.approved_at", null)
        ->where("expense_reports.cancelled_at", null)
        ->where("expense_reports.rejected_at", null)
        ->where("expense_reports.deleted_at", null)
        ->update(['expenses.encoding_period' => setting("expense_encoding_period")]);

        // Update Expense Reports Settings
        DB::table('expense_reports')
        ->where("approved_at", null)
        ->where("cancelled_at", null)
        ->where("rejected_at", null)
        ->where("deleted_at", null)
        ->update([
            'submission_period' => setting("submission_period"),
            'approval_period' => setting("approval_period")
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
