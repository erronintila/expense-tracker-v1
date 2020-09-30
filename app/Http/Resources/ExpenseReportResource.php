<?php

namespace App\Http\Resources;

use App\Models\Expense;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'code' => $this->code,
            'description' => $this->description,
            'remarks' => $this->remarks,
            'notes' => $this->notes,
            // 'employee' => new EmployeeResource($this->employee),
            // 'payment' => new PaymentResource($this->payment),
            'employee' => $this->employee,
            'payment' => $this->payment,
            'expenses' => ExpenseResource::collection($this->expenses()->withTrashed()->get()),
            'status' => $this->status(),
            // 'submitted_at' => Carbon::parse($this->submitted_at)->toDateTimeString(),
            // 'reviewed_at' => Carbon::parse($this->reviewed_at)->toDateTimeString(),
            // 'approved_at' => Carbon::parse($this->approved_at)->toDateTimeString(),
            // 'cancelled_at' => Carbon::parse($this->cancelled_at)->toDateTimeString(),
            // 'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'submitted_at' => $this->submitted_at,
            'reviewed_at' => $this->reviewed_at,
            'approved_at' => $this->approved_at,
            'cancelled_at' => $this->cancelled_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'total' => $this->expenses()->withTrashed()->get()->sum('amount'),
            'total_reimbursable' => $this->expenses()->withTrashed()->get()->sum('reimbursable_amount'),
            'payment_id' => $this->payment_id,
        ];
    }
}
