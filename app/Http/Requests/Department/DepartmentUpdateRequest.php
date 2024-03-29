<?php

namespace App\Http\Requests\Department;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class DepartmentUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'max:255', Rule::unique('departments', 'code')->ignore($this->department)],
            'name' => ['required', 'max:100', Rule::unique('departments', 'name')->ignore($this->department)],
        ];
    }
}
