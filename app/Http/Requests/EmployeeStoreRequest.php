<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeStoreRequest extends FormRequest
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
            'code' => ['nullable', 'max:255', 'unique:employees'],

            'first_name' => ['required', 'string', 'max:150'],

            'middle_name' => ['nullable', 'max:150'],

            'last_name' => ['required', 'string', 'max:150'],

            'suffix' => ['nullable', 'max:30'],

            'gender' => ['required', 'max:10'],

            'birthdate' => ['nullable'],

            'mobile_number' => ['nullable', 'max:50'],

            'telephone_number' => ['nullable', 'max:50'],

            'email' => ['nullable', 'email', 'unique:employees'],

            'address' => ['required'],

            'job_id' => ['required'],

            'username' => ['required'],

            'role' => ['required'],

            'can_login' => ['required'],

            'fund' => ['required']
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
