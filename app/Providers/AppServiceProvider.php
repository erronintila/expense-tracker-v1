<?php

namespace App\Providers;

use App\Models\Adjustment;
use App\Models\Expense;
use App\Observers\AdjustmentObserver;
use App\Observers\ExpenseObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Expense::observe(ExpenseObserver::class);

        Adjustment::observe(AdjustmentObserver::class);
    }
}
