<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'description' => $this->description,
            'receipt_number' => $this->receipt_number,
            'date' => $this->date,
            'amount' => $this->amount,
            'remarks' => $this->remarks,
            'expense_type' => $this->expense_type,
            'employee' => new EmployeeResource($this->employee),
            'vendor' => $this->vendor,
            'employee_name' => $this->employee->first_name . " " . $this->employee->last_name,
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            'expense_details' => $this->expense_details
        ];
    }
}
