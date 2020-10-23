<?php

namespace App\Http\Resources;

use App\Models\ExpenseReport;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
        return [
            'id' => $this->id,
            'code' => $this->code,
            'description' => $this->description,
            'receipt_number' => $this->receipt_number,
            'date' => $this->date,
            'amount' => $this->amount,
            // 'revolving_fund' => $this->revolving_fund,
            // 'reimbursable_amount' => $this->reimbursable_amount,
            'personal_amount' => $this->personal_amount,
            'remarks' => $this->remarks,
            'expense_type' => new ExpenseTypeResource($this->expense_type),
            'expense_type_id' => $this->expense_type_id,
            'sub_type' => $this->sub_type,
            'sub_type_id' => $this->sub_type_id,
            'employee' => new EmployeeResource($this->employee),
            'vendor' => $this->vendor,
            'employee_name' => $this->employee->first_name . " " . $this->employee->last_name,
            // 'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            // 'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            // 'deleted_at' => Carbon::parse($this->deleted_at)->toDateTimeString(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            // 'expense_details' => $this->expense_details,
            'expense_report_id' => $this->expense_report_id,
            'expense_report' => $this->expense_report,
            // 'expense_report' => $this->expense_report()->withTrashed()->get(),
            'details' => json_decode($this->details),
            'status' => $this->status(),
        ];
    }
}
