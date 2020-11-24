<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_types', function (Blueprint $table) {
            $table->id();
            $table->string("code")->unique()->nullable();
            $table->string('name', 100)->unique();
            $table->double("limit", 10, 2)->nullable();
            $table->unsignedBigInteger('expense_type_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('expense_types', function (Blueprint $table) {
            $table->foreign('expense_type_id')
                ->references('id')
                ->on('expense_types')
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
        Schema::dropIfExists('expense_types');
        Schema::table('expense_types', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
