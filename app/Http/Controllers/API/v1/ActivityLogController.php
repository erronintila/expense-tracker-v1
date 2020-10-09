<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ActivityLogResource;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search ?? "";

        $sortBy = $request->sortBy ?? "updated_at";

        $sortType = $request->sortType ?? "desc";

        $itemsPerPage = $request->itemsPerPage ?? 10;

        $activity_logs = Activity::orderBy($sortBy, $sortType);

        if (request()->has('start_date') && request()->has('end_date')) {

            $start_date = Carbon::parse($request->start_date)->startOfDay();

            $end_date = Carbon::parse($request->end_date)->endOfDay();

            $activity_logs = $activity_logs->whereBetween("created_at", [$start_date, $end_date]);
        }

        if (request()->has('user_id')) {

            if ($request->user_id > 0) {

                $activity_logs = $activity_logs->where("causer_id", $request->user_id);
            }
        }

        $activity_logs = $activity_logs->where(function ($query) use ($search) {

            // $query->where("description", "like", "%" . $search . "%");

            // $query->orWhere("receipt_number", "like", "%" . $search . "%");

            // $query->orWhere("date", "like", "%" . $search . "%");
        });

        $activity_logs = $activity_logs->paginate($itemsPerPage);

        return ActivityLogResource::collection($activity_logs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    public function destroy(Request $request, $id)
    {
        if (request()->has("delete_all")) {

            $activity_logs = DB::table('activity_log')->delete();

            return response(
                [
                    'message' => 'Deleted All Logs successfully'
                ],
                201
            );
        }

        if (request()->has("ids")) {

            foreach ($request->ids as $id) {

                $activity_logs = DB::table('activity_log')->where("id", $id)->delete();
            }

            return response(
                [
                    'message' => 'Deleted Logs successfully'
                ],
                201
            );
        }
    }
}