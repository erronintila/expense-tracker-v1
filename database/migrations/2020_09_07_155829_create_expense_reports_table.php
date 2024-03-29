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
            $table->string('reference_no')->nullable();
            $table->string('description');
            $table->text('remarks')->nullable();
            // $table->json('notes')->nullable()->default(json_encode([
            //     "comments" => [],
            //     "cancellation" => [],
            //     "rejection" => []
            // ]));
            $table->text('notes')->nullable();

            $table->string('submission_period', 50)->default("Weekly");
            $table->integer('approval_period')->default(3);

            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('rejected_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            // $table->timestamp('paid_at')->nullable();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('submitted_by')->nullable();
            $table->unsignedBigInteger('reviewed_by')->nullable();
            $table->unsignedBigInteger('approved_by')->nullable();
            $table->unsignedBigInteger('rejected_by')->nullable();
            $table->unsignedBigInteger('cancelled_by')->nullable();
            // $table->unsignedBigInteger('paid_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();

            $table->unsignedBigInteger('user_id')->unsigned();
            // $table->unsignedBigInteger('payment_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('payment_id')->references('id')->on('payments');

            // $table->foreign('submitted_by')->references('id')->on('users');
            // $table->foreign('reviewed_by')->references('id')->on('users');
            // $table->foreign('approved_by')->references('id')->on('users');
            // $table->foreign('disapproved_by')->references('id')->on('users');
            // $table->foreign('cancelled_by')->references('id')->on('users');
            // $table->foreign('deleted_by')->references('id')->on('users');
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
