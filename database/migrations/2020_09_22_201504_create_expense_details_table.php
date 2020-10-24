<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_details', function (Blueprint $table) {
            $table->id();
            $table->string('product', 100)->nullable();
            $table->string('description')->nullable();
            $table->integer('quantity')->default(1);
            $table->double('unit_cost', 10, 2)->default(0);
            $table->double('tax', 10, 2)->default(0);
            $table->double('amount', 10, 2)->default(0);
            $table->double('reimbursable_amount', 10, 2)->default(0);

            $table->unsignedBigInteger('expense_id');

            $table->timestamps();
            $table->softDeletes();

            // $table->foreign('expense_id')
            //     ->references('id')
            //     ->on('expenses')
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
        Schema::dropIfExists('expense_details');
        Schema::table('expenses', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
