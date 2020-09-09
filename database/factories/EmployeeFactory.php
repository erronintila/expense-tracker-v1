<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Employee;
use App\Models\Job;
use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');
    
    $gender = $faker->randomElement(['Male', 'Female']);

    $jobs = $faker->randomElement([
        'Accounts Receivable Specialist',
        'Accounts Payable Specialist',
        'Junior Software Developer',
        'Senior Software Developer',
        'Field Service Engineer',
        'Field Service Technician',
        'Sales & Marketing Representative',
        'Sales & Marketing Officer',
        'Stock Personnel',
        'Warehouse Officer',
        'Human Resource Officer'
    ]);

    $job = Job::where('name', $jobs)->first();

    return [
        // 'code' => 'EMP' . now()->format('YmdHms'),
        'first_name' => $faker->firstName($gender),
        'middle_name' => $faker->lastName,
        'last_name' => $faker->lastName,
        'suffix' => $faker->suffix,
        'gender' => $gender,
        'birthdate' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'mobile_number' => $faker->e164PhoneNumber,
        'telephone_number' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,

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

        'job_id' => $job->id,
    ];
});
