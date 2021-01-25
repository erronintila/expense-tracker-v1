<?php

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | API RESOURCES ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::apiResources(
        [
            'activity_logs' => 'API\v1\ActivityLogController',

            // 'adjustments' => 'API\v1\AdjustmentController',

            'departments' => 'API\v1\DepartmentController',

            'employees' => 'API\v1\EmployeeController',

            'expense_types' => 'API\v1\ExpenseTypeController',

            'sub_types' => 'API\v1\SubTypeController',

            'expenses' => 'API\v1\ExpenseController',

            'jobs' => 'API\v1\JobController',

            'payments' => 'API\v1\PaymentController',

            'expense_reports' => 'API\v1\ExpenseReportController',

            'users' => 'API\v1\UserController',

            'vendors' => 'API\v1\VendorController',

            'taxes' => 'API\v1\TaxController',

            'settings' => 'API\v1\SettingController',
        ]
    );

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | DEPARTMENT CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/departments', 'API\v1\DepartmentController@getDepartments');

    Route::put('/departments/restore/{id}', 'API\v1\DepartmentController@restore');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EMPLOYEE CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/employees', 'API\v1\EmployeeController@getEmployees');

    Route::get('/data/validateFund', 'API\v1\EmployeeController@validateFund');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expenses', 'API\v1\ExpenseController@getExpenses');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE REPORT CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_reports', 'API\v1\ExpenseReportController@getExpenseReports');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE TYPE CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_types', 'API\v1\ExpenseTypeController@getExpenseTypes');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | JOB CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/jobs', 'API\v1\JobController@getJobs');

    Route::put('/jobs/restore/{id}', 'API\v1\JobController@restore');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | PAYMENT CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | VENDOR CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/vendors', 'API\v1\VendorController@getVendors');

    Route::put('/vendors/restore/{id}', 'API\v1\VendorController@restore');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | USER CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/user', function (Request $request) {

        // $user = $request->user();
        $user = User::with(['employee' => function ($query) {
            $query->withTrashed();
            $query->with(['job' => function ($query) {
                $query->withTrashed();
                $query->with(['department' => function ($query) {
                    $query->withTrashed();
                }]);
            }]);
        }])
        ->findOrFail(Auth::id());

        return new UserResource($user);
    });

    Route::get('/permissions', function (Request $request) {
        return $request->user->getAllPermissions();
    });

    Route::get('/data/users', 'API\v1\UserController@getUsers');

    Route::get('/data/permissions', 'API\v1\UserController@getPermissions');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | DASHBOARD CONTROLLER ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_types_expenses_summary', 'API\v1\DashboardController@expense_types_expenses_summary');

    Route::get('/data/employees_expenses_summary', 'API\v1\DashboardController@employees_expenses_summary');

    Route::get('/data/departments_expenses_summary', 'API\v1\DashboardController@departments_expenses_summary');

    Route::get('/data/total_expenses', 'API\v1\DashboardController@total_expenses');

    Route::get('/data/expense_stats', 'API\v1\DashboardController@expense_stats');

    Route::get('/data/expenses_summary', 'API\v1\DashboardController@expenses_summary');

    Route::get('/data/statistics', 'API\v1\DashboardController@statistics');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | PRINT CONTROLLER ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/print', 'API\v1\PrintController@print');

    Route::get('/data/print_report', 'API\v1\PrintController@print_expense_reports');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL LIBRARY/PACKAGE ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    // Route::get('/users/export', 'API\v1\UserController@export'); // Excel Export Package

    Route::get('/employees/export', 'API\v1\EmployeeController@export'); // Excel Export Package
});
