<?php

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

            if ($model == "expenses") {
                Permission::create(['name' => 'add expenses beyond encoding period', 'category' => $model]);
                Permission::create(['name' => 'add expenses beyond limit', 'category' => $model]);
                Permission::create(['name' => 'set reimbursable amount', 'category' => $model]);
                Permission::create(['name' => 'restore expenses', 'category' => $model]);
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

        $roleUser = Role::create(['name' => 'standard user']);
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
        $roleUser->givePermissionTo("set reimbursable amount");
        $roleUser->givePermissionTo("add expenses beyond encoding period");
        $roleUser->givePermissionTo("submit expense reports beyond due date");
        $roleUser->givePermissionTo("add expenses beyond limit");
        $roleUser->givePermissionTo("restore expenses");
        // $roleUser->givePermissionTo("edit users");

        $roleSuperAdmin = Role::create(['name' => 'administrator']);

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

            'first_name' => 'Super Admin',
            'middle_name' => '',
            'last_name' => 'Super Admin',
            'suffix' => '',
            'gender' => 'Male',
            'birthdate' => date('Y-m-d'),
            'mobile_number' => 0,
            'telephone_number' => null,
            'email' => 'superadmin@superadmin.com',
            'address' => '',
            'job_id' => null,

            'username' => 'superadmin',
            'email_verified_at' => null,
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
         * Create New User
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

        /**
         * -------------------------------------------------------------------------------------------------------------------------
         * Create Settings
         * -------------------------------------------------------------------------------------------------------------------------
         */

        Setting::set("expense_encoding_period", 2);
        Setting::set("submission_period", "Weekly");
        Setting::set("approval_period", 3);
        Setting::set("tax_rate", 12);
        Setting::set("expense_report.report_no.prefix", 'EXR');
        Setting::set("expense_report.report_no.num_length", 10);

        Setting::set("expense_report.print_format.pageSize.width", 11.69);
        Setting::set("expense_report.print_format.pageSize.height", 8.27);
        Setting::set("expense_report.print_format.pageOrientation", 'landscape');
        Setting::set("expense_report.print_format.pageMargins.left", 0.5);
        Setting::set("expense_report.print_format.pageMargins.top", 0.5);
        Setting::set("expense_report.print_format.pageMargins.right", 0.5);
        Setting::set("expense_report.print_format.pageMargins.bottom", 0.5);
        Setting::set("expense_report.print_format.defaultStyle.font", 'Roboto');
        // Setting::set("expense_report.print_format.background.alignment", 'right');
        Setting::set("expense_report.print_format.background.width", 2.2);
        Setting::set("expense_report.print_format.background.height", 0);
        Setting::set("expense_report.print_format.background.image", null);
        // Setting::set("expense_report.print_format.background.margin.left", 0.5);
        // Setting::set("expense_report.print_format.background.margin.top", 0.4);
        // Setting::set("expense_report.print_format.background.margin.right", 0);
        // Setting::set("expense_report.print_format.background.margin.bottom", 0);
        
        Setting::save();
    }
}
