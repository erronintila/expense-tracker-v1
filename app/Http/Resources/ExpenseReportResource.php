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
            'expenses' => ExpenseResource::collection($this->expenses),
            'status' => $this->status(),
            'submitted_at' => Carbon::parse($this->submitted_at)->toDateTimeString(),
            'reviewed_at' => Carbon::parse($this->reviewed_at)->toDateTimeString(),
            'approved_at' => Carbon::parse($this->approved_at)->toDateTimeString(),
            'cancelled_at' => Carbon::parse($this->cancelled_at)->toDateTimeString(),
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            'deleted_at' => Carbon::parse($this->deleted_at)->toDateTimeString(),
            'total' => $this->expenses()->withTrashed()->get()->sum('amount'),
        ];
    }
}
