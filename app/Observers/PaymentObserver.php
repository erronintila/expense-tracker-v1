<?php

namespace App\Observers;

use App\Models\ExpenseReport;
use App\Models\Payment;
use Illuminate\Support\Facades\Auth;

class PaymentObserver
{
    /**
     * Handle the payment "created" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function created(Payment $payment)
    {
        // $payment->code = "PV" . date("Y") . str_pad($payment->id, 5, '0', STR_PAD_LEFT);

        // $payment->save();
    }

    /**
     * Handle the payment "updated" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function updated(Payment $payment)
    {
        // $received = $payment->getOriginal("received_at");

        // if ($received == null && $payment->received_at !== null) {

        foreach ($payment->expense_reports as $expense_report) {

            $expense_report = ExpenseReport::findOrFail($expense_report["id"]);

            $expense_report->paid_at = now();

            $expense_report->paid_by = Auth::id();

            $expense_report->save();

            foreach ($expense_report->expenses as $expense) {

                $expense_amount = $expense->amount - $expense->reimbursable_amount;

                $expense->employee->remaining_fund += $expense_amount;

                $expense->paid_at = now();

                $expense->paid_by = Auth::id();

                $expense->employee->save();
            }
        }
        // }
    }

    /**
     * Handle the payment "deleting" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function deleting(Payment $payment)
    {
        foreach ($payment->expense_reports as $expense_report) {

            foreach ($expense_report->expenses as $expense) {

                // $expense_amount = $expense->amount - $expense->reimbursable_amount;

                $expense->employee->remaining_fund -= $expense->revolving_fund;

                $expense->employee->save();
            }
        }
    }

    /**
     * Handle the payment "deleted" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function deleted(Payment $payment)
    {
        //
    }

    /**
     * Handle the payment "restored" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function restored(Payment $payment)
    {
        //
    }

    /**
     * Handle the payment "force deleted" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function forceDeleted(Payment $payment)
    {
        //
    }
}
