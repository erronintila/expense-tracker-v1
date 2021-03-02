<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Models\Expense;
use App\Models\ExpenseType;
use Faker\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Expense::class, function (Faker $faker) {
    $faker = Factory::create('en_PH');

    $expenses = $faker->randomElement(
        [
            ["type" => "Delivery Expense", "description" => "Delivery Expense", "amount" => 1000],
            ["type" => "Gas & Oil", "description" => "Gas & Oil Expense", "amount" => 500],
            ["type" => "Meal & Lodging", "description" => "Lunch", "amount" => 70],
            ["type" => "Postage, Telephone & Fax", "description" => "PLDT Expense", "amount" => 3000],
            ["type" => "Repairs & Maintenance", "description" => "Machine Parts", "amount" => 5000],
            ["type" => "Representation", "description" => "Representation Expense", "amount" => 400],
            ["type" => "Supplies", "description" => "Office Supplies", "amount" => 500],
            ["type" => "Transportation", "description" => "Bus Fare", "amount" => 400],
            ["type" => "Miscellaneous", "description" => "Miscellaneous Expense", "amount" => 400],
        ]
    );

    $dates = $faker->randomElement(
        [
            // "2020-01-01",
            // "2020-02-01",
            // "2020-03-01",
            // "2020-04-01",
            // "2020-05-01",
            // "2020-06-01",
            // "2020-07-01",
            // "2020-08-01",
            // "2020-09-01",
            // "2020-10-01",
            // "2020-11-01",

            // "2020-01-15",
            // "2020-02-15",
            // "2020-03-15",
            // "2020-04-15",
            // "2020-05-15",
            // "2020-06-15",
            // "2020-07-15",
            // "2020-08-15",
            // "2020-09-15",
            // "2020-10-15",
            // "2020-11-15",

            "2021-01-01"
        ]
    );

    $expense_type = ExpenseType::where('name', $expenses["type"])->first();

    $user = User::find(1);

    $reimbursable_amount = $user->remaining_fund < $expenses["amount"] ? abs($user->remaining_fund - $expenses["amount"]) : 0;

    return [
        'code' => null,
        'description' => $expenses["description"],
        'amount' => $expenses["amount"],
        'reimbursable_amount' => $expenses["amount"],
        'receipt_number' => Str::random(10),
        'date' => $dates,
        'expense_type_id' => $expense_type->id,
        'user_id' => rand(1, 10),
        'vendor_id' => rand(1, 10),
        'created_by' => 1,
        "updated_by" => 1,
    ];
});
