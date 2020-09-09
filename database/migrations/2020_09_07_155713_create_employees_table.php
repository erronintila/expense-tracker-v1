<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('first_name', 150);
            $table->string('middle_name', 150)->nullable();
            $table->string('last_name', 150);
            $table->string('suffix', 30)->nullable();
            $table->string('gender', 10);
            $table->date('birthdate')->nullable();
            $table->string('mobile_number', 50)->nullable();
            $table->string('telephone_number', 50)->nullable();
            $table->string('email')->unique()->nullable();
            
            $table->text('address')->nullable();
            $table->string('building_address', 150)->nullable();
            $table->string('street_name', 150)->nullable();
            $table->string('street_address', 150)->nullable();
            $table->string('subdivision', 150)->nullable();
            $table->string('barangay', 150)->nullable();
            $table->string('city', 150)->nullable();
            $table->string('province', 150)->nullable();
            $table->string('country', 150)->nullable();
            $table->string('zip', 50)->nullable();

            $table->unsignedBigInteger('job_id');
            $table->unsignedBigInteger('user_id')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('job_id')
                ->references('id')
                ->on('jobs')
                ->onDelete('cascade');
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
        Schema::table('employees', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
