<?php

namespace App\Http\Resources\Expense;

use App\Http\Resources\User\UserShowResource;
use App\Http\Resources\ExpenseReport\ExpenseReportOnlyResource;
use App\Http\Resources\ExpenseType\ExpenseTypeShowResource;
use App\Http\Resources\SubType\SubTypeShowResource;
use App\Http\Resources\Vendor\VendorOnlyResource;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Activitylog\Models\Activity;

class ExpenseShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $activities = Activity::where("subject_type", "App\Models\Expense")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
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
            "logs" => $logs,

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
            "expense_type" => new ExpenseTypeShowResource($this->whenLoaded('expense_type')),
            "sub_type" => new SubTypeShowResource($this->whenLoaded('sub_type')),
            "vendor" => new VendorOnlyResource($this->whenLoaded('vendor')),
            "user" => new UserShowResource($this->whenLoaded('user')),
            "expense_report" => new ExpenseReportOnlyResource($this->whenLoaded('expense_report')),
            // "tax" => $this->tax,
        ];
    }
}
