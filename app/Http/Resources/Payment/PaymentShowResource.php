<?php

namespace App\Http\Resources\Payment;

use App\Http\Resources\User\UserOnlyResource;
use App\Http\Resources\ExpenseReport\ExpenseReportOnlyResource;
use App\Http\Resources\UserIndexResource;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Activitylog\Models\Activity;

class PaymentShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $activities = Activity::where("subject_type", "App\Models\Payment")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
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
            "voucher_no" => $this->voucher_no,
            "date" => $this->date,
            "description" => $this->description,
            "cheque_no" => $this->cheque_no,
            "cheque_date" => $this->cheque_date,
            "amount" => $this->getTotalAmountAttribute(),
            // "amount" => $this->amount,
            "payee" => $this->payee,
            "payee_address" => $this->payee_address,
            "payee_phone" => $this->payee_phone,
            "remarks"  => $this->remarks,
            "notes" => $this->notes,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "status" => $this->status,
            "logs" => $logs,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "approved_at" => $this->approved_at,
            "released_at" => $this->released_at,
            "received_at" => $this->received_at,
            "cancelled_at" => $this->cancelled_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,
            "approved_by" => $this->approved_by,
            "released_by" => $this->released_by,
            "received_by" => $this->received_by,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "expense_reports" => ExpenseReportOnlyResource::collection($this->whenLoaded('expense_reports')),
            "user" => new UserIndexResource($this->whenLoaded('user'))
        ];
    }
}
