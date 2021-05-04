<?php

namespace App\Observers;

use App\Models\ExpenseReport;
use App\Models\Payment;
use App\Notifications\PaymentNotification;
use App\User;
use Illuminate\Support\Facades\Notification;

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
        Notification::send($payment->user, new PaymentNotification([
            "action" => "release",
            "payment" => $payment
        ]));
    }

    /**
     * Handle the payment "updated" event.
     *
     * @param  \App\Models\Payment  $payment
     * @return void
     */
    public function updated(Payment $payment)
    {
        $isCancelledBefore = $payment->getOriginal("cancelled_at") == null ? false : true;
        $isReceivedBefore = $payment->getOriginal("received_at") == null ? false : true;
        $isCancelled = $payment->cancelled_at == null ? false : true;
        $isReceived = $payment->received_at == null ? false : true;

        if ($isCancelled && !$isCancelledBefore && $isReceivedBefore) {
            foreach ($payment->expense_reports as $expense_report) {
                $expense_report = ExpenseReport::findOrFail($expense_report["id"]);
                foreach ($expense_report->expenses as $expense) {
                    $expense_amount = $expense->amount - $expense->reimbursable_amount;
                    $user = User::findOrFail($expense->user_id);
                    $user->remaining_fund -= $expense_amount;
                    $user->save();
                }
            }
            return;
        }

        if ($isReceived && !$isReceivedBefore) {
            foreach ($payment->expense_reports as $expense_report) {
                $expense_report = ExpenseReport::findOrFail($expense_report["id"]);
                foreach ($expense_report->expenses as $expense) {
                    $expense_amount = $expense->amount - $expense->reimbursable_amount;
                    $expense->save();
                    $user = User::findOrFail($expense->user_id);
                    $user->remaining_fund += $expense_amount;
                    $user->save();
                }
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
