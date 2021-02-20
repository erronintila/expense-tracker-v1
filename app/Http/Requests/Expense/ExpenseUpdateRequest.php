<?php

namespace App\Http\Requests\Expense;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ExpenseUpdateRequest extends FormRequest
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
            'code' => ['nullable', Rule::unique('expenses', 'code')->ignore($this->expense), 'max:255'],
            'reference_no' => ['nullable'],
            'description' => ['nullable', 'max:255'],
            'amount' => ['required', 'numeric'],
            'reimbursable_amount' => ['required', 'numeric', 'min:0', 'lte:amount'],
            'tax_name' => ['nullable', 'max:100'],
            'tax_rate' => ['required'],
            'is_compound_tax' => ['nullable'],
            'is_tax_inclusive' => ['required'],
            'tax_amount' => ['required'],
            'receipt_number' => ['nullable', 'max:255'],
            'date' => ['required'],
            'details' => ['nullable'],
            'remarks' => ['nullable'],
            'notes' => ['nullable'],
            'encoding_period' => ['nullable'],
            'sub_type_id' => ['nullable'],
            'expense_type_id' => ['required'],
            'user_id' => ['required'],
            'vendor_id' => ['nullable'],
            'expense_report_id' => ['nullable'],
            'tax_id' => ['nullable'],
            'expense_header_id' => ['nullable']
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
            // 'tin.required_if' => 'The tax identification number field is required if VAT inclusive.'
        ];
    }
}
