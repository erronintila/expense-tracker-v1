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

        // DB::table('expenses')->where(function($query) {
            // $query->whereDoesntHave("expense_report");
            // $query->orWhereHas("expense_report", function() {
            //     $query->where("approved_at", null);
            // })
        //})->update(['encoding_period' => setting("encoding_period")]);
        DB::table('expense_reports')->where("approved_at", null)->where("cancelled_at", null)->where("rejected_at", null)->where("deleted_at", null)->update(['submission_period' => setting("submission_period"), 'approval_period' => setting("approval_period")]);
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
