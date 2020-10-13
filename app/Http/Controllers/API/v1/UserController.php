<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['permission:view all users'], ['only' => ['index']]);
        // $this->middleware(['permission:view users'], ['only' => ['show']]);
        $this->middleware(['permission:add employees'], ['only' => ['create', 'store']]);
        // $this->middleware(['permission:edit users'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete employees'], ['only' => ['destroy']]);
    }

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

            'role' => ['required'],
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

            $query->where("name", "like", "%" . $search . "%");

            $query->orWhere("username", "like", "%" . $search . "%");

            $query->orWhere("email", "like", "%" . $search . "%");
        });

        $users = $users->paginate($itemsPerPage);

        return UserResource::collection($users);
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

        $user->is_admin = $request['is_admin'];

        $user->can_login = $request['can_login'];

        $user->password = Hash::make($request['password']);

        $user->save();

        if (request()->has("employee_id")) {

            if ($request->employee_id > 0) {

                $employee = Employee::find($request->employee_id);

                $employee->user_id = $user->id;

                $employee->save();
            }
        }

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
        $user = User::withTrashed()->findOrFail($id);

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

                if (!app("auth")->user()->hasPermissionTo('reset user passwords')) {

                    abort(403);
                }

                $user = User::whereIn('id', $request->ids)
                    ->update(array('password' => Hash::make('password')));

                break;
            case 'verify':

                $user = User::whereIn('id', $request->ids)
                    ->update(array('email_verified_at' => now()));

                break;
            case 'change_password':

                $validator = Validator::make($request->all(), [
                    'old_password' => [
                        'required', function ($attribute, $value, $fail) {
                            if (!Hash::check($value, Auth::user()->password)) {
                                $fail('Old Password didn\'t match');
                            }
                        },
                    ],
                    'password' => ['required', 'confirmed', 'string', 'max:255'],
                ]);

                if ($validator->fails()) {

                    return redirect()->back()->withInput()->withErrors($validator);
                }

                $user = User::find($id);

                $user->password = Hash::make($request->password);

                $user->save();

                break;
            default:

                if (!app("auth")->user()->hasPermissionTo('edit employees')) {

                    abort(403);
                }

                $request->validate([

                    'name'      => ['required', 'max:200'],

                    'username'  => ['required', Rule::unique('users')->ignore($id, 'id'), 'max:150'],

                    'email'     => ['required', 'email', Rule::unique('users')->ignore($id, 'id'), 'max:255'],
                ]);

                $user = User::findOrFail($id);

                $user->name = $request->name;

                $user->username = $request->username;

                $user->email = $request->email;

                $user->is_admin = $request->is_admin;

                $user->can_login = $request->can_login;

                $user->save();

                if ($user->employee !== null) {

                    $user->employee->user_id = null;

                    $user->employee->save();
                }

                if (request()->has("employee_id")) {

                    if ($request->employee_id > 0) {

                        $empid = $request->employee_id;

                        $employee = Employee::find($empid);

                        $employee->user_id = $user->id;

                        $employee->save();
                    }
                }

                if (request()->has('employee') && $user->employee != null) {

                    $user->employee->first_name = $request->employee["first_name"];

                    $user->employee->middle_name = $request->employee["middle_name"];

                    $user->employee->last_name = $request->employee["last_name"];

                    $user->employee->suffix = $request->employee["suffix"] == null ? "" : $request->employee["suffix"];

                    $user->employee->gender = $request->employee["gender"];

                    $user->employee->birthdate = $request->employee["birthdate"];

                    $user->employee->mobile_number = $request->employee["mobile_number"];

                    $user->employee->telephone_number = $request->employee["telephone_number"];

                    $user->employee->email = $request->employee["email"];

                    $user->employee->address = $request->employee["address"];

                    $user->employee->save();
                }

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
        if (request()->has("ids")) {
            foreach ($request->ids as $id) {
                $user = User::findOrFail($id);

                if (!($user->hasRole('Super Admin'))) {
                    $user->delete();
                }
            }
        } else {
            $user = User::findOrFail($id);

            if (!($user->hasRole('Super Admin'))) {
                $user->delete();
            }
        }

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
