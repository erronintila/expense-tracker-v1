<?php

namespace App\Http\Requests\ExpenseType;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ExpenseTypeUpdateRequest extends FormRequest
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
            'code' => ['nullable', 'max:255', Rule::unique('expense_types', 'code')->ignore($this->expense_type)],
            'name' => ['required', 'max:100', Rule::unique('expense_types', 'name')->ignore($this->expense_type)],
            'limit' => ['nullable']
        ];
    }
}
