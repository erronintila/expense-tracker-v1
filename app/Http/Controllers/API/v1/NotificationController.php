<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        $start_date = request("start_date") ??;

        $end_date = request("end_date") ??;

        $user = Auth::user();

        $notifications = $user->notifications()
            ->whereBetween("created_at", [$start_date, $end_date])
            ->paginate($itemsPerPage);

        return NotificationResource::collection($notifications)->additional(['meta' => [
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
