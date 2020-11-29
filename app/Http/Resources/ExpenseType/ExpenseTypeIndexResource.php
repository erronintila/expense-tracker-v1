<?php

namespace App\Http\Resources\ExpenseType;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseTypeIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
