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
            $table->string("reference");
            $table->string("code");
            $table->string("description", 150);
            $table->double("add_amount", 10, 2)->default(0);
            $table->double("subract_amount", 10, 2)->default(0);
            $table->string("type");
            $table->text("remarks");
            $table->timestamps();
            $table->softDeletes();
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
