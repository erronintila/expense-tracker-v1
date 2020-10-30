<?php

namespace App\Exports;

use App\Models\Employee;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EmployeesExport implements FromQuery, WithHeadingRow
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
    {
        return Employee::query();
    }

    public function model(array $row)
    {
        return new Employee([
            'id'  => $row['id'],
            'code' => $row['code'],
            'first_name'    => $row['first_name'],
            'middle_name'    => $row['middle_name'],
            'last_name'    => $row['last_name'],
            'suffix'    => $row['suffix'],
            'gender'    => $row['gender'],
            'birthdate'    => $row['birthdate'],
            'mobile_number'    => $row['mobile_number'],
            'telephone_number'    => $row['telephone_number'],
            'email'    => $row['email'],
            'address'    => $row['address'],
            'fund'    => $row['fund'],
            'remaining_fund'    => $row['remaining_fund'],
            'job_id'    => $row['job_id'],
            'user_id'    => $row['user_id'],
        ]);
    }
}

// $table->id();
//             $table->string('code')->unique()->nullable();
//             $table->string('first_name', 100);
//             $table->string('middle_name', 100)->nullable();
//             $table->string('last_name', 100);
//             $table->string('suffix', 30)->nullable();
//             $table->string('gender', 10);
//             $table->date('birthdate')->nullable();
//             $table->string('mobile_number', 30)->nullable();
//             $table->string('telephone_number', 30)->nullable();
//             $table->string('email')->unique()->nullable();

//             $table->text('address')->nullable();

//             $table->double('fund', 10, 2)->default(0);
//             $table->double('remaining_fund', 10, 2)->default(0);

//             $table->unsignedBigInteger('job_id');
//             $table->unsignedBigInteger('user_id')->nullable();