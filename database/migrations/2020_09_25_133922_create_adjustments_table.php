<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdjustmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adjustments', function (Blueprint $table) {
            $table->id();
            $table->string("reference")->nullable();
            $table->string("code")->nullable();
            $table->string("description", 150);
            $table->double("add_amount", 10, 2)->default(0);
            $table->double("subtract_amount", 10, 2)->default(0);
            $table->string("type");
            $table->text("remarks")->nullable();

            $table->unsignedBigInteger('employee_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('employee_id')
                ->references('id')
                ->on('employees')
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
        Schema::dropIfExists('adjustments');
        Schema::table('adjustments', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
