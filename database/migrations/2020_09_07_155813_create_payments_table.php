<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('reference_no')->nullable();
            $table->string('voucher_no')->nullable();
            $table->date('date');
            $table->text('description');
            $table->string('cheque_no')->nullable();
            $table->date('cheque_date')->nullable();
            $table->double('amount', 10, 2);
            $table->string('payee');
            $table->text('payee_address')->nullable();
            $table->text('payee_phone')->nullable();
            $table->text('notes')->nullable();
            $table->text('remarks')->nullable();

            $table->timestamp('approved_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamp('released_at')->nullable();
            $table->timestamp('received_at')->nullable();

            $table->unsignedBigInteger('approved_by_user_id')->nullable();
            $table->unsignedBigInteger('cancelled_by_user_id')->nullable();
            $table->unsignedBigInteger('deleted_by_user_id')->nullable();
            $table->unsignedBigInteger('released_by_user_id')->nullable();
            $table->unsignedBigInteger('received_by_user_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('approved_by_user_id')->references('id')->on('users');
            $table->foreign('cancelled_by_user_id')->references('id')->on('users');
            $table->foreign('deleted_by_user_id')->references('id')->on('users');
            $table->foreign('released_by_user_id')->references('id')->on('users');
            $table->foreign('received_by_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
        Schema::table('payments', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
