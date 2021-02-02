<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubTypeUserTable extends Migration
{
    // /**
    //  * Run the migrations.
    //  *
    //  * @return void
    //  */
    // public function up()
    // {
    //     Schema::create('user_sub_type', function (Blueprint $table) {
    //         $table->id();
    //         $table->unsignedBigInteger('user_id');
    //         $table->unsignedBigInteger('sub_type_id');
    //         $table->double('limit', 10, 2)->nullable();
    //         $table->timestamps();

    //         // $table->foreign('sub_type_id')
    //         //     ->references('id')
    //         //     ->on('sub_types')
    //         //     ->onDelete('cascade');

    //         // $table->foreign('user_id')
    //         //     ->references('id')
    //         //     ->on('users')
    //         //     ->onDelete('cascade');
    //     });
    // }

    // /**
    //  * Reverse the migrations.
    //  *
    //  * @return void
    //  */
    // public function down()
    // {
    //     Schema::dropIfExists('user_sub_type');
    // }
}
