<?php

namespace App\Http\Controllers\API\v1;

use App\User;
use App\Models\Payment;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\ExpenseReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Payment\PaymentStoreRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\PaymentResource;
use App\Notifications\PaymentNotification;
use Illuminate\Support\Facades\Notification;
use App\Http\Resources\Payment\PaymentShowResource;
use App\Http\Resources\Payment\PaymentIndexResource;

class PaymentController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        $this->middleware(['permission:view all payments'], ['only' => ['index']]);
        $this->middleware(['permission:view payments'], ['only' => ['show']]);
        $this->middleware(['permission:add payments'], ['only' => ['create', 'store']]);
        // $this->middleware(['permission:edit payments'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete payments'], ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $payments = Payment::with('user')
        ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request("status")) {
                case 'Cancelled Payments':
                    $payments = $payments->onlyTrashed();
                    break;
                case 'Completed Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Received Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Released Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "=", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Approved Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "=", null],
                        ["received_at", "=", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                default:
                    $payments = $payments;

                    break;
            }
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $payments = $payments->whereBetween("date", [request("start_date"), request("end_date")]);
        }

        if (request()->has('user_id')) {
            if (request("user_id") > 0) {
                $payments = $payments->where("user_id", request("user_id"));
            }
        }

        $payments = $payments->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere('reference_no', "like", "%" . $search . "%");
            $query->orWhere('voucher_no', "like", "%" . $search . "%");
            $query->orWhere('description', "like", "%" . $search . "%");
            $query->orWhere('cheque_no', "like", "%" . $search . "%");
            $query->orWhere('amount', "like", "%" . $search . "%");
            $query->orWhere('payee', "like", "%" . $search . "%");
        });

        $payments = $payments->paginate($itemsPerPage);

        return PaymentIndexResource::collection($payments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PaymentStoreRequest $request)
    {
        $validated = $request->validated();
        $message = "Payment created successfully";

        $payment = new Payment();
        $payment->code = generate_code(Payment::class, "PAY", 10);
        $payment->reference_no = request("reference_no");
        $payment->voucher_no = request("voucher_no");
        $payment->description = request("description");
        $payment->date = request("date");
        $payment->cheque_no = request("cheque_no");
        $payment->cheque_date = request("cheque_date");
        $payment->amount = request("amount");
        $payment->payee = request("payee");
        $payment->payee_address = request("payee_address");
        $payment->payee_phone = request("payee_phone");
        $payment->remarks = request("remarks");
        $payment->notes = request("notes");

        ////////// TEMPORARY
        $payment->approved_at = now();
        $payment->released_at = now();
        $payment->received_at = null;
        //////////

        $payment->user_id = request("user_id");
        $payment->created_by = Auth::id();
        $payment->updated_by = Auth::id();

        $payment->save();

        if (request()->has("expense_reports")) {
            $arr = [];

            foreach (request("expense_reports") as $item) {
                $expense_report = ExpenseReport::findOrFail($item["id"]);
                $arr[$expense_report->id] = ['payment' => $expense_report->getTotalExpenseAmountAttribute()];

                log_activity(
                    "expense_report",
                    $expense_report,
                    [
                    "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                    "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                ],
                    "expense report associated with payment #{$payment->code}"
                );
            }
            
            $payment->expense_reports()->sync($arr);
        }

        Notification::send($payment->user, new PaymentNotification([
            "action" => "release",
            "payment" => $payment
        ]));

        return $this->successResponse(new PaymentResource($payment), $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (request()->has("isDeleted")) {
            if (request("isDeleted") != null) {
                $payment = Payment::withTrashed()
                ->with(['expense_reports' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['user' => function ($query) {
                    $query->withTrashed();
                }])
                ->findOrFail($id);
            }
        } else {
            $payment = Payment::with('expense_reports')
                ->with('user')
                ->findOrFail($id);
        }

        return response(
            [
                'data' => new PaymentShowResource($payment),

                'message' => 'Retrieved successfully'
            ],
            200
        );
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
        if (request()->has('ids')) {
            foreach (request("ids") as $id) {
                $payment = Payment::findOrFail($id);

                foreach ($payment->expense_reports as $expense_report) {
                    if ($payment->received_at !== null) {
                        foreach ($payment->expense_reports as $expense_report) {
                            foreach ($expense_report->expenses as $expense) {
                                $expense_amount = $expense->amount - $expense->reimbursable_amount;
                                $expense->user->remaining_fund -= $expense_amount;
                                $expense->user->save();
                            }
                        }
                    }

                    $payment->deleted_by = Auth::id();

                    log_activity(
                        "expense_report",
                        $expense_report,
                        [
                        "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                        "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                    ],
                        "removed expense report association with payment #{$payment->code}"
                    );
                }

                $payment->delete();

                $payment->expense_reports()->sync([]);
            }
        } else {
            $payment = Payment::findOrFail($id);

            foreach ($payment->expense_reports as $expense_report) {
                if ($payment->received_at !== null) {
                    foreach ($payment->expense_reports as $expense_report) {
                        foreach ($expense_report->expenses as $expense) {
                            $expense_amount = $expense->amount - $expense->reimbursable_amount;
                            $expense->user->remaining_fund -= $expense_amount;
                            $expense->user->save();
                        }
                    }
                }

                $payment->deleted_by = Auth::id();
                
                log_activity(
                    "expense_report",
                    $expense_report,
                    [
                    "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                    "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                ],
                    "removed expense report association with payment #{$payment->code}"
                );
            }

            $payment->delete();
            
            $payment->expense_reports()->sync([]);
        }

        return response(
            [
                'message' => 'Payment Cancelled successfully'
            ],
            200
        );
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | PAYMENT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function approve_payment(Request $request, $id)
    {
        foreach (request("ids") as $id) {
            $payment = Payment::findOrFail($id);
            $payment->approved_at = now();
            $payment->save();
        }
        $message = "Payment(s) approved successfully";
        return $this->successResponse(null, $message, 200);
    }

    public function release_payment(Request $request, $id)
    {
        foreach (request("ids") as $id) {
            $payment = Payment::findOrFail($id);
            $payment->released_at = now();
            $payment->save();
        }
        $message = "Payment(s) released successfully";
        return $this->successResponse(null, $message, 200);
    }

    public function receive_payment(Request $request, $id)
    {
        foreach (request("ids") as $id) {
            $payment = Payment::findOrFail($id);
            $payment->received_at = now();
            $payment->save();
        }
        $message = "Payment(s) received successfully";
        return $this->successResponse(null, $message, 200);
    }

    public function complete_payment(Request $request, $id)
    {
        foreach (request("ids") as $id) {
            $payment = Payment::findOrFail($id);
            $payment->approved_at = now();
            $payment->released_at = now();
            $payment->received_at = now();
            $payment->save();
        }
        $message = "Payment(s) completed successfully";
        return $this->successResponse(null, $message, 200);
    }
}
