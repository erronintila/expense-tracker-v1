<?php

namespace App\Exports;

use App\Models\Employee;
use App\User;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class EmployeesExport implements FromQuery, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function query()
    {
        return null;
        // return Employee::join('jobs', 'jobs.id', '=', 'employees.job_id')
        //     ->select(
        //         'employees.id',
        //         'jobs.name',
        //         'employees.first_name',
        //         'employees.middle_name',
        //         'employees.last_name',
        //         'employees.suffix',
        //         'employees.gender',
        //         'employees.birthdate',
        //         'employees.mobile_number',
        //         'employees.telephone_number',
        //         'employees.email',
        //         'employees.address',
        //         'employees.fund',
        //         'employees.remaining_fund',
        //     );
    }

    public function headings(): array
    {
        return [
            // '#',
            // 'Job Designation',
            // 'First Name',
            // 'Middle Name',
            // 'Last Name',
            // 'Suffix',
            // 'Gender',
            // 'Birthdate',
            // 'Mobile Number',
            // 'Telephone Number',
            // 'Email Address',
            // 'Address',
            // 'Revolving Fund',
            // 'Remaining Fund',
        ];
    }
}
