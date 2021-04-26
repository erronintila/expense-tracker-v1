<?php

namespace App\Observers;

use App\Models\ExpenseReport;

class ExpenseReportObserver
{
    /**
     * Handle the expense report "created" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function created(ExpenseReport $expenseReport)
    {
        //
    }

    /**
     * Handle the expense report "updated" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function updated(ExpenseReport $expenseReport)
    {
        //
    }

    /**
     * Handle the expense report "deleted" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function deleted(ExpenseReport $expenseReport)
    {
        //
    }

    /**
     * Handle the expense report "restored" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function restored(ExpenseReport $expenseReport)
    {
        //
    }

    /**
     * Handle the expense report "force deleted" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function forceDeleted(ExpenseReport $expenseReport)
    {
        //
    }
}
