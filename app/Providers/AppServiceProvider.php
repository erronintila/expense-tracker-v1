<?php

namespace App\Providers;

use App\Models\Adjustment;
use App\Models\Expense;
use App\Models\Payment;
use App\Models\ExpenseReport;
use App\Observers\AdjustmentObserver;
use App\Observers\ExpenseReportObserver;
use App\Observers\ExpenseObserver;
use App\Observers\PaymentObserver;
use Illuminate\Support\Facades\Schema;
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
        Schema::defaultStringLength(191);
        
        Expense::observe(ExpenseObserver::class);

        ExpenseReport::observe(ExpenseReportObserver::class);

        Adjustment::observe(AdjustmentObserver::class);

        Payment::observe(PaymentObserver::class);
    }
}
