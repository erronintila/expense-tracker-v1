<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Job;
use App\User;
use Faker\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
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
        // 'first_name' => $faker->name,
        // 'username' => $faker->unique()->username,
        // 'email' => $faker->unique()->safeEmail,
        // 'email_verified_at' => now(),
        // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        // 'remember_token' => Str::random(10),

        'code' => null,
        'first_name' => $faker->firstName($gender),
        'middle_name' => $faker->lastName,
        'last_name' => $faker->lastName,
        'suffix' => $faker->suffix,
        'gender' => $gender,
        'birthdate' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'mobile_number' => $faker->e164PhoneNumber,
        'telephone_number' => $faker->phoneNumber,
        'address' => $faker->address,
        'fund' => 0,
        'remaining_fund' => 0,
        'username' => $faker->unique()->username . rand(1, 1000000),
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'is_admin' => true,
        'is_superadmin' => false,
        'can_login' => true,
        'type' => "employee",
        'job_id' => $job->id,
    ];
});
