<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'      => ['required', 'max:200'],
            'username'  => ['required', 'unique:users', 'max:150'],
            'email'     => ['required', 'email', 'unique:users', 'max:255'],
            'password'  => ['required', 'min:8', 'max:255', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response([
            'data' => $user,
            'message' => 'Registered successfully'
        ], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $authenticated_user = Auth::user();

            $user = User::find($authenticated_user->id);

            $token = $user->createToken('authToken')->accessToken;

            return response()->json([
                'user_id' => $user->id,
                'user' => $user,
                'access_token' => $token
            ]);
        }

        return response()->json([$validator->errors()], 401);
    }

    public function logout(Request $request)
    {
        // $request->user()->token()->revoke();

        $request->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function user(Request $request)
    {
        // Get logged in user
        return response()->json($request->user());
    }
}
