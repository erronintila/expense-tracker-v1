<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Activitylog\Models\Activity;

class ExpenseReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $activities = Activity::where("subject_type", "App\Models\ExpenseReport")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
        $logs = [];
        
        foreach ($activities as $activity) {
            $temp = [
                "causer" => User::find($activity["causer_id"]),
                "created_at" => $activity["created_at"],
                "description" => $activity["description"],
            ];

            array_push($logs, $temp);
        }

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
            "from" => $this->expense_start_date,
            "to" => $this->expense_end_date,
            "status" => $this->status,
            'is_late_submitted' => $this->is_late_submitted,
            'is_late_approved' => $this->is_late_approved,
            "total" => $this->total_expense_amount,
            "total_reimbursable" => $this->total_reimbursable_amount,
            "paid" => $this->total_expense_amount - $this->balance,
            "balance" => $this->balance,
            "total_received_payment" => $this->received_payment_amount,
            "logs" => $logs,

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
            // "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            "payments" => PaymentIndexResource::collection($this->whenLoaded('payments')),
            "user" => new UserIndexResource($this->whenLoaded('user'))
        ];
    }
}
