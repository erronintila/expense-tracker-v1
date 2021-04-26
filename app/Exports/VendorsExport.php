<?php

namespace App\Exports;

use App\Models\Vendor;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class VendorsExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Vendor::select("id", "code", "name", "email", "tin", "contact_person", "mobile_number", "telephone_number", "website", "address", "is_vat_inclusive")
            ->where("deleted_at", null)
            ->get();
    }

    public function headings(): array
    {
        return [
            "id",
            "code",
            "name", 
            "email",
            "tin",
            "contact person",
            "mobile number",
            "telephone number",
            "website",
            "address",
            "VAT Inclusive"
        ];
    }
}
