<?php

namespace App\Http\Resources;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
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
            // "sub_types" => $this->sub_types,
            // "payments" => $this->payments,
        ];


        return parent::toArray($request);

        // $user = User::withTrashed()->findOrFail($this->user_id);

        // return [
        //     "id" => $this->id,
        //     "code" => $this->code,
        //     "first_name" => $this->first_name,
        //     "middle_name" => $this->middle_name,
        //     "last_name" => $this->last_name,
        //     "suffix" => $this->suffix,
        //     "gender" => $this->gender,
        //     "birthdate" => $this->birthdate,
        //     "mobile_number" => $this->mobile_number,
        //     "telephone_number" => $this->telephone_number,
        //     "email" => $this->email,
        //     "address" => $this->address,
        //     "fund" => $this->fund,
        //     "remaining_fund" => $this->remaining_fund,
        //     "job" => $this->job,
        //     "department" => $this->job->department,
        //     "fullname" => $this->getFullNameAttribute(),
        //     "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        //     "user" => $this->user,
        //     "role" => $this->user->is_admin ? ["Administrator"] : $this->user->getRoleNames(),
        //     "permissions" => $this->user->getAllPermissions(),




        //     // "expense_types" => ExpenseTypeResource::collection($this->expense_types),
        //     // "expense_types" => $this->expense_types()->withTrashed()->with("sub_types")->get(),
        //     "expense_types" => $this->expense_types,

        //     // "pivot_expense_types" => $this->expense_types()->withTrashed()->with("sub_types")->get(),
        //     "pivot_expense_types" => $this->expense_types,
        //     // "pivot_sub_types" => $this->sub_types()->withTrashed()->get(),
        //     "pivot_sub_types" => $this->sub_types,
        //     // "expense_types" => null,

        //     // "pivot_expense_types" => null,
        //     // "pivot_sub_types" => null,
        // ];
    }
}
