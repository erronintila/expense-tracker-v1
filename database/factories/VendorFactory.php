<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vendor;
use Faker\Generator as Faker;

$factory->define(Vendor::class, function (Faker $faker) {
    return [
        'code' => $faker->ean13,
        'name' => $faker->company,
        'email' => $faker->unique()->safeEmail,
        'tin' => $faker->phoneNumber,
        'contact_person' => $faker->name,
        'phone' => $faker->phoneNumber,
        'address' => $faker->address,
    ];
});
