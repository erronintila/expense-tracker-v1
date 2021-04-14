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
            $table->string('reference_no')->unique()->nullable();
            $table->string('voucher_no')->unique();
            $table->date('date');
            $table->string('description');
            $table->string('cheque_no')->nullable();
            $table->date('cheque_date')->nullable();
            $table->double('amount', 10, 2)->default(0);
            $table->string('payee', 150)->nullable();
            $table->string('payee_address')->nullable();
            $table->string('payee_phone', 50)->nullable();
            $table->text('remarks')->nullable();
            // $table->json('notes')->nullable()->default(json_encode([
            //     "comments" => [],
            //     "cancellation" => [],
            //     "rejection" => []
            // ]));
            $table->text('notes')->nullable();

            $table->timestamp('approved_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamp('released_at')->nullable();
            $table->timestamp('received_at')->nullable();
            $table->timestamp('returned_at')->nullable();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('approved_by')->nullable();
            $table->unsignedBigInteger('cancelled_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->unsignedBigInteger('released_by')->nullable();
            $table->unsignedBigInteger('received_by')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            // $table->foreign('approved_by_user_id')->references('id')->on('users');
            // $table->foreign('cancelled_by_user_id')->references('id')->on('users');
            // $table->foreign('deleted_by_user_id')->references('id')->on('users');
            // $table->foreign('released_by_user_id')->references('id')->on('users');
            // $table->foreign('received_by_user_id')->references('id')->on('users');
            $table->foreign('user_id')->references('id')->on('users');
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
