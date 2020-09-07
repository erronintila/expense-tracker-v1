<?php

use App\Models\Department;
use App\Models\Job;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jobs = [
            ["department" => "Financial Administrative Department", "job" => "Accounts Receivable Specialist"],
            ["department" => "Financial Administrative Department", "job" => "Accounts Payable Specialist"],
            ["department" => "Information Technology Department", "job" => "Junior Software Developer"],
            ["department" => "Information Technology Department", "job" => "Senior Software Developer"],
            ["department" => "Technical & Services Department", "job" => "Field Service Engineer"],
            ["department" => "Technical & Services Department", "job" => "Field Service Technician"],
            ["department" => "Sales & Marketing Department", "job" => "Sales & Marketing Representative"],
            ["department" => "Sales & Marketing Department", "job" => "Sales & Marketing Officer"],
            ["department" => "Warehouse Department", "job" => "Stock Personnel"],
            ["department" => "Warehouse Department", "job" => "Warehouse Officer"],
            ["department" => "Human Resource Department", "job" => "Human Resource Officer"],
        ];

        foreach ($jobs as $key => $value) {
            $department = Department::where('name', $value["department"])->first();

            if (!is_null($department)) {
                Job::create([
                    'name' => $value["job"],
                    'department_id' => $department->id,
                ]);
            }
        }
    }
}
