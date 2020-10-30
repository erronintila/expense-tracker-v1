<?php

namespace App\Http\Resources;

use App\Models\Expense;
use App\User;
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
            'from' => date('Y-m-d', min(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray()))),
            'to' => date('Y-m-d', max(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray()))),
            // 'employee' => new EmployeeResource($this->employee),
            // 'payment' => new PaymentResource($this->payment),
            'employee' => $this->employee,
            'payment' => $this->payment,
            'expenses' => ExpenseResource::collection($this->expenses()->withTrashed()->get()),
            'status' => $this->status(),
            'submitted_at' => $this->submitted_at,
            'submitted_by' => User::withTrashed()->find($this->submitted_by ?? 0),
            'reviewed_at' => $this->reviewed_at,
            'reviewed_by' => User::withTrashed()->find($this->reviewed_by ?? 0),
            'approved_at' => $this->approved_at,
            'approved_by' => User::withTrashed()->find($this->approved_by ?? 0),
            'disapproved_at' => $this->disapproved_at,
            'disapproved_by' => User::withTrashed()->find($this->disapproved_by ?? 0),
            'deleted_at' => $this->deleted_at,
            'deleted_by' => User::withTrashed()->find($this->deleted_by ?? 0),
            'cancelled_at' => $this->cancelled_at,
            'cancelled_by' => User::withTrashed()->find($this->cancelled_by ?? 0),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'total' => $this->expenses()->withTrashed()->get()->sum('amount'),
            'total_reimbursable' => $this->expenses()->withTrashed()->get()->sum('reimbursable_amount'),
            'payment_id' => $this->payment_id,
        ];
    }
}
