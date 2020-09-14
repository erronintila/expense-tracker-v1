<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('name', 150);
            $table->string('email', 150)->unique()->nullable();
            $table->string('tin')->unique()->nullable();
            $table->string('contact_person', 150)->nullable();
            $table->string('mobile_number', 30)->nullable();
            $table->string('telephone_number', 30)->nullable();
            $table->text('remarks')->nullable();
            $table->string('website', 150)->nullable();
            $table->boolean('is_vat_inclusive')->default(false);
            
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
            
            $table->timestamps();
            $table->softDeletes();

            $table->unsignedBigInteger('deleted_by_user_id')->nullable();
            $table->foreign('deleted_by_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vendors');
        Schema::table('vendors', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
