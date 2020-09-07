<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
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
            'first_name' => ['required', 'string', 'max:255'],
            'middle_name' => ['nullable', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'suffix' => ['nullable', 'max:30'],
            'gender' => ['nullable', 'max:10'],
            'birthdate' => ['required', 'string', 'max:255'],
            'address' => ['nullable'],
            'phone' => ['nullable', 'max:30'],
            'job_id' => ['required'],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $user = User::all();

        $user = User::orderBy('name')->get();
        $count = count($user);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $user = User::onlyTrashed()->orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
                case 'Verified':
                    $user = User::where('email_verified_at', '<>', null)->orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
                case 'Unverified':
                    $user = User::where('email_verified_at', null)->orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
                default:
                    $user = User::orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
            }
        }

        return response(
            [
                'data' => EmployeeResource::collection($user),
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
                'data' => new EmployeeResource($user),
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
                'data' => new EmployeeResource($user),
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
                'data' => new EmployeeResource($user),
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
                'data' => new EmployeeResource($user),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
