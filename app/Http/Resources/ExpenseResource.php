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
        // return parent::toArray($request);

        $activities = Activity::where("subject_type", "App\Models\Expense")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
        $logs = [];
        
        foreach ($activities as $activity) {
            $temp = [
                "causer" => User::find($activity['causer_id']),
                "created_at" => $activity['created_at'],
                "description" => $activity['description'],
            ];

            array_push($logs, $temp);
        }

        return [
            'id' => $this->id,
            'code' => $this->code,
            'reference_no' => $this->reference_no,
            'description' => $this->description,
            'amount' => $this->amount,
            'reimbursable_amount' => $this->reimbursable_amount,
            'receipt_number' => $this->receipt_number,
            'date' => $this->date,
            'remarks' => $this->remarks,
            'notes' => $this->notes,
            'encoding_period' => $this->encoding_period,
            
            // 'expense_type_id' => $this->expense_type_id,
            // 'sub_type_id' => $this->sub_type_id,
            // 'employee_name' => $this->employee->name(),
            // 'expense_report_id' => $this->expense_report_id,
            
            'details' => $this->details == null ? null : json_decode($this->details),
            'status' => $this->status,

            'is_tax_inclusive' => $this->is_tax_inclusive,
            'tax_name' => $this->tax_name,
            'tax_rate' => $this->tax_rate,
            'tax_amount' => $this->tax_amount,

            'sub_type' => $this->sub_type()->withTrashed()->first(),
            'vendor' => $this->vendor()->withTrashed()->first(),
            // 'employee' => new EmployeeResource($this->employee),
            // 'expense_type' => new ExpenseTypeResource($this->expense_type),
            'employee' => $this->employee()->withTrashed()->with('expense_types.sub_types')->first(),
            'expense_type' => $this->expense_type()->withTrashed()->with('sub_types')->first(),
            'expense_report' => $this->expense_report()->withTrashed()->first(),

            'created' => $this->created_info,
            'updated' => $this->updated_info,
            'deleted' => $this->deleted_info,
            'submitted' => $this->submitted_info,
            'reviewed' => $this->reviewed_info,
            'approved' => $this->approved_info,
            'rejected' => $this->rejected_info,
            'cancelled' => $this->cancelled_info,

            'logs' => $logs
        ];
    }
}
