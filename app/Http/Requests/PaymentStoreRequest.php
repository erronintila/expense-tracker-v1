<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentStoreRequest extends FormRequest
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
            "code" => ['nullable', 'string', 'unique:payments', 'max:255'],
            "reference_no" => ['nullable', 'max:255'],
            "voucher_no" => ['nullable', 'max:255'],
            "description" => ['required', 'string', 'max:255'],
            "date" => ['required'],
            "cheque_no" => ['nullable', 'max:255'],
            "cheque_date" => ['nullable'],
            "amount" => ['required'],
            "payee" => ['nullable', 'string', 'max:255'],
            "payee_address" => ['nullable', 'max:255'],
            "payee_phone" => ['nullable', 'max:255'],
            "remarks"  => ['nullable'],
            "notes" => ['nullable'],
            "user" => ['required'],
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
