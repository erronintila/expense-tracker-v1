<?php

namespace App\Http\Resources\Expense;

use App\Http\Resources\User\UserOnlyResource;
use App\Http\Resources\ExpenseReport\ExpenseReportOnlyResource;
use App\Http\Resources\ExpenseType\ExpenseTypeOnlyResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\UserIndexResource;
use App\Http\Resources\Vendor\VendorOnlyResource;
use App\Http\Resources\VendorResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // $expense_report = null;

        // if($this->expense_report) {
        //     $expense_report = [
        //         "id" => $this->expense_report->id,
        //         "code" => $this->expense_report->code,
        //         "reference_no" => $this->expense_report->reference_no,
        //         "description" => $this->expense_report->description,
        //         "submission_period" => $this->expense_report->submission_period,
        //         "approval_period" => $this->expense_report->approval_period,
        //         "created_at" => $this->expense_report->created_at,
        //         "updated_at" => $this->expense_report->updated_at,
        //         "deleted_at" => $this->expense_report->deleted_at,
        //         "submitted_at" => $this->expense_report->submitted_at,
        //         "reviewed_at" => $this->expense_report->reviewed_at,
        //         "approved_at" => $this->expense_report->approved_at,
        //         "rejected_at" => $this->expense_report->rejected_at,
        //         "cancelled_at" => $this->expense_report->cancelled_at,
        //     ];
        // }

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
            // "status" => [
            //     'color' => 'red',
            //     'remarks' => 'Status is unindentified',
            //     'status' => 'Error',
            // ],

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
            // "sub_type" => new SubTypeShowResource($this->whenLoaded('sub_type')),
            "vendor" => new VendorResource($this->whenLoaded('vendor')),
            "user" => new UserIndexResource($this->whenLoaded('user')),
            "expense_report" => new ExpenseReportOnlyResource($this->whenLoaded('expense_report')),
            // "expense_report" => $this->whenLoaded('expense_report'),
            // "expense_report" => new ExpenseReportShowResource($this->whenLoaded('expense_report')),
            // "tax" => $this->tax,
        ];
    }
}
