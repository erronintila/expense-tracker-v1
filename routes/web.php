<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path}', 'AppController@index')->where('path', '.*');

Auth::routes();

// Route::get('/employees/export', 'API\v1\EmployeeController@export');

// Route::get('/home', 'HomeController@index')->name('home');
