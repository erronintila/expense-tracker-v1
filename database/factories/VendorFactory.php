<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vendor;
use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(Vendor::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    
    return [
        'code' => $faker->ean13 . rand(1, 10000000),
        'name' => $faker->company . rand(1, 10000000),
        'email' => $faker->unique()->companyEmail . rand(1, 10000000),
        'tin' => $faker->phoneNumber,
        'contact_person' => $faker->name,
        'mobile_number' => $faker->e164PhoneNumber,
        'telephone_number' => $faker->phoneNumber,
        'website' => $faker->companyEmail . rand(1, 10000000),
        'address' => $faker->address,
        'is_vat_inclusive' => $faker->randomElement([0, 1])
    ];
});
