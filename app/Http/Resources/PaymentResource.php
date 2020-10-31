<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            "code" => $this->code,
            "reference_no" => $this->reference_no,
            "voucher_no" => $this->voucher_no,
            "description" => $this->description,
            "date" => $this->date,
            "cheque_no" => $this->cheque_no,
            "cheque_date" => $this->cheque_date,
            "amount" => $this->amount,
            "payee" => $this->payee,
            "payee_address" => $this->payee_address,
            "payee_phone" => $this->payee_phone,
            "remarks"  => $this->remarks,
            "notes" => $this->notes,
            "expense_reports" => ExpenseReportResource::collection($this->expense_reports()->withTrashed()->get()),
            'employee' => $this->employee,
            // 'approved_at' => Carbon::parse($this->approved_at)->toDateTimeString(),
            // 'cancelled_at' => Carbon::parse($this->cancelled_at)->toDateTimeString(),
            // 'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            // 'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            // 'deleted_at' => Carbon::parse($this->deleted_at)->toDateTimeString(),
            'approved_at' => $this->approved_at,
            'cancelled_at' => $this->cancelled_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'status' => $this->status(),
        ];
    }
}
