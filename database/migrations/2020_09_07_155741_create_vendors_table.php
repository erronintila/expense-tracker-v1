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
            $table->string('mobile_number', 50)->nullable();
            $table->string('telephone_number', 50)->nullable();
            $table->text('remarks')->nullable();
            $table->string('website', 150)->nullable();
            $table->boolean('is_vat_inclusive')->default(false);
            
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
