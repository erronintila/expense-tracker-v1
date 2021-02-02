<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Traits\ApiResponse;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ApiResponse;
    
    /**
     * Register new user
     *
     * @param  mixed $request
     * @return void
     */
    public function register(Request $request)
    {
        $request->validate([

            'name'      => ['required', 'max:200'],

            'username'  => ['required', 'unique:users', 'max:150'],

            'email'     => ['required', 'email', 'unique:users', 'max:255'],

            'password'  => ['required', 'min:8', 'max:255', 'confirmed'],
        ]);

        $user = User::create([

            'name' => request("name"),

            'username' => request("username"),

            'email' => request("email"),

            'password' => bcrypt(request("password"))
        ]);

        return response([

            'data' => $user,

            'message' => 'Registered successfully'

        ], 200);
    }
    
    /**
     * Login User
     *
     * @param  mixed $request
     * @return void
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'username' => 'required|exists:users,username',

            'password' => 'required'
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $authenticated_user = Auth::user();

            if ($authenticated_user->email_verified_at == null) {
                return response()->json($validator->errors(), 422);
            }

            if (!$authenticated_user->can_login) {
                return response()->json($validator->errors(), 422);
            }

            $user = User::withTrashed()->findOrFail($authenticated_user->id);

            $token = $user->createToken('authToken')->accessToken;

            return response()->json([

                'user_id' => $user->id,

                'user' => $user,

                'access_token' => $token,

                'permissions' => $user->getAllPermissions()->pluck("name"),
            ]);
        }

        return response()->json($validator->errors(), 422);
    }
    
    /**
     * Logout User
     *
     * @param  mixed $request
     * @return void
     */
    public function logout(Request $request)
    {
        $request->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([

            'message' => 'Successfully logged out'
        ]);
    }
    
    /**
     * Get Logged in User
     *
     * @param  mixed $request
     * @return void
     */
    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
    
    /**
     * Get Logged in User Permissions
     *
     * @param  mixed $request
     * @return void
     */
    public function userPermissions(Request $request)
    {
        return $request->user->getAllPermissions();
    }
}
