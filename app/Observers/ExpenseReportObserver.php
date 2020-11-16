<?php

namespace App\Observers;

use App\Models\ExpenseReport;
use Illuminate\Support\Facades\Auth;

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
     * Handle the expense report "deleting" event.
     *
     * @param  \App\Models\ExpenseReport  $expenseReport
     * @return void
     */
    public function deleting(ExpenseReport $expenseReport)
    {
        $expenseReport->deleted_by = Auth::id();

        $expenseReport->save();
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
