<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeExpenseTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_expense_type', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('expense_type_id');
            $table->double('limit', 10, 2)->nullable();
            $table->timestamps();

            // $table->foreign('expense_type_id')
            //     ->references('id')
            //     ->on('expense_types')
            //     ->onDelete('cascade');

            // $table->foreign('employee_id')
            //     ->references('id')
            //     ->on('employees')
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
        Schema::dropIfExists('employee_expense_type');
    }
}
