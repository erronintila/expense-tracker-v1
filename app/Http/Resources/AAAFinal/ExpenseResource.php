<?php

namespace App\Http\Resources;

use App\Http\Resources\UserResource;
use function GuzzleHttp\json_decode;
use App\Http\Resources\VendorResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\ExpenseReportResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            "is_late_encoded" => $this->getIsLateEncodedAttribute(),

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "expense_type" => new ExpenseTypeResource($this->whenLoaded('expense_type')),
            "sub_type" => new ExpenseTypeResource($this->whenLoaded('sub_type')),
            "vendor" => new VendorResource($this->whenLoaded('vendor')),
            "user" => new UserResource($this->whenLoaded('user')),
            "expense_report" => new ExpenseReportResource($this->whenLoaded('expense_report')),
            // "tax" => $this->tax,
        ];
    }
}
