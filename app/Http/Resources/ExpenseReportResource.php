<?php

namespace App\Http\Resources;

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
            'employee' => $this->employee,
            'payment' => $this->payment,
            'expenses' => $this->expenses,
            'status' => $this->status(),
            'submitted_at' => Carbon::parse($this->submitted_at)->format('Y-m-d H:m:s'),
            'reviewed_at' => Carbon::parse($this->reviewed_at)->format('Y-m-d H:m:s'),
            'approved_at' => Carbon::parse($this->approved_at)->format('Y-m-d H:m:s'),
            'cancelled_at' => Carbon::parse($this->cancelled_at)->format('Y-m-d H:m:s'),
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('Y-m-d H:m:s'),
            'deleted_at' => Carbon::parse($this->deleted_at)->format('Y-m-d H:m:s'),
            'created' => $this->created_at->diffForHumans(),
            'total' => $this->expenses->sum('amount')
        ];
    }
}
