<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentResource;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id)
    {
        return Validator::make($data, [
            "code" => ['required', 'string', 'max:255'],
            "reference_no" => ['nullable', 'max:255'],
            "voucher_no" => ['nullable', 'max:255'],
            "description" => ['required', 'string', 'max:255'],
            "date" => ['required'],
            "cheque_no" => ['nullable', 'max:255'],
            "cheque_date" => ['nullable'],
            "amount" => ['required', 'number'],
            "payee" => ['required', 'string', 'max:255'],
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
        $payment = Payment::latest()->get();
        $count = count($payment);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $payment = Payment::onlyTrashed()->latest()->limit($request->limit ?? $count)->get();
                    break;
                default:
                    $payment = Payment::latest()->limit($request->limit ?? $count)->get();
                    break;
            }
        }

        return response(
            [
                'data' => PaymentResource::collection($payment),
                'message' => 'Payments retrieved successfully'
            ],
            200
        );
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
        $payment = Payment::findOrFail($id);

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
        switch ($request->action) {
            case 'restore':
                $payment = Payment::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

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

                break;
        }

        return response(
            [
                'data' => new PaymentResource($payment),
                'message' => 'Updated successfully'
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
        $payment = Payment::whereIn('id', $request->ids)->delete();

        return response(
            [
                'data' => new PaymentResource($payment),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
