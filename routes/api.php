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
            'departments' => 'API\v1\DepartmentController',
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
            'notifications' => 'API\v1\NotificationController'
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
    | EXPENSE CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expenses', 'API\v1\ExpenseController@getExpenses');
    Route::put('/expenses/restore/{id}', 'API\v1\ExpenseController@restore');
    Route::get('/summary/expenses', 'API\v1\ExpenseController@getExpenseSummary');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE REPORT CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_reports', 'API\v1\ExpenseReportController@getExpenseReports');
    Route::put('/expense_reports/restore/{id}', 'API\v1\ExpenseReportController@restore');
    Route::put('/expense_reports/submit/{id}', 'API\v1\ExpenseReportController@submit');
    Route::put('/expense_reports/approve/{id}', 'API\v1\ExpenseReportController@approve');
    Route::put('/expense_reports/reject/{id}', 'API\v1\ExpenseReportController@reject');
    Route::put('/expense_reports/duplicate/{id}', 'API\v1\ExpenseReportController@duplicate');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE TYPE CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_types', 'API\v1\ExpenseTypeController@getExpenseTypes');
    Route::put('/expense_types/restore/{id}', 'API\v1\ExpenseTypeController@restore');

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

    Route::put('/payments/approve_payment/{id}', 'API\v1\PaymentController@approve_payment');
    Route::put('/payments/release_payment/{id}', 'API\v1\PaymentController@release_payment');
    Route::put('/payments/receive_payment/{id}', 'API\v1\PaymentController@receive_payment');
    Route::put('/payments/complete_payment/{id}', 'API\v1\PaymentController@complete_payment');
    Route::put('/payments/cancel_payment/{id}', 'API\v1\PaymentController@cancel_payment');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | VENDOR CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/vendors', 'API\v1\VendorController@getVendors');
    Route::put('/vendors/restore/{id}', 'API\v1\VendorController@restore');
    Route::put('/vendors/update_activation/{id}', 'API\v1\VendorController@update_activation');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | USER CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/user', 'API\v1\UserController@getLoggedInUser');

    // Route::get('/user', function (Request $request) {

    //     // $user = $request->user();
    //     $user = User::with(['job' => function ($query) {
    //         // $query->withTrashed();
    //         $query->with(['department' => function ($query) {
    //             // $query->withTrashed();
    //         }]);
    //         // $query->with(['expense_types' => function ($query) {
    //         //     $query->withTrashed();
    //         //     $query->with(['sub_types' => function ($query) {
    //         //         $query->withTrashed();
    //         //     }]);
    //         // }]);
    //     }])
    //     ->with(['expense_types' => function ($query) {
    //         // $query->withTrashed();
    //         $query->with(['sub_types' => function ($query) {
    //             // $query->withTrashed();
    //         }]);
    //     }])
    //     ->findOrFail(Auth::id());

    //     return new UserResource($user);
    // });

    Route::put('/users/restore/{id}', 'API\v1\UserController@restore');
    Route::put('/users/update_settings/{id}', 'API\v1\UserController@update_settings');
    Route::put('/users/update_fund/{id}', 'API\v1\UserController@update_fund');
    Route::put('/users/reset_password/{id}', 'API\v1\UserController@reset_password');
    Route::put('/users/verify_email/{id}', 'API\v1\UserController@verify_email');
    Route::put('/users/update_password/{id}', 'API\v1\UserController@update_password');
    Route::put('/users/update_profile/{id}', 'API\v1\UserController@update_profile');
    Route::put('/users/update_permissions/{id}', 'API\v1\UserController@update_permissions');
    Route::put('/users/update_activation/{id}', 'API\v1\UserController@update_activation');

    Route::get('/permissions', function (Request $request) {
        return $request->user->getAllPermissions();
    });

    Route::get('/data/users', 'API\v1\UserController@getUsers');
    Route::get('/data/permissions', 'API\v1\UserController@getPermissions');
    Route::get("/data/validateFund", 'API\v1\UserController@validateFund');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | NOTIFICATION CONTROLLER CUSTOM ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/check_notifications', 'API\v1\NotificationController@getNotifications');

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | DASHBOARD CONTROLLER ROUTES
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    Route::get('/data/expense_types_expenses_summary', 'API\v1\DashboardController@expense_types_expenses_summary');
    Route::get('/data/users_expenses_summary', 'API\v1\DashboardController@users_expenses_summary');
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
    // Route::get('/users/export', 'API\v1\userController@export'); // Excel Export Package
});
