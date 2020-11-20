<?php

namespace App\Http\Resources;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

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
        // return parent::toArray($request);
        $user = User::withTrashed()->findOrFail($this->user_id);

        return [
            'id' => $this->id,
            'code' => $this->code,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'suffix' => $this->suffix,
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'mobile_number' => $this->mobile_number,
            'telephone_number' => $this->telephone_number,
            'email' => $this->email,
            'address' => $this->address,
            'fund' => $this->fund,
            'remaining_fund' => $this->remaining_fund,
            'job' => $this->job,
            'department' => $this->job->department,
            'fullname' => $this->getFullNameAttribute(),
            'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateTimeString(),
            'user' => $user,
            'role' => $user->is_admin ? ["Administrator"] : $user->getRoleNames(),
            'permissions' => $user->getAllPermissions(),
            'expense_types' => ExpenseTypeResource::collection($this->expense_types),

            'pivot_expense_types' => $this->expense_types,
            'pivot_sub_types' => $this->sub_types,
        ];
    }
}
