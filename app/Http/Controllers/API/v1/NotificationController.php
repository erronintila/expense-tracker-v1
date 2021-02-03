<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use App\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

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

        $user = request()->has("user_id") ?
            (request("user_id") > 0 ?
                User::find(request("user_id")) :
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
        return new NotificationResource(auth()->user()->unreadNotifications->where('id', $id));
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
        $message = "";

        switch (request("action")) {

            case 'read':

                switch (request("type")) {
                    case 'all':
                        auth()->user()->unreadNotifications->markAsRead();
                        break;
                    case 'multiple':
                        foreach (request("ids") as $notif_id) {
                            auth()->user()->unreadNotifications->where('id', $notif_id)->markAsRead();
                        }
                        break;
                    default:
                        auth()->user()->unreadNotifications->where('id', $id)->markAsRead();
                        break;
                }

                $message = "Notification(s) marked as read";

                // if (request()->has("mark_all")) {
                //     auth()->user()->unreadNotifications->markAsRead();
                // } elseif (request()->has("ids")) {
                //     foreach (request("ids") as $notif_id) {
                //         auth()->user()->unreadNotifications->where('id', $notif_id)->markAsRead();
                //     }
                // } else {
                //     auth()->user()->unreadNotifications->where('id', $id)->markAsRead();
                // }

                break;

            case 'unread':

                switch (request("type")) {
                    case 'all':
                        auth()->user()->readNotifications->markAsUnread();
                        break;
                    case 'multiple':
                        foreach (request("ids") as $notif_id) {
                            auth()->user()->readNotifications->where('id', $notif_id)->markAsUnread();
                        }
                        break;
                    default:
                    auth()->user()->readNotifications->where('id', $id)->markAsUnread();
                        break;
                }

                $message = "Notification(s) marked as unread";

                // if (request()->has("mark_all")) {
                //     auth()->user()->readNotifications->markAsUnread();
                // } elseif (request()->has("ids")) {
                //     foreach (request("ids") as $notif_id) {
                //         auth()->user()->readNotifications->where('id', $notif_id)->markAsUnread();
                //     }
                // } else {
                //     auth()->user()->readNotifications->where('id', $id)->markAsUnread();
                // }

                break;
            
            default:
                # code...
                break;
        }

        return $this->successResponse([], $message, 200);
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

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | NOTIFICATION CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function getNotifications(Request $request)
    {
        $data = [];
        $message = "";

        switch (request("action")) {
            case 'check notifications':

                $data = NotificationResource::collection(auth()->user()->unreadNotifications);

                break;
        }

        return $this->successResponse($data, $message, 200);
    }
}
