<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PaymentUpdateRequest extends FormRequest
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
            "code" => ['nullable', 'string', Rule::unique('payments', 'code')->ignore($this->payment), 'max:255'],
            "reference_no" => ['nullable', 'max:255'],
            "voucher_no" => ['required', Rule::unique("payments")->whereNull("deleted_at")->ignore($this->payment), 'max:255'],
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
            "user_id" => ['required'],
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
        ];
    }
}
