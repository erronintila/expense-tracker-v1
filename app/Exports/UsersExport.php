<?php

namespace App\Exports;

use App\User;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $data = DB::table('users')
            ->select(DB::raw("
                users.id, 
                jobs.name,
                users.code, 
                users.first_name, 
                users.middle_name, 
                users.last_name,
                users.suffix,
                users.gender,
                users.birthdate,
                users.mobile_number,
                users.telephone_number,
                users.email,
                users.address,
                users.fund,
                users.remaining_fund,
                users.username
            "))
            ->join("jobs", "jobs.id", "=", "users.job_id")
            ->join("departments", "departments.id", "=", "jobs.department_id")
            ->where(DB::raw("users.deleted_at"), null)
            ->get();
        return $data;
    }

    public function headings(): array
    {
        return [
            'id',
            // "department",
            "job designation",
            "code",
            'first name',
            'middle name',
            'last name',
            "suffix",
            "gender",
            "birthdate",
            "mobile_number",
            "telephone_number",
            "email",
            "address",
            "fund",
            "remaining_fund",
            "username"
        ];
    }
}
