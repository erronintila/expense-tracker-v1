<?php

namespace App\Http\Requests\Job;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class JobUpdateRequest extends FormRequest
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
            'name' => ['required', 'max:100', Rule::unique('jobs', 'name')->ignore($this->job)],
            'department_id' => ['required'],
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
            'department_id.required' => 'The department field is required.'
        ];
    }
}
