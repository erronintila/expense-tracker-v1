<?php

namespace App\Observers;

use App\Models\Expense;
use Illuminate\Support\Facades\Auth;

class ExpenseObserver
{    
    /**
     * created
     *
     * @param  mixed $expense
     * @return void
     */
    public function created(Expense $expense): void
    {
        $expense_amount = $expense->amount - $expense->reimbursable_amount;

        $expense->user->remaining_fund -= $expense_amount;

        $expense->user->save();
    }

    /**
     * Handle the expense "updated" event.
     *
     * @param  \App\Models\Expense  $expense
     * @return void
     */
    public function updated(Expense $expense)
    {
        // $rejected = $expense->expense_report->getOriginal("rejected_at");

        // if ($rejected == null && $expense->expense_report->rejected_at !== null) {
        //     $expense_amount = $expense->amount - $expense->reimbursable_amount;

        //     $expense->user->remaining_fund += $expense_amount;

        //     $expense->user->save();

        //     return;
        // }

        $original_deducted_amount = $expense->getOriginal("amount") - $expense->getOriginal("reimbursable_amount");

        $new_amount = $expense->amount - $expense->reimbursable_amount;

        $remaining_fund = $expense->user->remaining_fund;

        $expense->user->remaining_fund = ($remaining_fund + $original_deducted_amount) - $new_amount;

        $expense->user->save();
    }

    /**
     * Handle the expense "deleting" event.
     *
     * @param  \App\Models\Expense  $expense
     * @return void
     */
    public function deleting(Expense $expense)
    {
        $expense->deleted_by = Auth::id();

        $expense->save();
    }

    /**
     * Handle the expense "deleted" event.
     *
     * @param  \App\Models\Expense  $expense
     * @return void
     */
    public function deleted(Expense $expense)
    {
        if ($expense->expense_report) {
            if ($expense->expense_report()->withTrashed()->first()->rejected_at) {
                return;
            }
        }

        // $expense_amount = $expense->revolving_fund;
        $expense_amount = $expense->amount - $expense->reimbursable_amount;

        $expense->user->remaining_fund += $expense_amount;

        $expense->user->save();
    }

    /**
     * Handle the expense "restored" event.
     *
     * @param  \App\Models\Expense  $expense
     * @return void
     */
    public function restored(Expense $expense)
    {
        if ($expense->expense_report) {
            if ($expense->expense_report()->withTrashed()->first()->rejected_at) {
                return;
            }
        }

        $expense_amount = $expense->amount - $expense->reimbursable_amount;

        $expense->user->remaining_fund -= $expense_amount;

        $expense->user->save();
    }

    /**
     * Handle the expense "force deleted" event.
     *
     * @param  \App\Models\Expense  $expense
     * @return void
     */
    public function forceDeleted(Expense $expense)
    {
        $expense_amount = $expense->amount - $expense->reimbursable_amount;

        $expense->user->remaining_fund += $expense_amount;

        $expense->user->save();
    }
}
