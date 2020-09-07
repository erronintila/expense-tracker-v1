<?php

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departments = [
            ['name' => 'Administrative Department'],
            ['name' => 'Sales & Marketing Department'],
            ['name' => 'Warehouse Department'],
            ['name' => 'Information Technology Department'],
            ['name' => 'Technical & Services Department'],
            ['name' => 'Financial Administrative Department'],
            ['name' => 'Human Resource Department'],
        ];

        foreach ($departments as $department) {
            Department::create($department);
        }
    }
}
