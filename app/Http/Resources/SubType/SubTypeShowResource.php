<?php

namespace App\Http\Resources\SubType;

use Illuminate\Http\Resources\Json\JsonResource;

class SubTypeShowResource extends JsonResource
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
            // "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            // "vendors" => VendorResource::collection($this->whenLoaded('vendors')),
            // "users" => UserResource::collection($this->whenLoaded('empployees')),
            // "sub_types" => ExpenseTypeResource::collection($this->whenLoaded('sub_types')),
        ];
    }
}
