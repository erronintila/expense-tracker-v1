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
            $table->string("code")->unique()->nullable();
            $table->string("reference")->nullable();
            $table->string("description", 150);
            $table->double("add_amount", 10, 2)->default(0);
            $table->double("subtract_amount", 10, 2)->default(0);
            $table->string("type");
            $table->text("remarks")->nullable();

            $table->unsignedBigInteger('user_id')->nullable();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();

            $table->timestamps();
            $table->softDeletes();

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
        Schema::dropIfExists('adjustments');
        Schema::table('adjustments', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
