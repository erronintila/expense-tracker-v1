<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseReportPaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_report_payment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('expense_report_id');
            $table->unsignedBigInteger('payment_id');
            $table->double('amount', 10, 2)->nullable();
            $table->timestamps();

            // $table->foreign('expense_report_id')
            //     ->references('id')
            //     ->on('expense_reports')
            //     ->onDelete('cascade');

            // $table->foreign('payment_id')
            //     ->references('id')
            //     ->on('payments')
            //     ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expense_report_payment');
    }
}
