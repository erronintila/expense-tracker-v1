<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
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
            'name'      => ['required', 'max:200'],
            'username'  => ['required', Rule::unique('users')->ignore($id, 'id'), 'max:150'],
            'email'     => ['required', 'email', Rule::unique('users')->ignore($id, 'id'), 'max:255'],
            'password'  => ['required', 'min:8', 'max:255', 'confirmed'],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search ?? "";
        $sortBy = $request->sortBy ?? "name";
        $sortType = $request->sortType ?? "asc";
        $itemsPerPage = $request->itemsPerPage ?? 10;

        $users = User::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $users = $users->onlyTrashed();
                    break;
                case 'Verified':
                    $users = $users->where('email_verified_at', '<>', null);
                    break;
                case 'Unverified':
                    $users = $users->where('email_verified_at', null);
                    break;
                default:
                    $users = $users;
                    break;
            }
        }

        $users = $users->where(function ($query) use ($search) {
            $query->where("name", "%" . $search . "%");
            $query->orWhere("username", "%" . $search . "%");
            $query->orWhere("email", "%" . $search . "%");
        });
        $users = $users->paginate($itemsPerPage);

        return UserResource::collection($users);

        // $users = User::orderBy('name')->get();
        // $count = count($users);

        // if (request()->has('status')) {
        //     switch ($request->status) {
        //         case 'Archived':
        //             $users = User::onlyTrashed()->orderBy('name')->limit($request->limit ?? $count)->get();
        //             break;
        //         case 'Verified':
        //             $users = User::where('email_verified_at', '<>', null)->orderBy('name')->limit($request->limit ?? $count)->get();
        //             break;
        //         case 'Unverified':
        //             $users = User::where('email_verified_at', null)->orderBy('name')->limit($request->limit ?? $count)->get();
        //             break;
        //         default:
        //             $users = User::orderBy('name')->limit($request->limit ?? $count)->get();
        //             break;
        //     }
        // }

        // return response(
        //     [
        //         'data' => UserResource::collection($users),
        //         'message' => 'Users retrieved successfully'
        //     ],
        //     200
        // );
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
    public function show(Request $request, $id)
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
        switch ($request->action) {
            case 'restore':
                $user = User::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            case 'password_reset':
                $user = User::whereIn('id', $request->ids)
                    ->update(array('password' => Hash::make('password')));

                break;
            case 'verify':
                $user = User::whereIn('id', $request->ids)
                    ->update(array('verified_at' => now()));

                break;
            default:
                $this->validator($request->all(), $id)->validate();

                $user = User::findOrFail($id);

                $user->name     = $request['name'];
                $user->username = $request['username'];
                $user->email    = $request['email'];
                $user->password = Hash::make($request['password']);

                $user->save();

                break;
        }

        return response(
            [
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
    public function destroy(Request $request, $id)
    {
        $user = User::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
