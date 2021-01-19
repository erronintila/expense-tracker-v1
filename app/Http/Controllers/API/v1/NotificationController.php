<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search = request("search") ?? "";

        $sortBy = request("sortBy") ?? "created_at";

        $sortType = request("sortType") ?? "desc";

        $itemsPerPage = request("itemsPerPage") ?? 10;

        $start_date = request("start_date") ?? date("Y-m-d");

        $end_date = request("end_date") ?? date("Y-m-d");

        $user = request()->has("employee_id") ? 
            (request("employee_id") > 0 ? 
                Employee::find(request("employee_id"))->user()->first() : 
                Auth::user()) : 
            Auth::user();

        $status = request("status") ?? "All Notifications";

        $notifications = $user->notifications()
            ->whereBetween("created_at", [$start_date, $end_date]);

        switch ($status) {
            case 'All Read':

                $notifications = $notifications->where("read_at", "<>", null);

                break;
            case 'All Unread':

                $notifications = $notifications->where("read_at", null);

                break;
            
            default:
                
                break;
        }

        return NotificationResource::collection($notifications->paginate($itemsPerPage))->additional(['meta' => [
            'unread' => $user->unReadNotifications->count(),
        ]]);
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
    public function destroy($id)
    {
        //
    }
}
