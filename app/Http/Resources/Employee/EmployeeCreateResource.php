<?php

namespace App\Http\Resources\Employee;

use App\Http\Resources\ExpenseReportResource;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\JobResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeCreateResource extends JsonResource
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
            "first_name" => $this->first_name,
            "middle_name" => $this->middle_name,
            "last_name" => $this->last_name,
            "suffix" => $this->suffix,
            "gender" => $this->gender,
            "birthdate" => $this->birthdate,
            "mobile_number" => $this->mobile_number,
            "telephone_number" => $this->telephone_number,
            "email" => $this->email,
            "address" => $this->address,
            "fund" => $this->fund,
            "remaining_fund" => $this->remaining_fund,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "full_name" => $this->full_name,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "user" => new UserResource($this->whenLoaded("user")),
            "job" => new JobResource($this->whenLoaded("job")),
            "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            // "adjustments" => $this->adjustments,
            "expense_reports" => ExpenseReportResource::collection($this->whenLoaded('expense_reports')),
            "expense_types" => ExpenseTypeResource::collection($this->whenLoaded('expense_types')),
            "sub_types" => ExpenseTypeResource::collection($this->whenLoaded('sub_types')),
            // "payments" => $this->payments,
        ];
    }
}
