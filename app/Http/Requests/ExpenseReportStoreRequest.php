<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseReportStoreRequest extends FormRequest
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
            'code' => ['nullable', 'unique:expense_reports', 'max:255'],

            'description' => ['required', 'max:255'],

            'user_id' => ['required'],

            'remarks' => ['nullable'],

            'notes' => ['nullable'],
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
