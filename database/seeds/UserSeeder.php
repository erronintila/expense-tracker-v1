<?php

use App\Models\Employee;
use App\Models\Job;
use App\Models\ExpenseType;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use anlutro\LaravelSettings\Facade as Setting;

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
            // "employees",
            "vendors",
            "expense types",
            "payments",
            "expense reports",
            "expenses",
            // "adjustments",
            "activity logs",
            "taxes",
            "settings",
            "authentication",
        ];

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create User Permissions
         * -------------------------------------------------------------------------------------------------------------------------
         */

        foreach ($models as $model) {

            if ($model == "activity logs") {
                Permission::create(['name' => 'export ' . $model, 'category' => $model]);
                Permission::create(['name' => 'delete ' . $model, 'category' => $model]);
                Permission::create(['name' => 'view all ' . $model, 'category' => $model]);
                continue;
            }

            if ($model == "taxes") {
                Permission::create(['name' => 'modify taxes on expense', 'category' => $model]);
                continue;
            }

            if ($model == "settings") {
                Permission::create(['name' => 'manage ' . $model, 'category' => $model]);
                continue;
            }

            if ($model == "authentication") {
                // Permission::create(['name' => 'login application', 'category' => $model]);
                continue;
            }

            // if ($model == "users") {
            //     // Permission::create(['name' => 'verify users', 'category' => $model]);
            //     // Permission::create(['name' => 'restore users', 'category' => $model]);
            //     Permission::create(['name' => 'reset user passwords', 'category' => $model]);
            //     Permission::create(['name' => 'edit user fund', 'category' => $model]);
            //     Permission::create(['name' => 'restore users', 'category' => $model]);
            //     // continue;
            // }

            Permission::create(['name' => 'add ' . $model, 'category' => $model]);
            Permission::create(['name' => 'edit ' . $model, 'category' => $model]);
            Permission::create(['name' => 'delete ' . $model, 'category' => $model]);
            Permission::create(['name' => 'view ' . $model, 'category' => $model]);
            Permission::create(['name' => 'view all ' . $model, 'category' => $model]);
            Permission::create(['name' => 'export ' . $model, 'category' => $model]);

            if ($model == "users") {
                // Permission::create(['name' => 'verify users', 'category' => $model]);
                // Permission::create(['name' => 'restore users', 'category' => $model]);
                Permission::create(['name' => 'reset user passwords', 'category' => $model]);
                Permission::create(['name' => 'edit users fund', 'category' => $model]);
                Permission::create(['name' => 'restore users', 'category' => $model]);
            }

            // if ($model == "employees") {
            //     Permission::create(['name' => 'edit employees fund', 'category' => $model]);
            //     Permission::create(['name' => 'restore employees', 'category' => $model]);
            // }

            if ($model == "expenses") {
                Permission::create(['name' => 'add expenses beyond encoding period', 'category' => $model]);
                Permission::create(['name' => 'add expenses beyond limit', 'category' => $model]);
                // Permission::create(['name' => 'add expense notes', 'category' => $model]);
            }

            if ($model == "expense reports") {
                Permission::create(['name' => 'submit expense reports', 'category' => $model]);
                Permission::create(['name' => 'submit expense reports beyond due date', 'category' => $model]);
                Permission::create(['name' => 'approve expense reports', 'category' => $model]);
                Permission::create(['name' => 'approve expense reports beyond due date', 'category' => $model]);
                Permission::create(['name' => 'reject expense reports', 'category' => $model]);
                Permission::create(['name' => 'duplicate expense reports', 'category' => $model]);

                // Permission::create(['name' => 'add expense report notes', 'category' => $model]);
            }

            if ($model == "payments") {
                Permission::create(['name' => 'receive payments', 'category' => $model]);
                // Permission::create(['name' => 'add advance' . $model, 'category' => $model]);
                // Permission::create(['name' => 'approve payments', 'category' => $model]);
            }
        }

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create User Roles
         * -------------------------------------------------------------------------------------------------------------------------
         */

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
        $roleUser->givePermissionTo("view payments");
        $roleUser->givePermissionTo("view all payments");
        $roleUser->givePermissionTo("receive payments");
        $roleUser->givePermissionTo("duplicate expense reports");
        $roleUser->givePermissionTo("add vendors");
        // $roleUser->givePermissionTo("edit users");

        $roleSuperAdmin = Role::create(['name' => 'Super Admin']);

        foreach (Permission::all() as $permission) {
            $roleSuperAdmin->givePermissionTo($permission->pluck("name"));
        }

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create Default User : Superadmin
         * -------------------------------------------------------------------------------------------------------------------------
         */

        // create users and assign roles

        $user = User::create([
            'code' => generate_code(User::class, "USR", 10),
            // 'name' => 'Super Admin',

            'first_name' => '',
            'middle_name' => '',
            'last_name' => 'Super Admin',
            'suffix' => '',
            'gender' => 'Male',
            'birthdate' => date('Y-m-d'),
            'mobile_number' => null,
            'telephone_number' => null,
            'email' => 'superadmin@superadmin.com',
            'address' => '',
            'job_id' => null,

            'username' => 'superadmin',
            'email' => 'superadmin@superadmin.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'is_admin' => true,
            'is_superadmin' => true,
            'can_login' => true,
            'type' => 'administrator',
        ]);

        $user->assignRole($roleSuperAdmin);

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create New Employee
         * -------------------------------------------------------------------------------------------------------------------------
         */

        // $user = User::create([
        //     'code' => generate_code(User::class, "USR", 10),
        //     'name' => 'Intila, Erron Cerdania1',
        //     'username' => 'erronintila1',
        //     'email' => 'erronintila1@gmail.com',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password'),
        //     'remember_token' => Str::random(10),
        //     'is_admin' => true,
        //     'can_login' => true,
        // ]);

        // foreach (Permission::all() as $permission) {
        //     $user->givePermissionTo($permission->pluck("name"));
        // }

        // // $user->assignRole('Standard User');

        // $employee = Employee::create([
        //     'code' => generate_code(Employee::class, "EMP", 10),
        //     'first_name' => "Erron1",
        //     'middle_name' => "Cerdania1",
        //     'last_name' => "Intila1",
        //     'suffix' => null,
        //     'gender' => "Male",
        //     'birthdate' => "1996-08-19",
        //     'mobile_number' => "09567653221",
        //     'telephone_number' => null,
        //     'email' => 'erronintila1@gmail.com',
        //     'address' => "Polomolok, South Cotabato",
        //     "job_id" => Job::where('name', "Junior Software Developer")->first()->id,
        //     "user_id" => $user->id,
        //     "fund" => 1000,
        //     "remaining_fund" => 1000,
        // ]);

        // //foreach (ExpenseType::all() as $expense_types) {
        //    $employee->expense_types()->sync(ExpenseType::all());
        // //}

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create Settings
         * -------------------------------------------------------------------------------------------------------------------------
         */

        Setting::set("expense_encoding_period", 2);
        Setting::set("submission_period", "Weekly");
        Setting::set("approval_period", 3);
        Setting::set("tax_rate", 12);
        Setting::save();
    }
}
