<?php

use App\User;
use App\Models\Expense;
use App\Models\ExpenseReport;
use Illuminate\Database\Seeder;

class ExpenseReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = count(User::all());

        for ($i = 1; $i <= $count; $i++) {

            $expenses = Expense::where('user_id', $i)->get();

            if (count($expenses) > 0) {
                $user = User::find($i);

                $expense_report = new ExpenseReport();

                $expense_report->description = $user->getFullNameAttribute() . " Expenses";
                $expense_report->remarks = "";
                $expense_report->user_id = $user->id;
                $expense_report->save();

                foreach ($expenses as $key => $value) {
                    $expense = Expense::find($value["id"]);
                    $expense->expense_report_id = $expense_report->id;
                    $expense->save();
                }

                $expense_report->code = generate_code(ExpenseReport::class, "EXR", 10);
                $expense_report->created_by = 1;
                $expense_report->updated_by = 1;
                $expense_report->save();
            }
        }
    }
}
