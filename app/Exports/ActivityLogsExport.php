<?php

namespace App\Exports;

use App\Http\Resources\ActivityLogResource;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Spatie\Activitylog\Models\Activity;

class ActivityLogsExport implements FromCollection, WithHeadings
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
        $data = DB::table('activity_log')->orderBy("created_at", "desc")
            ->whereBetween("created_at", [$this->start_date, $this->end_date])
            ->get();
        return $data;
    }

    public function headings(): array
    {
        return [
            "id",
            "log name",
            "description",
            "subject type",
            "subject id",
            "causer type",
            "causer id",
            "properties",
            "created at",
            "updated at"
        ];
    }
}
