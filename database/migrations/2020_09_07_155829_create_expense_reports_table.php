<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_reports', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('description');
            $table->text('remarks')->nullable();
            $table->text('notes')->nullable();

            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('disapproved_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();

            $table->unsignedBigInteger('submitted_by')->nullable();
            $table->unsignedBigInteger('reviewed_by')->nullable();
            $table->unsignedBigInteger('approved_by')->nullable();
            $table->unsignedBigInteger('disapproved_by')->nullable();
            $table->unsignedBigInteger('cancelled_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();

            $table->unsignedBigInteger('employee_id')->unsigned();
            $table->unsignedBigInteger('payment_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('payment_id')->references('id')->on('payments');

            $table->foreign('submitted_by')->references('id')->on('users');
            $table->foreign('reviewed_by')->references('id')->on('users');
            $table->foreign('approved_by')->references('id')->on('users');
            $table->foreign('disapproved_by')->references('id')->on('users');
            $table->foreign('cancelled_by')->references('id')->on('users');
            $table->foreign('deleted_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expense_reports');
        Schema::table('expense_reports', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
