<?php

use App\Models\Expense;
use App\Models\ExpenseDetail;
use Illuminate\Database\Seeder;

class ExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Expense::class, 100)->create();

        // $expense_details = [];

        // for ($i = 1; $i <= 200; $i++) {
        //     $expense = Expense::find($i);

        //     array_push($expense_details, [
        //         'description' => $expense->description,
        //         'amount' => $expense->amount,
        //         'expense_id' => $i,
        //     ]);
        // }
    }
}
