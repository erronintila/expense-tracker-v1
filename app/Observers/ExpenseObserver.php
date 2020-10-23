<?php

namespace App\Observers;

use App\Models\Expense;

class ExpenseObserver
{
    /**
     * Handle the expense "created" event.
     *
     * @param  \App\Expense  $expense
     * @return void
     */
    public function created(Expense $expense)
    {
        // $expense->code = "EX" . date("Y") . str_pad($expense->id, 5, '0', STR_PAD_LEFT);

        // $expense->save();

        $expense_amount = $expense->amount - $expense->personal_amount;

        $expense->employee->remaining_fund -= $expense_amount;

        // $expense->employee->remaining_fund -= $expense->revolving_fund;

        $expense->employee->save();
    }

    /**
     * Handle the expense "updated" event.
     *
     * @param  \App\Expense  $expense
     * @return void
     */
    public function updated(Expense $expense)
    {
        // $original_revolving_fund = $expense->getOriginal("revolving_fund");

        // // $new_amount = $expense->revolving_fund;

        // $remaining_fund = $expense->employee->remaining_fund;

        // $expense->employee->remaining_fund = ($remaining_fund + $original_revolving_fund) - $expense->revolving_fund;

        // $expense->employee->save();

        $original_personal_amount = $expense->getOriginal("personal_amount");

        $new_amount = $expense->amount - $expense->personal_amount;

        $remaining_fund = $expense->employee->remaining_fund;

        $expense->employee->remaining_fund = ($remaining_fund + $original_personal_amount) - $new_amount;

        $expense->employee->save();
    }

    /**
     * Handle the expense "deleted" event.
     *
     * @param  \App\Expense  $expense
     * @return void
     */
    public function deleted(Expense $expense)
    {
        // $expense_amount = $expense->revolving_fund;
        $expense_amount = $expense->amount - $expense->personal_amount;

        $expense->employee->remaining_fund += $expense_amount;

        $expense->employee->save();
    }

    /**
     * Handle the expense "restored" event.
     *
     * @param  \App\Expense  $expense
     * @return void
     */
    public function restored(Expense $expense)
    {
        $expense_amount = $expense->amount - $expense->personal_amount;

        $expense->employee->remaining_fund -= $expense_amount;

        $expense->employee->save();
    }

    /**
     * Handle the expense "force deleted" event.
     *
     * @param  \App\Expense  $expense
     * @return void
     */
    public function forceDeleted(Expense $expense)
    {
        $expense_amount = $expense->amount - $expense->personal_amount;

        $expense->employee->remaining_fund += $expense_amount;

        $expense->employee->save();
    }
}
