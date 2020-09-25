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
            $table->string('first_name', 100);
            $table->string('middle_name', 100)->nullable();
            $table->string('last_name', 100);
            $table->string('suffix', 30)->nullable();
            $table->string('gender', 10);
            $table->date('birthdate')->nullable();
            $table->string('mobile_number', 30)->nullable();
            $table->string('telephone_number', 30)->nullable();
            $table->string('email')->unique()->nullable();
            
            $table->text('address')->nullable();
            // $table->string('building_address', 100)->nullable();
            // $table->string('street_name', 100)->nullable();
            // $table->string('street_address', 100)->nullable();
            // $table->string('subdivision', 100)->nullable();
            // $table->string('barangay', 100)->nullable();
            // $table->string('city', 100)->nullable();
            // $table->string('province', 100)->nullable();
            // $table->string('country', 100)->nullable();
            // $table->string('zip', 10)->nullable();

            $table->double('fund', 10, 2)->default(0);
            $table->double('remaining_fund', 10, 2)->default(0);

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
