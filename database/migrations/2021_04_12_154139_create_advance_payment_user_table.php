<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvancePaymentUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advance_payment_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('advance_payment_id');
            $table->unsignedBigInteger('user_id');
            $table->double('amount', 10, 2)->nullable();
            $table->timestamps();

            $table->foreign('advance_payment_id')
                ->references('id')
                ->on('advance_payments')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advance_payment_user');
    }
}
