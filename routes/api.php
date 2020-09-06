<?php

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

Route::post('/register', 'API\v1\AuthController@register');

Route::post('/login', 'API\v1\AuthController@login');

Route::middleware('auth:api')->group(function () {

    Route::post('/logout', 'API\v1\AuthController@logout');

    Route::get('/user', 'API\v1\AuthController@user');

    Route::apiResource('/users', 'API\v1\UserController');
});
