<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ExpenseReportUpdateRequest extends FormRequest
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
            'code' => ['nullable', Rule::unique('expense_reports', 'code')->ignore($this->expense_report), 'max:255'],
            'description' => ['required', 'max:255'],
            'user_id' => ['required'],
            'remarks' => ['nullable'],
            'notes' => ['nullable'],
            'expenses' => ['required']
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
            'expenses.required' => 'Expense Report has no expense(s)',
            'user_id.required' => 'Employee is required'
        ];
    }
}
