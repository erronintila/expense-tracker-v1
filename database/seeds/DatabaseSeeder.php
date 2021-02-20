<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DepartmentSeeder::class);
        $this->call(ExpenseTypeSeeder::class);
        $this->call(JobSeeder::class);
        $this->call(UserSeeder::class);

        $this->call(VendorSeeder::class);
        // $this->call(ExpenseSeeder::class);
        // $this->call(ExpenseReportSeeder::class);
    }
}
