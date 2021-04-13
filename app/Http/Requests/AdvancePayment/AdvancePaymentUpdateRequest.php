<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AdvancePaymentUpdateRequest extends FormRequest
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
            'code' => ['nullable', Rule::unique('advance_payments', 'code')->ignore($this->advance_payment), 'max:255'],
            'cal_no' => ['required', Rule::unique('advance_payments', 'cal_no')->ignore($this->advance_payment), 'max:255'],
            'date' => ['required'],
            'description' => ['required', 'max:255'],
            'amount' => ['required', 'numeric', 'gt:0'],
            'remarks' => ['nullable'],
            'user_id' => ['required'],
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
