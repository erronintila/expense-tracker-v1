<?php

namespace App\Exports;

use App\Models\ExpenseReport;
use App\ModelsExpenseReport;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ExpenseReportsExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ExpenseReport::all();
    }

    public function headings(): array
    {
        return [];
    }
}
