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
        $expense_amount = $expense->amount - $expense->reimbursable_amount;

        $expense->employee->remaining_fund -= $expense_amount;

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
        $original_amount = $expense->getOriginal("amount") - $expense->getOriginal("reimbursable_amount");

        $new_amount = $expense->amount - $expense->reimbursable_amount;

        $remaining_fund = $expense->employee->remaining_fund;

        $expense->employee->remaining_fund = ($remaining_fund + $original_amount) - $new_amount;

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
        $expense_amount = $expense->amount - $expense->reimbursable_amount;

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
        $expense->employee->remaining_fund -= $expense->amount;

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
        $expense->employee->remaining_fund += $expense->amount;

        $expense->employee->save();
    }
}
