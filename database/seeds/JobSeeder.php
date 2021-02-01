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
            ["department" => "Information Technology Department", "job" => "Junior Technical Support"],
            ["department" => "Technical & Services Department", "job" => "Field Service Engineer"],
            ["department" => "Technical & Services Department", "job" => "Field Service Technician"],
            ["department" => "Sales & Marketing Department", "job" => "Sales & Marketing Representative"],
            ["department" => "Sales & Marketing Department", "job" => "Junior Sales & Marketing Representative"],
            ["department" => "Sales & Marketing Department", "job" => "Sales & Marketing Officer"],
            ["department" => "Warehouse Department", "job" => "Stock Personnel"],
            ["department" => "Warehouse Department", "job" => "Warehouse Officer"],
            ["department" => "Warehouse Department", "job" => "Inventory Personnel"],
            ["department" => "Warehouse Department", "job" => "Inventory, Warehouse, and Purchasing Officer"],
            ["department" => "Human Resource Department", "job" => "Human Resource Officer"],
            ["department" => "Logistics Department", "job" => "Operations Services and Logistics Officer"],
            ["department" => "Logistics Department", "job" => "Logistics Coordinator"],
            ["department" => "Utility and Maintenance Department", "job" => "Utility and Maintenance"],
            ["department" => "Sales & Marketing Department", "job" => "Consignment Officer"],
            ["department" => "Sales & Marketing Department", "job" => "Chief Executive Officer"],
            ["department" => "Financial Administrative Department", "job" => "Accounting Clerk"],
        ];

        foreach ($jobs as $key => $value) {
            $department = Department::where('name', $value["department"])->first();

            if (!is_null($department)) {
                Job::create([
                    'code' => generate_code(Job::class, "JOB", 10),
                    'name' => $value["job"],
                    'department_id' => $department->id,
                ]);
            }
        }
    }
}
