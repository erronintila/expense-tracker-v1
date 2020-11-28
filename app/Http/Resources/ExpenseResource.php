<?php

namespace App\Http\Resources;

use App\Models\ExpenseReport;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Activitylog\Models\Activity;

use function GuzzleHttp\json_decode;

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
            "employee" => new EmployeeResource($this->whenLoaded('employee')),
            "expense_report" => new ExpenseReportResource($this->whenLoaded('expense_report')),
            // "tax" => $this->tax,
        ];

        return parent::toArray($request);

        // $activities = Activity::where("subject_type", "App\Models\Expense")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
        // $logs = [];
        
        // foreach ($activities as $activity) {
        //     $temp = [
        //         "causer" => User::find($activity["causer_id"]),
        //         "created_at" => $activity["created_at"],
        //         "description" => $activity["description"],
        //     ];

        //     array_push($logs, $temp);
        // }

        // return [
        //     "id" => $this->id,
        //     "code" => $this->code,
        //     "reference_no" => $this->reference_no,
        //     "description" => $this->description,
        //     "amount" => $this->amount,
        //     "reimbursable_amount" => $this->reimbursable_amount,
        //     "receipt_number" => $this->receipt_number,
        //     "date" => $this->date,
        //     "remarks" => $this->remarks,
        //     "notes" => $this->notes,
        //     "encoding_period" => $this->encoding_period,
            
        //     // "expense_type_id" => $this->expense_type_id,
        //     // "sub_type_id" => $this->sub_type_id,
        //     // "employee_name" => $this->employee->name(),
        //     // "expense_report_id" => $this->expense_report_id,
            
        //     "details" => $this->details == null ? null : json_decode($this->details),
        //     "status" => $this->status,

        //     "is_tax_inclusive" => $this->is_tax_inclusive,
        //     "tax_name" => $this->tax_name,
        //     "tax_rate" => $this->tax_rate,
        //     "tax_amount" => $this->tax_amount,

        //     "sub_type" => $this->sub_type,
        //     // "sub_type" => [
        //     //     "id" => null,
        //     //     "name" => "",
        //     //     "limit" => null,
        //     //     "sub_types" => null
        //     // ],
        //     "vendor" => $this->vendor,
        //     // "vendor" => [ "id" => null, "name" => "", "is_vat_inclusive" => true ],
        //     // "employee" => new EmployeeResource($this->employee),
        //     "employee" => $this->employee,
        //     // "expense_type" => new ExpenseTypeResource($this->expense_type),
        //     "expense_type" => $this->expense_type,
        //     // "expense_type" => [
        //     //     "id" => null,
        //     //     "name" => "",
        //     //     "limit" => null,
        //     //     "sub_types" => null
        //     // ],
        //     "expense_report" => $this->expense_report,
        //     // "expense_report" => null,

        //     "created" => $this->created_info,
        //     "updated" => $this->updated_info,
        //     "deleted" => $this->deleted_info,
        //     "submitted" => $this->submitted_info,
        //     "reviewed" => $this->reviewed_info,
        //     "approved" => $this->approved_info,
        //     "rejected" => $this->rejected_info,
        //     "cancelled" => $this->cancelled_info,
        //     // "created" => [ "created_at" => null, "created_by" => [ "name" => "" ]],
        //     // "updated" => [ "updated_at" => null, "updated_by" => [ "name" => "" ]],
        //     // "deleted" => null,
        //     // "submitted" => [ "submitted_at" => null, "submitted_by" => [ "name" => "" ]],
        //     // "reviewed" => [ "reviewed_at" => null, "reviewed_by" => [ "name" => "" ]],
        //     // "approved" => [ "approved_at" => null, "approved_by" => [ "name" => "" ]],
        //     // "rejected" => null,
        //     // "cancelled" => null,
            
        //     "logs" => $logs
        // ];
    }
}
