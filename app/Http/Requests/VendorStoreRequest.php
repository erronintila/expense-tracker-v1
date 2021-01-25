<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VendorStoreRequest extends FormRequest
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
            'code' => ['nullable', 'max:255', 'unique:vendors'],

            'name' => ['required', 'max:150'],

            'email' => ['nullable', 'email', 'max:150', 'unique:vendors'],

            'tin' => ['required_if:is_vat_inclusive,true', 'max:255', 'unique:vendors'],

            'contact_person' => ['nullable', 'max:150'],

            'mobile_number' => ['nullable', 'max:50'],

            'telephone_number' => ['nullable', 'max:50'],

            'website' => ['nullable', 'max:150'],

            'remarks' => ['nullable'],

            'is_vat_inclusive' => ['required'],

            'address' => ['required'],
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
            'tin.required_if' => 'The tax identification number field is required if VAT inclusive.'
        ];
    }
}
