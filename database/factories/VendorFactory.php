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
        'building_address' => $faker->buildingNumber . ' ' . $faker->company,
        'street_name' => $faker->streetName,
        'street_address' => $faker->streetAddress,
        'subdivision' => $faker->company,
        'barangay' => $faker->city,
        'city' => $faker->city,
        'province' => $faker->city,
        'country' => $faker->country,
        'zip' => $faker->postcode,
    ];
});
