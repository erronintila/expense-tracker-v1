<?php

namespace App\Http\Controllers\API\v1;

use App\Exports\PaymentsExport;
use App\Models\Payment;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\ExpenseReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Payment\PaymentStoreRequest;
use App\Http\Requests\Payment\PaymentUpdateRequest;
use App\Http\Resources\Payment\PaymentShowResource;
use App\Http\Resources\PaymentIndexResource;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class PaymentController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        $this->middleware(['permission:view all payments'], ['only' => ['index']]);
        $this->middleware(['permission:view payments'], ['only' => ['show']]);
        $this->middleware(['permission:add payments'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit payments'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete payments'], ['only' => ['destroy']]);
        $this->middleware(['permission:cancel payments'], ['only' => ['cancel_payment']]);
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

        $payments = Payment::with('user')->with("expense_reports");

        switch ($sortBy) {
            case 'user':
                $payments = $payments->leftJoin('users', 'payments.user_id', '=', 'users.id')
                    ->select('payments.*')
                    ->orderBy('users.first_name', $sortType);
                break;
            default:
                $payments = $payments->orderBy($sortBy, $sortType);
                break;
        }

        if (request()->has('status')) {
            switch (request("status")) {
                case 'Deleted Payments':
                    $payments = $payments->onlyTrashed();
                    break;
                case 'Cancelled Payments':
                    $payments = $payments->where([
                        ["deleted_at", "=", null],
                        ["cancelled_at", "<>", null],
                    ]);
                    break;
                case 'Completed Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["deleted_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                        ["cancelled_at", "=", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Received Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["deleted_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                        ["cancelled_at", "=", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Released Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["deleted_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])
                    ->whereHas("expense_reports");

                    break;
                case 'Approved Payments':
                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["deleted_at", "=", null],
                        ["released_at", "=", null],
                        ["received_at", "=", null],
                        ["cancelled_at", "=", null],
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
            $query->where('payments.code', "like", "%" . $search . "%");
            $query->orWhere('date', "like", "%" . $search . "%");
            $query->orWhere('reference_no', "like", "%" . $search . "%");
            $query->orWhere('voucher_no', "like", "%" . $search . "%");
            $query->orWhere('description', "like", "%" . $search . "%");
            $query->orWhere('cheque_no', "like", "%" . $search . "%");
            $query->orWhere('amount', "like", "%" . $search . "%");
            $query->orWhere('payee', "like", "%" . $search . "%");
            $query->orWhereHas('user', function ($q) use ($search) {
                $q->where('first_name', "like", "%" . $search . "%");
                $q->orWhere('middle_name', "like", "%" . $search . "%");
                $q->orWhere('last_name', "like", "%" . $search . "%");
            });
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
        abort_if(!auth()->user()->is_admin, 403);
        
        $validated = $request->validated();
        
        $data = DB::transaction(function () use ($validated) {
            $user = User::findOrFail($validated["user_id"]);

            $payment = new Payment();
            $payment->fill($validated);
            $payment->code = generate_code(Payment::class, "PAY", 10);
            $payment->approved_at = now(); // temporary
            $payment->released_at = now(); // temporary
            $payment->received_at = null; // temporary
            $payment->created_by = auth()->user()->id;
            $payment->updated_by = auth()->user()->id;
            $payment->user()->associate($user);
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

            return $payment;
        });

        $message = "Payment created successfully";
        return $this->successResponse($data, $message, 201);
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
            $payment = Payment::with(['expense_reports' => function ($query) {
                $query->with("expenses");
            }])
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
    public function update(PaymentUpdateRequest $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);
        
        $validated = $request->validated();
        
        $data = DB::transaction(function () use ($id, $validated) {
            $user = User::findOrFail($validated["user_id"]);

            $payment = Payment::findOrFail($id);
            $payment->fill($validated);
            $payment->code = $validated["code"] ?? generate_code(Payment::class, "PAY", 10);
            $payment->updated_by = auth()->user()->id;
            $payment->user()->associate($user);

            if (!$payment->received_at == null) {
                abort_if(!app("auth")->user()->hasPermissionTo('edit completed payments'), 403);
                $payment->expense_reports->each(function ($expense_report) {
                    $expense_report->expenses->each(function ($expense) {
                        $expense_amount = $expense->amount - $expense->reimbursable_amount;
                        $user = User::findOrFail($expense->user_id);
                        $user->remaining_fund -= $expense_amount;
                        $user->save();
                    });
                });
            }

            $payment->save();

            if (request()->has("expense_reports")) {
                $arr = [];

                foreach (request("expense_reports") as $item) {
                    $expense_report = ExpenseReport::findOrFail($item["id"]);
                    $arr[$expense_report->id] = ['payment' => $expense_report->getTotalExpenseAmountAttribute()];

                    if (!$payment->received_at == null) {
                        abort_if(!app("auth")->user()->hasPermissionTo('edit completed payments'), 403);
                        $expense_report->expenses->each(function ($expense) {
                            $expense_amount = $expense->amount - $expense->reimbursable_amount;
                            $user = User::findOrFail($expense->user_id);
                            $user->remaining_fund += $expense_amount;
                            $user->save();
                        });
                    }
                }
            
                $payment->expense_reports()->sync([]);
                $payment->expense_reports()->sync($arr);
            }

            return $payment;
        });

        

        $message = "Payment updated successfully";
        return $this->successResponse($data, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 422, "Some records can't be deleted.");

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $original_cancelled_at = $item->getOriginal("cancelled_at");
                if ($original_cancelled_at == null && $item->received_at !== null) {
                    $item->expense_reports->each(function ($expense_report) use ($item) {
                        log_activity(
                            "expense_report",
                            $expense_report,
                            [
                                "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                                "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                            ],
                            "deleted associated payment #{$item->code}"
                        );

                        activity()->disableLogging();
                        $expense_report->expenses->each(function ($expense) {
                            $expense_amount = $expense->amount - $expense->reimbursable_amount;
                            $expense->user->remaining_fund -= $expense_amount;
                            $expense->user->save();
                        });
                        activity()->enableLogging();
                    });
                } else {
                    $item->expense_reports->each(function ($expense_report) use ($item) {
                        log_activity(
                            "expense_report",
                            $expense_report,
                            [
                            "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                            "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                        ],
                            "deleted associated payment #{$item->code}"
                        );
                    });
                }
            
                $item->deleted_by = auth()->user()->id;
                $item->expense_reports()->sync([]);
                $item->delete();
            });
        });

        $message = "Payment Deleted successfully";
        return $this->successResponse($data, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | PAYMENT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Export data to Excel
     *
     * @return void
     */
    public function export()
    {
        $start_date = request("start_date") ?? Carbon::now()->startOfMonth()->format("Y-m-d");
        $end_date = request("end_date") ?? Carbon::now()->endOfMonth()->format("Y-m-d");
        return Excel::download(new PaymentsExport($start_date, $end_date), 'Payment Vouchers - Expense Tracker.xlsx');
    }

    public function approve_payment(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 422, "Some records can't be approved.");

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $item->approved_at = now();
                $item->save();

                $item->expense_reports->each(function ($expense_report) use ($item) {
                    log_activity(
                        "expense_report",
                        $expense_report,
                        [
                            "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                            "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                        ],
                        "approved associated payment #{$item->code}"
                    );
                });
            });

            return $payment;
        });
        
        $message = "Payment(s) approved successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function release_payment(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 422, "Some records can't be released.");

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $item->released_at = now();
                $item->save();

                $item->expense_reports->each(function ($expense_report) use ($item) {
                    log_activity(
                        "expense_report",
                        $expense_report,
                        [
                            "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                            "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                        ],
                        "released associated payment #{$item->code}"
                    );
                });
            });

            return $payment;
        });

        $message = "Payment(s) released successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function receive_payment(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $item->received_at = now();
                $item->save();

                $item->expense_reports->each(function ($expense_report) use ($item) {
                    log_activity(
                        "expense_report",
                        $expense_report,
                        [
                            "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                            "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                        ],
                        "received associated payment #{$item->code}"
                    );
                });
            });

            return $payment;
        });

        $message = "Payment(s) received successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function complete_payment(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 422, "Some records can't be completed.");

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $item->approved_at = now();
                $item->released_at = now();
                $item->received_at = now();
                $item->save();
            });

            return $payment;
        });
        
        $message = "Payment(s) completed successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function cancel_payment(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 422, "Some records can't be cancelled.");

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $payment = Payment::findOrFail($ids);
            $payment->each(function ($item) {
                $item->cancelled_at = now();
                $item->amount = $item->expense_reports->sum('pivot.payment');
                $item->save();

                $item->expense_reports->each(function ($expense_report) use ($item) {
                    log_activity(
                        "expense_report",
                        $expense_report,
                        [
                            "attributes" => ["code" => $expense_report->code, "updated_at" => now()],
                            "custom" => ["link" => "expense_reports/{$expense_report->id}"]
                        ],
                        "cancelled associated payment #{$item->code}"
                    );
                });
            });

            return $payment;
        });
        
        $message = "Payment(s) completed successfully";
        return $this->successResponse($data, $message, 200);
    }
}
