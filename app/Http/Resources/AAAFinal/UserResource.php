<?php

namespace App\Http\Resources;

use App\Http\Resources\ExpenseResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\Job\JobIndexResource;
use App\Http\Resources\ExpenseReportResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "address" => $this->address,
            "fund" => $this->fund,
            "remaining_fund" => $this->remaining_fund,

            "username" => $this->username,
            "email" => $this->email,
            "email_verified_at" => $this->email_verified_at,
            "is_admin" => $this->is_admin,
            "is_superadmin" => $this->is_superadmin,
            "can_login" => $this->can_login,
            "is_active" => $this->is_active,

            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "name" => $this->name,
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
            "job" => new JobIndexResource($this->whenLoaded("job")),
            "role" => $this->is_admin ? ["Administrator"] : ["Standard User"],
            "permissions" => $this->getAllPermissions(),
            "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            "expense_reports" => ExpenseReportResource::collection($this->whenLoaded('expense_reports')),
            "expense_types" => ExpenseTypeResource::collection($this->whenLoaded('expense_types')),
            "sub_types" => ExpenseTypeResource::collection($this->whenLoaded('sub_types')),
        ];
    }
}
