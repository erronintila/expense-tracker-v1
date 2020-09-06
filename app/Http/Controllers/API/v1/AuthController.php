<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
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
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $authenticated_user = Auth::user();

            $user = User::find($authenticated_user->id);

            $token = $user->createToken('authToken')->accessToken;

            return response()->json([
                'user_id' => $user->id,
                'user' => $user->name,
                'access_token' => $token
            ]);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

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
