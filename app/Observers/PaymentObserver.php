<?php

namespace App\Observers;

use App\Models\Payment;

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
        $payment->code = "PV" . date("Y") . str_pad($payment->id, 5, '0', STR_PAD_LEFT);

        $payment->save();
    }

    /**
     * Handle the payment "updated" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function updated(Payment $payment)
    {
        //
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

                $expense_amount = $expense->amount - $expense->reimbursable_amount;

                $expense->employee->remaining_fund -= $expense_amount;

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
