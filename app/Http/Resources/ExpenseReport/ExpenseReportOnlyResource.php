<?php

namespace App\Http\Resources\ExpenseReport;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseReportOnlyResource extends JsonResource
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
            "remarks" => $this->remarks,
            "notes" => $this->notes,
            "submission_period" => $this->submission_period,
            "approval_period" => $this->approval_period,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            'is_late_submitted' => $this->is_late_submitted,
            'is_late_approved' => $this->is_late_approved,
            // "report_summary" => $this->report_summary,
            // "from" => $this->expense_start_date,
            // "to" => $this->expense_end_date,
            // "status" => $this->status,
            // "total" => $this->total_expense_amount,
            // "total_reimbursable" => $this->total_reimbursable_amount,
            // "paid" => $this->total_expense_amount - $this->balance,
            // "balance" => $this->balance,
            // "total_received_payment" => $this->received_payment_amount,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "submitted_at" => $this->submitted_at,
            "reviewed_at" => $this->reviewed_at,
            "approved_at" => $this->approved_at,
            "rejected_at" => $this->rejected_at,
            "cancelled_at" => $this->cancelled_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,
            "submitted_by" => $this->submitted_by,
            "reviewed_by" => $this->reviewed_by,
            "approved_by" => $this->approved_by,
            "rejected_by" => $this->rejected_by,
            "cancelled_by" => $this->cancelled_by,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            // "payments" => PaymentOnlyResource::collection($this->whenLoaded('payments')),
        ];
    }
}
