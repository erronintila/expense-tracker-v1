<?php

namespace App\Observers;

use App\Models\Adjustment;

class AdjustmentObserver
{
    /**
     * Handle the adjustment "created" event.
     *
     * @param  \Models\Adjustment  $adjustment
     * @return void
     */
    public function created(Adjustment $adjustment)
    {
        if ($adjustment->type == "Manage Revolving Fund") {

            $added_amount = $adjustment->add_amount;

            $subtracted_amount = $adjustment->subtract_amount;

            $fund = $adjustment->employee->fund;

            $remaining_fund = $adjustment->employee->remaining_fund;

            $adjustment->employee->fund = ($fund + $added_amount) - $subtracted_amount;

            $adjustment->employee->remaining_fund = ($remaining_fund + $added_amount) - $subtracted_amount;

            // if ($remaining_fund == 0) {

            //     $adjustment->employee->remaining_fund = $adjustment->employee->fund;
            // } else {

            //     $adjustment->employee->remaining_fund = $adjustment->employee->fund > $remaining_fund ?
            //         $remaining_fund : $adjustment->employee->fund;
            // }

            $adjustment->employee->save();
        }
    }

    /**
     * Handle the adjustment "updated" event.
     *
     * @param  \Models\Adjustment  $adjustment
     * @return void
     */
    public function updated(Adjustment $adjustment)
    {
        //
    }

    /**
     * Handle the adjustment "deleted" event.
     *
     * @param  \Models\Adjustment  $adjustment
     * @return void
     */
    public function deleted(Adjustment $adjustment)
    {
    }

    /**
     * Handle the adjustment "restored" event.
     *
     * @param  \Models\Adjustment  $adjustment
     * @return void
     */
    public function restored(Adjustment $adjustment)
    {
    }

    /**
     * Handle the adjustment "force deleted" event.
     *
     * @param  \Models\Adjustment  $adjustment
     * @return void
     */
    public function forceDeleted(Adjustment $adjustment)
    {
    }
}
