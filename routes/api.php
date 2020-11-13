<?php

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
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
    | USER INFORMATION ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/user', function (Request $request) {

        return new UserResource($request->user());
    });

    Route::get('/permissions', function (Request $request) {

        return $request->user->getAllPermissions();
    });

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL LIBRARY/PACKAGE ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    // Route::get('/users/export', 'API\v1\UserController@export'); // Excel Export Package

    Route::get('/employees/export', 'API\v1\EmployeeController@export'); // Excel Export Package

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
    | DATA CONTROLLER ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/test', 'API\v1\DataController@test');

    Route::get('/data/print', 'API\v1\DataController@print');

    Route::get('/data/users', 'API\v1\DataController@users');

    // Route::get('/data/adjustments', 'API\v1\DataController@adjustments');

    Route::get('/data/employees', 'API\v1\DataController@employees');

    Route::get('/data/vendors', 'API\v1\DataController@vendors');

    Route::get('/data/departments', 'API\v1\DataController@departments');

    Route::get('/data/expense_types', 'API\v1\DataController@expense_types');

    Route::get('/data/jobs', 'API\v1\DataController@jobs');

    Route::get('/data/expenses', 'API\v1\DataController@expenses');

    Route::get('/data/expense_reports', 'API\v1\DataController@expense_reports');

    Route::get('/data/expense_types_expenses_summary', 'API\v1\DataController@expense_types_expenses_summary');

    Route::get('/data/employees_expenses_summary', 'API\v1\DataController@employees_expenses_summary');

    Route::get('/data/departments_expenses_summary', 'API\v1\DataController@departments_expenses_summary');

    Route::get('/data/total_expenses', 'API\v1\DataController@total_expenses');

    Route::get('/data/expenses_summary', 'API\v1\DataController@expenses_summary');

    Route::get('/data/expense_stats', 'API\v1\DataController@expense_stats');

    Route::get('/data/permissions', 'API\v1\DataController@permissions');

    Route::get('/data/validateFund', 'API\v1\DataController@validateFund');
});
