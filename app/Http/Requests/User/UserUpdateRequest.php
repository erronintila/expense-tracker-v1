<?php

namespace App\Http\Requests\User;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
        return [
            'code' => ['required', Rule::unique('users', 'code')->ignore($this->user), 'max:255'],
            'first_name' => ['required', 'string', 'max:150'],
            'middle_name' => ['nullable', 'max:150'],
            'last_name' => ['required', 'string', 'max:150'],
            'suffix' => ['nullable', 'max:30'],
            'gender' => ['required', 'max:10'],
            'birthdate' => ['required'],
            'mobile_number' => ['required', 'max:50'],
            'telephone_number' => ['nullable', 'max:50'],
            'address' => ['required'],
            'username'  => ['required', Rule::unique('users', 'username')->ignore($this->user), 'max:150'],
            'email'     => ['required', 'email', Rule::unique('users', 'email')->ignore($this->user), 'max:255'],
            'type' => [],
            'job_id' => ['required_if:is_superadmin,0'],
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'job_id.required' => 'The job designation field is required.'
        ];
    }
}
