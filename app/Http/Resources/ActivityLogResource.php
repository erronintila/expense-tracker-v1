<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class ActivityLogResource extends JsonResource
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
            "log_name" => $this->log_name,
            "description" => $this->description,
            "subject_type" => $this->subject_type,
            "subject_id" => $this->subject_id,
            "causer_type" => $this->causer_type,
            "causer_id" => $this->causer_id,
            "properties" => $this->properties,
            // -------------------------------------------------------------------
            // Additional Fields
            // -------------------------------------------------------------------
            "user" => User::find($this->causer_id ?? 0),

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];

        return parent::toArray($request);

        // return [
        //     "id" => $this->id,
        //     "log_name" => $this->log_name,
        //     "description" => $this->description,
        //     "subject_type" => $this->subject_type,
        //     "subject_id" => $this->subject_id,
        //     "causer_type" => $this->causer_type,
        //     "causer_id" => $this->causer_id,
        //     "properties" => $this->properties,
        //     // "user" => new UserResource(User::find($this->causer_id ?? 0)),
        //     "user" => User::find($this->causer_id ?? 0),
        //     "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        // ];
    }
}
