<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string("code")->unique()->nullable();
            // $table->string('name', 150);

            $table->string('first_name', 100);
            $table->string('middle_name', 100)->nullable();
            $table->string('last_name', 100);
            $table->string('suffix', 30)->nullable();
            $table->string('gender', 10);
            $table->date('birthdate')->nullable();
            $table->string('mobile_number', 30)->nullable();
            $table->string('telephone_number', 30)->nullable();
            // $table->string('email')->unique()->nullable();
            $table->text('address')->nullable();
            $table->double('fund', 10, 2)->default(0);
            $table->double('remaining_fund', 10, 2)->default(0);

            // $table->unsignedBigInteger('job_id');

            // $table->foreign('job_id')
            //     ->references('id')
            //     ->on('jobs')
            //     ->onDelete('cascade');

            $table->string('username', 50)->unique();
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_admin')->default(false);
            $table->boolean('is_superadmin')->default(false);
            $table->boolean('can_login')->default(false);
            $table->string('type', 100)->nullable();
            $table->rememberToken();

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
        Schema::dropIfExists('users');
        Schema::table('users', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
