<?php

namespace App\Http\Resources;

use App\Models\Employee;
use Carbon\Carbon;
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
            "name" => $this->name,
            "username" => $this->username,
            "email" => $this->email,
            "email_verified_at" => $this->email_verified_at,
            "is_admin" => $this->is_admin,
            "can_login" => $this->can_login,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "employee" => new EmployeeResource($this->whenLoaded('employee')),
            "role" => $this->is_admin ? ["Administrator"] : $this->getRoleNames(),
            "permissions" => $this->getAllPermissions(),
        ];

        return parent::toArray($request);
        
        // $employee = $this->employee()->withTrashed()->first();
        // $employee = Employee::withTrashed()->where("id", $employee->id ?? 0)->with("job.department")->first();

        // return [
        //     "id" => $this->id,
        //     "name" => $this->name,
        //     "username" => $this->username,
        //     "email" => $this->email,
        //     "is_admin" => $this->is_admin,
        //     "can_login" => $this->can_login,
        //     "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        //     // "employee" => new EmployeeResource($this->employee),
        //     "employee" => $employee,
        //     "role" => $this->is_admin ? ["Administrator"] : $this->getRoleNames(),
        //     "permissions" => $this->getAllPermissions()->pluck("name"),
        // ];
    }
}
