<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserContoller extends Controller
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id)
    {
        return Validator::make($data, [
            'name'      => ['required', 'max:255'],
            'username'  => ['required', Rule::unique('users')->ignore($id, 'id'), 'max:255'],
            'email'     => ['required', 'email', Rule::unique('users')->ignore($id, 'id'), 'max:255'],
            'password'  => ['required', 'min:8'],
            // 'password'  => ['required', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all();

        return response(
            [
                'data' => UserResource::collection($user),
                'message' => 'Users retrieved successfully'
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validator($request->all(), null)->validate();

        $user = new User();

        $user->name     = $request['name'];
        $user->username = $request['username'];
        $user->email    = $request['email'];
        $user->password = Hash::make($request['password']);

        $user->save();

        return response(
            [
                'data' => new UserResource($user),
                'message' => 'Created successfully'
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);

        return response(
            [
                'data' => new UserResource($user),
                'message' => 'Retrieved successfully'
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validator($request->all(), $id)->validate();

        $user = User::findOrFail($id);

        $user->name     = $request['name'];
        $user->username = $request['username'];
        $user->email    = $request['email'];
        $user->password = Hash::make($request['password']);

        $user->save();

        return response(
            [
                'data' => new UserResource($user),
                'message' => 'Updated successfully'
            ],
            201
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response(
            [
                'data' => new UserResource($user),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
