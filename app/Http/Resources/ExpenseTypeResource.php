<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseTypeResource extends JsonResource
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
            "limit" => $this->limit,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            "vendors" => VendorResource::collection($this->whenLoaded('vendors')),
            "employees" => EmployeeResource::collection($this->whenLoaded('empployees')),
            "sub_types" => ExpenseTypeResource::collection($this->whenLoaded('sub_types')),
        ];

        return parent::toArray($request);

        // return [
        //     "id" => $this->id,
        //     "name" => $this->name,
        //     "limit" => $this->limit,
        //     "sub_types" => $this->sub_types,
        //     "has_expenses" => $this->has_expenses,
        //     "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        // ];
    }
}
