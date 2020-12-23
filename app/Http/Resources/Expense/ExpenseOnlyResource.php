<?php

namespace App\Http\Resources\Expense;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseOnlyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            // -------------------------------------------------------------------
            // Fields
            // -------------------------------------------------------------------
            "id" => $this->id,
            "code" => $this->code,
            "reference_no" => $this->reference_no,
            "description" => $this->description,
            "amount" => $this->amount,
            "reimbursable_amount" => $this->reimbursable_amount,

            "tax_name" => $this->tax_name,
            "tax_rate" => $this->tax_rate,
            "is_compound_tax" => $this->is_compound_tax,
            "is_tax_inclusive" => $this->is_tax_inclusive,
            "tax_amount" => $this->tax_amount,

            "receipt_number" => $this->receipt_number,
            "date" => $this->date,
            "details" => $this->details == null ? null : json_decode($this->details),
            "remarks" => $this->remarks,
            "notes" => $this->notes,
            "encoding_period" => $this->encoding_period,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "status" => $this->status,
            "is_late_encoded" => $this->is_late_encoded,
            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,
        ];
    }
}
