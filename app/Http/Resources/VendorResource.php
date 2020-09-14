<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class VendorResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'tin' => $this->tin,
            'contact_person' => $this->contact_person,
            'mobile_number' => $this->mobile_number,
            'telephone_number' => $this->telephone_number,
            'website' => $this->website,
            'remarks' => $this->remarks,
            'is_vat_inclusive' => $this->is_vat_inclusive,
            'address' => $this->address,
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d H:m:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('Y-m-d H:m:s'),
        ];
    }
}
