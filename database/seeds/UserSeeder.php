<?php

use App\Models\Employee;
use App\Models\Job;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

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

        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $models = [
            "users",
            // "permissions",
            "departments",
            "jobs",
            "employees",
            "vendors",
            "expense types",
            "payments",
            "expense reports",
            "expenses",
            "adjustments",
            "activity logs",
        ];

        foreach ($models as $model) {
            // create permissions
            if ($model == "activity logs") {
                Permission::create(['name' => 'delete ' . $model]);
                Permission::create(['name' => 'view all ' . $model]);
                continue;
            }

            if ($model == "users") {
                // Permission::create(['name' => 'verify users']);
                // Permission::create(['name' => 'restore users']);
                Permission::create(['name' => 'reset user passwords']);
                continue;
            }

            Permission::create(['name' => 'add ' . $model]);
            Permission::create(['name' => 'edit ' . $model]);
            Permission::create(['name' => 'delete ' . $model]);
            Permission::create(['name' => 'view ' . $model]);
            Permission::create(['name' => 'view all ' . $model]);

            if ($model == "employees") {
                Permission::create(['name' => 'restore employees']);
            }

            if ($model == "expense reports") {
                Permission::create(['name' => 'approve expense reports']);
                Permission::create(['name' => 'submit expense reports']);
                // Permission::create(['name' => 'duplicate expense reports']);
            }

            // if ($model == "payments") {
            //     Permission::create(['name' => 'approve payments']);
            // }
        }

        // Permission::create(['name' => 'view admin dashboard']);
        // Permission::create(['name' => 'view dashboard']);
        // Permission::create(['name' => 'login']);

        // create roles and assign existing permissions
        $roleUser = Role::create(['name' => 'Standard User']);
        $roleUser->givePermissionTo("add expenses");
        $roleUser->givePermissionTo("edit expenses");
        $roleUser->givePermissionTo("delete expenses");
        $roleUser->givePermissionTo("view expenses");
        $roleUser->givePermissionTo("view all expenses");
        $roleUser->givePermissionTo("add expense reports");
        $roleUser->givePermissionTo("edit expense reports");
        $roleUser->givePermissionTo("delete expense reports");
        $roleUser->givePermissionTo("view expense reports");
        $roleUser->givePermissionTo("view all expense reports");
        $roleUser->givePermissionTo("submit expense reports");
        // $roleUser->givePermissionTo("duplicate expense reports");
        $roleUser->givePermissionTo("add vendors");
        $roleUser->givePermissionTo("edit employees");

        // $roleAdmin = Role::create(['name' => 'Administrator']);

        $roleSuperAdmin = Role::create(['name' => 'Super Admin']);

        foreach (Permission::all() as $permission) {
            // $roleAdmin->givePermissionTo($permission->pluck("name"));
            $roleSuperAdmin->givePermissionTo($permission->pluck("name"));
        }

        $user = User::create([
            'name' => 'Super Admin',
            'username' => 'superadmin',
            'email' => 'superadmin@superadmin.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'is_admin' => true,
            'can_login' => true,
        ]);
        $user->assignRole($roleSuperAdmin);

        // $user1 = User::create([
        //     'name' => 'Intila, Erron Cerdania',
        //     'username' => 'erronintila',
        //     'email' => 'erronintila@gmail.com',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password'),
        //     'remember_token' => Str::random(10),
        //     'is_admin' => false,
        //     'can_login' => true,
        // ]);
        // $user1->assignRole('Standard User');

        // Employee::create([
        //     'code' => "19018",
        //     'first_name' => "Erron",
        //     'middle_name' => "Cerdania",
        //     'last_name' => "Intila",
        //     'suffix' => null,
        //     'gender' => "Male",
        //     'birthdate' => "1996-08-19",
        //     'mobile_number' => "09567653221",
        //     'telephone_number' => null,
        //     'email' => 'erronintila@gmail.com',
        //     'address' => "Polomolok, South Cotabato",
        //     "job_id" => Job::where('name', "Junior Software Developer")->first()->id,
        //     "user_id" => $user1->id,
        // ]);

        // $user = User::create([
        //     'name' => 'Administrator',
        //     'username' => 'administrator',
        //     'email' => 'administrator@administrator.com',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password'),
        //     'remember_token' => Str::random(10),
        //     'is_admin' => true,
        //     'can_login' => true,
        // ]);
        // $user->assignRole($roleAdmin);

        // $users = [
        //     [
        //         'name' => 'admin',
        //         'username' => 'admin',
        //         'email' =>  'admin@admin.com',
        //         'email_verified_at' => now(),
        //         'password' => Hash::make('password'),
        //         'remember_token' => Str::random(10),
        //         'is_admin' => true,
        //         'can_login' => true,
        //     ],
        //     [
        //         'name' => 'user',
        //         'username' => 'user',
        //         'email' => 'user@user.com',
        //         'email_verified_at' => now(),
        //         'password' => Hash::make('password'),
        //         'remember_token' => Str::random(10),
        //         'can_login' => true,
        //     ],
        // ];

        // foreach ($users as $user) {
        //     User::create($user);
        // }
    }
}
