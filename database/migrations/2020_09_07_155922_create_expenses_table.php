<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('description', 100)->nullable();
            $table->double('amount', 10, 2)->default(0);
            $table->double('reimbursable_amount', 10, 2)->default(0);
            $table->string('receipt_number');
            $table->date('date');
            $table->text('remarks')->nullable();

            $table->unsignedBigInteger('expense_type_id')->unsigned();
            $table->unsignedBigInteger('employee_id')->unsigned();
            $table->unsignedBigInteger('vendor_id')->unsigned();
            $table->unsignedBigInteger('expense_report_id')->nullable()->unsigned();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('expense_type_id')
                ->references('id')
                ->on('expense_types')
                ->onDelete('cascade');
            $table->foreign('employee_id')
                ->references('id')
                ->on('employees');
            $table->foreign('vendor_id')
                ->references('id')
                ->on('vendors');
            $table->foreign('expense_report_id')
                ->references('id')
                ->on('expense_reports');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
        Schema::table('expenses', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
