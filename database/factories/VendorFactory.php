<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vendor;
use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(Vendor::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    
    return [
        'code' => $faker->ean13,
        'name' => $faker->company,
        'email' => $faker->unique()->companyEmail,
        'tin' => $faker->phoneNumber,
        'contact_person' => $faker->name,
        'mobile_number' => $faker->e164PhoneNumber,
        'telephone_number' => $faker->phoneNumber,
        'website' => $faker->companyEmail,
        'address' => $faker->address,
        'is_vat_inclusive' => $faker->randomElement([0, 1])
    ];
});
