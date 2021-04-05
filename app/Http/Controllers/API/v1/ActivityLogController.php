<?php

namespace App\Http\Controllers\API\v1;

use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Spatie\Activitylog\Models\Activity;
use App\Http\Resources\ActivityLogResource;

class ActivityLogController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        $this->middleware(['permission:view all activity logs'], ['only' => ['index']]);
        $this->middleware(['permission:delete activity logs'], ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $activity_logs = Activity::orderBy($sortBy, $sortType);

        if (request()->has('start_date') && request()->has('end_date')) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();
            $activity_logs = $activity_logs->whereBetween("created_at", [$start_date, $end_date]);
        }

        if (request()->has('user_id')) {
            if (request("user_id") > 0) {
                $activity_logs = $activity_logs->where("causer_id", request("user_id"));
            }
        }

        $activity_logs = $activity_logs->paginate($itemsPerPage);

        return ActivityLogResource::collection($activity_logs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request  $request
     *
     * @return void
     */
    public function store(Request $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int  $id
     *
     * @return void
     */
    public function show($id): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request  $request
     * @param int  $id
     *
     * @return void
     */
    public function update(Request $request, $id): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int  $id
     *
     * @return \Illuminate\Http\Response|null
     */
    public function destroy(Request $request, $id)
    {
        abort(422, "Activity Logs can't be deleted.");
    }
}
