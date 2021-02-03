<?php

namespace App\Observers;

use App\Models\ExpenseReport;
use App\Models\Payment;
use App\User;
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
        // $payment->amount = $payment->getTotalAmountAttribute();
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
        // if($payment->received_at == null) {
        //     $payment->amount = $payment->getTotalAmountAttribute() ?? 0;
        //     $payment->save();
        //     return;
        // }
        // $received = $payment->getOriginal("received_at");
        // if ($received == null && $payment->received_at !== null) {
        foreach ($payment->expense_reports as $expense_report) {
            $expense_report = ExpenseReport::withTrashed()->findOrFail($expense_report["id"]);
            // $expense_report->paid_at = now();
            // $expense_report->paid_by = Auth::id();
            // $expense_report->save();
            foreach ($expense_report->expenses as $expense) {
                $expense_amount = $expense->amount - $expense->reimbursable_amount;
                // $expense->user->remaining_fund += $expense_amount;
                // $expense->paid_at = now();
                // $expense->paid_by = Auth::id();
                $expense->save();
                // $expense->user->save();
                $user = User::withTrashed()->findOrFail($expense->user_id);
                $user->remaining_fund += $expense_amount;
                $user->save();
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
        // if ($payment->received_at !== null) {
        //     foreach ($payment->expense_reports as $expense_report) {
        //         foreach ($expense_report->expenses as $expense) {
        //             $expense_amount = $expense->amount - $expense->reimbursable_amount;
        //             $expense->user->remaining_fund -= $expense_amount;
        //             $expense->user->save();
        //         }
        //     }
        // }
        // $payment->deleted_by = Auth::id();
        // $payment->save();
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
