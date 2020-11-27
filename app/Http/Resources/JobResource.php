<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
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

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "department" => new DepartmentResource($this->whenLoaded('department')),
            "employees" => EmployeeResource::collection($this->whenLoaded('employees')),
        ];

        return parent::toArray($request);

        // return [
        //     "id" => $this->id,
        //     "name" => $this->name,
        //     "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        //     "department" => $this->department,
        // ];
    }
}
