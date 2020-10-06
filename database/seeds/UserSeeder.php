<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(\App\User::class, 100)->create();

        $users = [
            [
                'name' => 'admin',
                'username' => 'admin',
                'email' =>  'admin@admin.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'is_admin' => true,
                'can_login' => true,
            ],
            [
                'name' => 'user',
                'username' => 'user',
                'email' => 'user@user.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'can_login' => true,
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
