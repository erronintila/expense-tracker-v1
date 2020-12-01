<?php

namespace App\Http\Resources\Vendor;

use Illuminate\Http\Resources\Json\JsonResource;

class VendorIndexResource extends JsonResource
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
            "email" => $this->email,
            "tin" => $this->tin,
            "contact_person" => $this->contact_person,
            "mobile_number" => $this->mobile_number,
            "telephone_number" => $this->telephone_number,
            "website" => $this->website,
            "remarks" => $this->remarks,
            "is_vat_inclusive" => $this->is_vat_inclusive,
            "address" => $this->address,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
        ];
    }
}
