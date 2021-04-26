<?php

namespace App\Exports;

use App\Models\ExpenseReport;
use App\ModelsExpenseReport;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ExpenseReportsExport implements FromCollection, WithHeadings
{
    protected $start_date;
    protected $end_date;

    public function __construct($start_date, $end_date)
    {
        $this->start_date = $start_date;
        $this->end_date = $end_date;
    }
    
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
