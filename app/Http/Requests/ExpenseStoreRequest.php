<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseStoreRequest extends FormRequest
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
        $remaining_fund = request("");

        return [
            'code' => ['nullable', 'unique:expenses', 'max:255'],
            'reference_no' => ['nullable'],
            'description' => ['nullable', 'max:255'],
            'amount' => ['required', 'numeric', 'gt:0'],
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
            'expense_type_id' => ['required'],
            'sub_type_id' => ['nullable'],
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
            'user_id.required' => 'The employee field is required.',
            'expense_type_id.required' => 'The expense type field is required.',
            // 'reimbursable_amount.gte' => 'Reimbursable amount must be greater than or equal 0',
            'reimbursable_amount.lte' => 'Reimbursable amount must be less than or equal to amount'
        ];
    }
}
