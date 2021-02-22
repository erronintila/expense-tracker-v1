<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = User::find(request("id"));

        return [
            'first_name' => ['required', 'string', 'max:150'],
            'middle_name' => ['nullable', 'max:150'],
            'last_name' => ['required', 'string', 'max:150'],
            'suffix' => ['nullable', 'max:30'],
            'gender' => ['required', 'max:10'],
            'birthdate' => ['required'],
            'mobile_number' => ['required', 'max:50'],
            'telephone_number' => ['nullable', 'max:50'],
            'address' => ['required'],
            'username'  => ['required', Rule::unique('users', 'username')->ignore($user), 'max:150'],
            'email'     => ['required', 'email', Rule::unique('users', 'email')->ignore($user), 'max:255'],
            'type' => [],
        ];
    }
}
