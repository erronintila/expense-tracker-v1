<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdvancePaymentStoreRequest;
use App\Http\Resources\AdvancePaymentResource;
use App\Models\AdvancePayment;
use App\Notifications\AdvancePaymentNotification;
use App\Traits\ApiResponse;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;

class AdvancePaymentController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        // $this->middleware(['permission:view all advance payments'], ['only' => ['index']]);
        // $this->middleware(['permission:view advance payments'], ['only' => ['show']]);
        // $this->middleware(['permission:add advance payments'], ['only' => ['create', 'store']]);
        // $this->middleware(['permission:edit advance payments'], ['only' => ['edit', 'update']]);
        // $this->middleware(['permission:delete advance payments'], ['only' => ['destroy']]);
        // $this->middleware(['permission:restore advance payments'], ['only' => ['restore']]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;
        $start_date = request("start_date");
        $end_date = request("end_date");

        $advance_payments = AdvancePayment::orderBy($sortBy, $sortType)
            ->with('user')
            ->with(['expense_reports' => function ($query) {
                $query->with("expenses");
            }])
            ->whereBetween("date", [$start_date, $end_date]);
        
        if (request()->has('status')) {
            switch (request("status")) {
                    case 'Archived Advance Payments':
                        $advance_payments = $advance_payments->onlyTrashed();
                        break;
                    case 'Cancelled Advance Payments':
                        $advance_payments = $advance_payments->where([
                            ["cancelled_at", "<>", null],
                        ]);
                        break;
                    case 'Returned Advance Payments':
                        $advance_payments = $advance_payments->where([
                            ["approved_at", "<>", null],
                            ["returned_at", "<>", null],
                            ["cancelled_at", "=", null],
                        ]);
                        break;
                    case 'Approved Advance Payments':
                        $advance_payments = $advance_payments->where([
                            ["approved_at", "<>", null],
                            ["cancelled_at", "=", null],
                            ["returned_at", "=", null],
                        ]);
                        break;
                    case 'Pending Advance Payments':
                        $advance_payments = $advance_payments->where([
                            ["approved_at", "=", null],
                            ["cancelled_at", "=", null],
                            ["returned_at", "=", null],
                        ]);
                        break;
                    default:
                        $advance_payments = $advance_payments;
                        break;
                }
        }
            
        $advance_payments = $advance_payments->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->where('cal_no', "like", "%" . $search . "%");
            $query->orWhere('description', "like", "%" . $search . "%");
        });

        if (request()->has("user_id")) {
            if (request("user_id") > 0) {
                $advance_payments = $advance_payments->where("user_id", request("user_id"));
            }
        }

        $advance_payments = $advance_payments->paginate($itemsPerPage);

        return AdvancePaymentResource::collection($advance_payments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdvancePaymentStoreRequest $request)
    {
        $validated = $request->validated();
        $user = User::findOrFail($validated["user_id"]);

        $advance_payment = DB::transaction(function () use ($validated, $user) {
            $advance_payment = new AdvancePayment();
            $advance_payment->fill($validated);
            $advance_payment->user()->associate($user);
            $advance_payment->save();

            return $advance_payment;
        });

        $message = "Advance Payment created successfully.";
        return $this->successResponse($advance_payment, $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (request()->has("isDeleted")) {
            if (request("isDeleted") != null) {
                $advance_payment = AdvancePayment::withTrashed()
                    ->with(['user' => function ($query) {
                        $query->withTrashed();
                    }])
                    ->with(['expense_reports' => function ($query) {
                        $query->withTrashed();
                        $query->with(["expenses" => function ($query2) {
                            $query2->withTrashed();
                        }]);
                    }])
                    ->findOrFail($id);
            }
        } else {
            $advance_payment = AdvancePayment::with('user')
                ->with(['expense_reports' => function ($query) {
                    $query->with("expenses");
                }])
                ->findOrFail($id);
        }
        $message = "Advance Payment retrieved successfully.";
        return $this->successResponse($advance_payment, $message, 200);
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
        $validated = $request->validated();
        $user = User::findOrFail($validated["user_id"]);

        $advance_payment = DB::transaction(function () use ($validated, $user, $id) {
            $advance_payment = AdvancePayment::findOrFail($id);
            $advance_payment->fill($validated);
            $advance_payment->user()->associate($user);
            $advance_payment->save();

            return $advance_payment;
        });

        $message = "Advance Payment updated successfully.";
        return $this->successResponse($advance_payment, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $advance_payments = DB::transaction(function () use ($id) {
            $advance_payments = AdvancePayment::findOrFail(explode(",", $id));
            $advance_payments->each->delete();
            return $advance_payments;
        });

        $message = "Advance Payment(s) deleted successfully.";
        return $this->successResponse($advance_payments, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | ADVANCE PAYMENT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function restore($id)
    {
        $advance_payments = DB::transaction(function () use ($id) {
            $advance_payments = AdvancePayment::onlyTrashed()
                ->findOrFail(explode(",", $id));
            $advance_payments->each->restore();
            return $advance_payments;
        });

        $message = "Advance Payment(s) restored successfully.";
        return $this->successResponse($advance_payments, $message, 200);
    }

    public function approve_payment(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $advance_payments = AdvancePayment::findOrFail($ids);
            $advance_payments->each(function ($item) {
                $item->approved_at = now();
                $item->save();

                // Notification::send(User::find($item->user->id), new AdvancePaymentNotification([
                //     "action" => "approve",
                //     "advance_payment" => $item
                // ]));
            });

            return $advance_payments;
        });

        $message = "Advance Payment(s) approved successfully.";
        return $this->successResponse($data, $message, 200);
    }

    public function cancel_payment(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $advance_payments = AdvancePayment::findOrFail($ids);
            $advance_payments->each(function ($item) {
                $item->cancelled_at = now();
                $item->save();

                // Notification::send(User::find($item->user->id), new AdvancePaymentNotification([
                //     "action" => "cancel",
                //     "advance_payment" => $item
                // ]));
            });

            return $advance_payments;
        });

        $message = "Advance Payment(s) cancelled successfully.";
        return $this->successResponse($data, $message, 200);
    }

    public function return_payment(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $advance_payments = AdvancePayment::findOrFail($ids);
            $advance_payments->each(function ($item) {
                if (request()->has("unreturn")) {
                    $item->returned_at = null;
                    $item->save();
                } else {
                    $item->returned_at = now();
                    $item->save();
                }

                // Notification::send(User::find($item->user->id), new AdvancePaymentNotification([
                //     "action" => "approve",
                //     "advance_payment" => $item
                // ]));
            });

            return $advance_payments;
        });

        $message = "Advance Payment(s) returned successfully.";
        return $this->successResponse($data, $message, 200);
    }
}
