<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdvancePaymentResource extends JsonResource
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
            "cal_no" => $this->cal_no,
            "date" => $this->date,
            "description" => $this->description,
            "amount" => $this->amount,
            "remaining_amount" => $this->remaining_amount,
            "remarks" => $this->remarks,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "status" => $this->status,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "approved_at" => $this->approved_at,
            "cancelled_at" => $this->cancelled_at,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            // "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            // "payments" => PaymentIndexResource::collection($this->whenLoaded('payments')),
            // "user" => new UserIndexResource($this->whenLoaded('user'))
            
            "user" => $this->whenLoaded('user')
        ];
    }
}
