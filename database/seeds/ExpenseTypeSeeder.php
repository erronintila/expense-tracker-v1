<?php

use App\Models\ExpenseType;
use Illuminate\Database\Seeder;

class ExpenseTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $expense_types = [
            ['name' => 'Delivery Expense'],
            ['name' => 'Gas & Oil'],
            ['name' => 'Meal & Lodging'],
            ['name' => 'Postage, Telephone & Fax'],
            ['name' => 'Repairs & Maintenance'],
            ['name' => 'Representation'],
            ['name' => 'Supplies'],
            ['name' => 'Transportation'],
            ['name' => 'Miscellaneous'],
        ];

        foreach ($expense_types as $expense_type) {
            ExpenseType::create([
                "code" => generate_code(ExpenseType::class, "EXT" . date("Y"), 10),
                "name" => $expense_type["name"]
            ]);
        }
    }
}
