<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentResource;
use App\Models\ExpenseReport;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:view all payments'], ['only' => ['index']]);
        $this->middleware(['permission:view payments'], ['only' => ['show']]);
        $this->middleware(['permission:add payments'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit payments'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete payments'], ['only' => ['destroy']]);
    }

    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id)
    {
        return Validator::make($data, [
            "code" => ['nullable', 'string', 'max:255'],

            "reference_no" => ['nullable', 'max:255'],

            "voucher_no" => ['nullable', 'max:255'],

            "description" => ['required', 'string', 'max:255'],

            "date" => ['required'],

            "cheque_no" => ['nullable', 'max:255'],

            "cheque_date" => ['nullable'],

            "amount" => ['required'],

            "payee" => ['nullable', 'string', 'max:255'],

            "payee_address" => ['nullable', 'max:255'],

            "payee_phone" => ['nullable', 'max:255'],

            "remarks"  => ['nullable'],

            "notes" => ['nullable'],
        ]);
    }

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

        $payments = Payment::orderBy($sortBy, $sortType);

        if (request()->has('status')) {

            switch ($request->status) {

                case 'Cancelled Payments':

                    $payments = $payments->onlyTrashed();

                    break;
                case 'Completed Payments':

                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                    ]);

                    // $payments = $payments->where("approved_at", "<>", null)->where("released_at", "<>", null)->where("received_at", "<>", null);

                    break;
                case 'Received Payments':

                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "<>", null],
                    ]);

                    // $payments = $payments->where("approved_at", "<>", null)->where("released_at", "<>", null)->where("received_at", "<>", null);

                    break;
                case 'Released Payments':

                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "<>", null],
                        ["received_at", "=", null],
                    ]);

                    // $payments = $payments->where("approved_at", "<>", null)->where("released_at", "<>", null)->where("received_at", null);

                    break;
                case 'Approved Payments':

                    $payments = $payments->where([
                        ["approved_at", "<>", null],
                        ["cancelled_at", "=", null],
                        ["released_at", "=", null],
                        ["received_at", "=", null],
                    ]);

                    // $payments = $payments->where("approved_at", "<>", null)->where("released_at", null)->where("received_at", null);

                    break;
                default:

                    $payments = $payments;

                    break;
            }
        }

        if (request()->has("start_date") && request()->has("end_date")) {

            $payments = $payments->whereBetween("date", [$request->start_date, $request->end_date]);
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

        return PaymentResource::collection($payments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validator($request->all(), null)->validate();

        $payment = new Payment();

        $payment->code = generate_code(Payment::class, "PAY", 10);

        $payment->reference_no = $request->reference_no;

        $payment->voucher_no = $request->voucher_no;

        $payment->description = $request->description;

        $payment->date = $request->date;

        $payment->cheque_no = $request->cheque_no;

        $payment->cheque_date = $request->cheque_date;

        $payment->amount = $request->amount;

        $payment->payee = $request->payee;

        $payment->payee_address = $request->payee_address;

        $payment->payee_phone = $request->payee_phone;

        $payment->remarks = $request->remarks;

        $payment->notes = $request->notes;

        ////////// TEMPORARY
        $payment->approved_at = now();

        $payment->released_at = now();

        $payment->received_at = null;
        //////////

        $payment->save();

        foreach ($request->expense_reports as $expense_report) {

            $expense_report = ExpenseReport::findOrFail($expense_report["id"]);

            $expense_report->payment_id = $payment->id;

            $expense_report->save();

            // foreach ($expense_report->expenses as $expense) {

            //     $expense_amount = $expense->amount - $expense->reimbursable_amount;

            //     $expense->employee->remaining_fund += $expense_amount;

            //     $expense->employee->save();
            // }
        }

        // activity()
        //     ->withProperties([
        //         'attributes' => [
        //             ["text" => "Description", "value" => $payment->description],
        //             ["text" => "Date", "value" => $payment->date],
        //             ["text" => "Amount", "value" => $payment->amount],
        //         ],
        //         'link' => "/admin/payments/{$payment->id}",
        //         'details' => "{$payment->description} with amount of {$payment->amount}"
        //     ])
        //     ->log("Created Payment");

        return response(
            [
                'data' => new PaymentResource($payment),

                'message' => 'Created successfully'
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $payment = Payment::withTrashed()->findOrFail($id);

        return response(
            [
                'data' => new PaymentResource($payment),

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
        $message = "Updated successfully";

        switch ($request->action) {

            case 'approve':

                //unfininshed

                foreach ($request->ids as $id) {

                    $payment = Payment::withTrashed()->findOrFail($id);

                    $payment->approved_at = now();

                    $payment->save();
                }

                $message = "Payment(s) approved successfully";

                break;
            case 'release':

                //unfininshed

                foreach ($request->ids as $id) {

                    $payment = Payment::withTrashed()->findOrFail($id);

                    $payment->released_at = now();

                    $payment->save();
                }

                $message = "Payment(s) released successfully";

                break;
            case 'receive':

                foreach ($request->ids as $id) {

                    $payment = Payment::withTrashed()->findOrFail($id);

                    $payment->received_at = now();

                    $payment->disableLogging();

                    $payment->save();

                    activity()
                        ->performedOn($payment)
                        ->withProperties(['attributes' => ["code" => $payment->code, "received_at" => $payment->received_at]])
                        ->log('received payment');
                }

                $message = "Payment(s) received successfully";

                break;
            case 'complete':

                //unfininshed

                foreach ($request->ids as $id) {

                    $payment = Payment::withTrashed()->findOrFail($id);

                    $payment->approved_at = now();

                    $payment->released_at = now();

                    $payment->received_at = now();

                    $payment->save();
                }

                $message = "Payment(s) received successfully";

                break;
            default:

                $this->validator($request->all(), null)->validate();

                $payment = Payment::findOrFail($id);

                $payment->code = $request->code;

                $payment->reference_no = $request->reference_no;

                $payment->voucher_no = $request->voucher_no;

                $payment->description = $request->description;

                $payment->date = $request->date;

                $payment->cheque_no = $request->cheque_no;

                $payment->cheque_date = $request->cheque_date;

                $payment->amount = $request->amount;

                $payment->payee = $request->payee;

                $payment->payee_address = $request->payee_address;

                $payment->payee_phone = $request->payee_phone;

                $payment->remarks = $request->remarks;

                $payment->notes = $request->notes;

                $payment->save();

                // set existing references to null
                foreach ($payment->expense_reports as $key => $value) {

                    $expense_report = ExpenseReport::findOrFail($value["id"]);

                    $expense_report->payment_id = null;

                    $expense_report->save();
                }

                foreach ($request->expense_reports as $key => $value) {

                    $expense_report = ExpenseReport::findOrFail($value["id"]);

                    $expense_report->payment_id = $payment->id;

                    $expense_report->save();
                }

                break;
        }

        return response(
            [
                'message' => $message
            ],
            201
        );
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

            foreach ($request->ids as $id) {

                $payment = Payment::findOrFail($id);

                $payment->delete();

                foreach ($payment->expense_reports as $expense_report) {

                    $expense_report->payment_id = null;

                    $expense_report->save();
                }
            }
        } else {

            $payment = Payment::findOrFail($id);

            $payment->delete();

            foreach ($payment->expense_reports as $expense_report) {

                $expense_report->payment_id = null;

                $expense_report->save();
            }
        }

        return response(
            [
                'message' => 'Payment Cancelled successfully'
            ],
            200
        );
    }
}
