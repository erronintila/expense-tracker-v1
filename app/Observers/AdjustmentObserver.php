<?php

namespace App\Observers;

use App\Models\Adjustment;

class AdjustmentObserver
{    
    /**
     * created
     *
     * @param  mixed $adjustment
     * @return void
     */
    public function created(Adjustment $adjustment): void
    {
        if ($adjustment->type == "Manage Revolving Fund") {
            $added_amount = $adjustment->add_amount;
            $subtracted_amount = $adjustment->subtract_amount;
            $fund = $adjustment->user->fund;
            $remaining_fund = $adjustment->user->remaining_fund;
            $adjustment->user->fund = ($fund + $added_amount) - $subtracted_amount;
            $adjustment->user->remaining_fund = ($remaining_fund + $added_amount) - $subtracted_amount;
            // if ($remaining_fund == 0) {
            //     $adjustment->user->remaining_fund = $adjustment->user->fund;
            // } else {
            //     $adjustment->user->remaining_fund = $adjustment->user->fund > $remaining_fund ?
            //         $remaining_fund : $adjustment->user->fund;
            // }
            $adjustment->user->save();
        }
    }

    /**
     * Handle the adjustment "updated" event.
     *
     * @param  \App\Models\Adjustment  $adjustment
     * @return void
     */
    public function updated(Adjustment $adjustment)
    {
        //
    }

    /**
     * Handle the adjustment "deleted" event.
     *
     * @param  \App\Models\Adjustment  $adjustment
     * @return void
     */
    public function deleted(Adjustment $adjustment)
    {
    }

    /**
     * Handle the adjustment "restored" event.
     *
     * @param  \App\Models\Adjustment  $adjustment
     * @return void
     */
    public function restored(Adjustment $adjustment)
    {
    }

    /**
     * Handle the adjustment "force deleted" event.
     *
     * @param  \App\Models\Adjustment  $adjustment
     * @return void
     */
    public function forceDeleted(Adjustment $adjustment)
    {
    }
}
