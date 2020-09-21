<?php

use App\Models\Employee;
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
        for ($i = 1; $i <= 10; $i++) {

            $expenses = Expense::where('employee_id', $i)->get();

            if (count($expenses) > 0) {
                $employee = Employee::find($i);

                $expense_report = new ExpenseReport();

                $expense_report->description = $employee->name() . " Expenses";
                $expense_report->remarks = "";
                $expense_report->employee_id = $employee->id;
                $expense_report->save();

                foreach ($expenses as $key => $value) {
                    $expense = Expense::find($value["id"]);
                    $expense->expense_report_id = $expense_report->id;
                    $expense->save();
                }

                $expense_report->code = date("Ymd") . str_pad($expense_report->id, 8, '0', STR_PAD_LEFT);
                $expense_report->save();
            }
        }
    }
}
