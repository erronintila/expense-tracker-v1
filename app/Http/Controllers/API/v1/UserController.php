<?php

namespace App\Http\Controllers\API\v1;

use App\User;
use App\Models\Job;
use App\Models\ExpenseType;
use App\Traits\ApiResponse;
use App\Exports\UsersExport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Http\Resources\User\UserOnlyResource;
use App\Http\Resources\User\UserShowResource;
use App\Http\Requests\User\UserProfileUpdateRequest;
use App\Http\Requests\User\UserUpdatePasswordRequest;
use App\Http\Requests\User\UserPermissionUpdateRequest;

class UserController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        $this->middleware(['permission:view users'], ['only' => ['show']]);
        $this->middleware(['permission:add users'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit users'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete users'], ['only' => ['destroy']]);
        $this->middleware(['permission:edit users fund'], ['only' => ['update_fund']]);
        $this->middleware(['permission:reset user passwords'], ['only' => ['reset_password']]);
        $this->middleware(['permission:edit permissions'], ['only' => ['update_permissions']]);
        $this->middleware(['permission:set user activation'], ['only' => ['update_activation']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!request("isSelection") || !request()->has("isSelection")) {
            if (!app("auth")->user()->hasPermissionTo('view all users')) {
                abort(403);
            }
        }
        
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "last_name";
        $sortType = request("sortType") ?? "asc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $users = User::with(['job' => function ($query) {
            $query->with('department');
        }]);

        if (request()->has("with_expense_types")) {
            $users = $users->with(['expense_types' => function ($query) {
                $query->with('sub_types');
            }]);
        }

        switch ($sortBy) {
            case 'fullname':
                $users = $users->orderBy("last_name", $sortType);
                break;
            case 'job.name':
                $users = $users->orderBy("last_name", $sortType);
                break;
            case 'department.name':
                $users = $users->orderBy("last_name", $sortType);
                break;
            case 'revolving_fund':
                $users = $users->orderBy("fund", $sortType);
                break;
            default:
                $users = $users->orderBy($sortBy, $sortType);
                break;
        }

        if (request()->has('is_admin')) {
            $users = $users->where('is_admin', request("is_admin"));
        }

        if (request()->has('is_superadmin')) {
            $users = $users->where('is_superadmin', request("is_superadmin"));
        }

        if (request()->has('status')) {
            switch (request("status")) {
                case 'Archived':
                    $users = $users->onlyTrashed();
                    break;
                case 'Verified':
                    $users = $users->where('email_verified_at', '<>', null);
                    break;
                case 'Unverified':
                    $users = $users->where('email_verified_at', null);
                    break;
                case 'Inactive':
                    $users = $users->where('is_active', 0);
                    break;
                case 'Active':
                    $users = $users->where('is_active', 1);
                    break;
                default:
                    $users = $users;
                    break;
            }
        }

        if (request()->has("is_active")) {
            $users = $users->where('is_active', (request("is_active") || strtolower(request("is_active")) == 'true') ?? 1);
        }

        if (request()->has('department_id')) {
            if (request("department_id") > 0) {
                $jobs = Job::where('department_id', request("department_id"));
                $users = $users->whereIn('job_id', $jobs->pluck('id'));
            }
        }

        if (request()->has('job_id')) {
            if (request("job_id") > 0) {
                $users = $users->where("job_id", request("job_id"));
            }
        }

        $users = $users->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere("first_name", "like", "%" . $search . "%");
            $query->orWhere("middle_name", "like", "%" . $search . "%");
            $query->orWhere("last_name", "like", "%" . $search . "%");
            $query->orWhere("gender", "like", "%" . $search . "%");
            $query->orWhere("birthdate", "like", "%" . $search . "%");
            $query->orWhere("mobile_number", "like", "%" . $search . "%");
            $query->orWhere("username", "like", "%" . $search . "%");
            $query->orWhere("email", "like", "%" . $search . "%");
        });

        $users = $users->paginate($itemsPerPage);
        return UserOnlyResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $expense_types = ExpenseType::where("expense_type_id", null)->get();
            $job = Job::findOrFail($validated["job_id"]);

            $user = new User();
            $user->fill($validated);
            $user->code = $validated["code"] ?? generate_code(User::class, "USR", 10);
            $user->remaining_fund = $validated["fund"];
            $user->password = Hash::make($validated["password"]);
            $user->job()->associate($job);
            $user->save();

            foreach (request("permissions") as $permission) {
                $user->givePermissionTo($permission["name"]);
            }

            $user->expense_types()->sync($expense_types);
            return $user;
        });

        $message = "User created successfully";
        return $this->successResponse($data, $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $message = "User retrieved successfully.";

        if (request()->has("isDeleted")) {
            if (request("isDeleted")) {
                $user = User::withTrashed()
                ->with(['job' => function ($query) {
                    $query->withTrashed();
                    $query->with(['department' => function ($query2) {
                        $query2->withTrashed();
                    }]);
                }])
                ->with(['expense_types' => function ($query) {
                    $query->withTrashed();
                    $query->with(['sub_types' => function ($query) {
                        $query->withTrashed();
                    }]);
                }])
                ->where("is_superadmin", false)
                ->findOrFail($id);
            }
        } else {
            $user = User::with(['job' => function ($query) {
                $query->with('department');
            }])
            ->with(['expense_types' => function ($query) {
                $query->with('sub_types');
            }])
            ->where("is_superadmin", false)
            ->findOrFail($id);
        }

        return $this->successResponse(new UserResource($user), $message, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $job = Job::findOrFail($validated["job_id"]);

        $user = User::findOrFail($id);
        $user->fill($validated);
        $user->code = $validated["code"] ?? $user->code;
        $user->password = $user->password;
        $user->fund = $user->fund;
        $user->remaining_fund = $user->remaining_fund;
        $user->job()->associate($job);
        $user->save();

        $message = "User updated successfully";
        return $this->successResponse($user, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $data = User::findOrFail(explode(",", $id));
            $data->each->delete();
            return $data;
        });

        $message = "User(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | USER CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function restore(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = User::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            return $data;
        });

        $message = "User(s) restored successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function update_settings(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if (request()->has("expense_types")) {
            $user->expense_types()->sync(request("expense_types"));
        }

        activity('user')
            ->performedOn($user)
            ->withProperties(['attributes' => ["id" => $user->id, "code" => $user->code, "name" => $user->full_name], 'custom' => ['link' => null]])
            ->log("updated user settings");

        $message = "User settings updated successfully";
        return $this->successResponse($user, $message, 200);
    }

    public function update_fund(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->fund = request("fund");
        $user->remaining_fund = request("remaining_fund");
        $user->disableLogging();
        $user->save();

        activity('user')
            ->performedOn($user)
            ->withProperties(['attributes' => ["id" => $user->id, "code" => $user->code, "name" => $user->full_name], 'custom' => ['link' => null]])
            ->log("updated user fund");

        $message = "User fund updated successfully";
        return $this->successResponse($user, $message, 200);
    }

    public function reset_password(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = User::findOrFail($ids);
            $data->each(function ($item) {
                activity()->disableLogging();
                $item->password = Hash::make('password');
                $item->save();

                activity()->enableLogging();
                activity('user')
                    ->performedOn($item)
                    ->withProperties(['attributes' => ["id" => $item->id, "code" => $item->code, "name" => $item->full_name], 'custom' => ['link' => null]])
                    ->log("resetted user password");
            });
            return $data;
        });

        $message = "User(s) password resetted successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function verify_email(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = User::findOrFail($ids);
            $data->each(function ($item) {
                activity()->disableLogging();
                $item->email_verified_at = now();
                $item->save();

                activity()->enableLogging();
                activity('user')
                    ->performedOn($item)
                    ->withProperties(['attributes' => ["id" => $item->id, "code" => $item->code, "name" => $item->full_name], 'custom' => ['link' => null]])
                    ->log("verified user email");
            });
            return $data;
        });

        $message = "User(s) email verified successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function update_password(UserUpdatePasswordRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $user = User::findOrFail(auth()->user()->id);
            $user->disableLogging();
            $user->update(['password' => Hash::make($validated["password"])]);

            activity('user')
                ->performedOn($user)
                ->withProperties(['attributes' => ["id" => $user->id, "code" => $user->code, "name" => $user->full_name], 'custom' => ['link' => null]])
                ->log("updated user password");

            return $user;
        });

        $message = "User password updated successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function update_profile(UserProfileUpdateRequest $request, $id)
    {
        $validated = $request->validated(); // check validation

        $user = User::findOrFail($id);
        $user->fill($validated);
        $user->save();

        $message = "User profile updated successfully";
        return $this->successResponse($user, $message, 200);
    }
        
    /**
     * update_profile
     *
     * @param  mixed $request
     * @param  mixed $id
     * @return void
     */
    public function update_permissions(UserPermissionUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated, $id) {
            $user = User::findOrFail($id);
            $user->fill($validated);
            $user->save();

            if (request()->has("permissions")) {
                $user->syncPermissions([]);
                $user->syncRoles([]);
                foreach (request("permissions") as $permission) {
                    $user->givePermissionTo($permission["name"]);
                }
            }

            return $user;
        });

        return $this->successResponse($data, "User permissions updated successfully.", 200);
    }

    public function update_activation(Request $request, $id)
    {
        $activation = request("is_active") ? "activated" : "deactivated";

        $data = DB::transaction(function () use ($activation, $id) {
            $ids = explode(",", $id);
            $data = User::findOrFail($ids);
            $data->each(function ($item) use ($activation) {
                activity()->disableLogging();
                $item->is_active = request("is_active");
                $item->save();

                activity()->enableLogging();
                activity('user')
                    ->performedOn($item)
                    ->withProperties(['attributes' => ["id" => $item->id, "code" => $item->code, "name" => $item->full_name], 'custom' => ['link' => null]])
                    ->log("{$activation} user");
            });
            return $data;
        });

        $message = "User(s) {$activation} successfully";
        return $this->successResponse($data, $message, 200);
    }
    
    /**
     * Export User data to Excel
     *
     * @return void
     */
    public function export()
    {
        return Excel::download(new UsersExport, 'Users - Expense Tracker.xlsx');
    }

    /**
     * Get User Permissions
     *
     * @return void
     */
    public function getPermissions(Request $request)
    {
        switch (request("role")) {
            case 'Standard User':
                return Role::findByName("Standard User", 'web')->permissions ?? [];
                break;
            case 'Administrator':
                return Role::findByName("Administrator", 'web')->permissions ?? [];
                break;
            default:
                return Permission::all();
                break;
        }
    }
    
    /**
     * Get Users data
     *
     * @param  mixed $request
     * @return void
     */
    public function getUsers(Request $request)
    {
        if (request()->has('only')) {
            return $this->successResponse(User::orderBy("last_name")->where("is_superadmin", false)->get(), "", 200);
        }

        if (request()->has('expense_ref')) {
            $user = User::with(['job' => function ($query) {
                $query->with('department');
            }])
            ->with(['expense_types' => function ($query) {
                $query->with('sub_types');
            }])
            ->where("is_superadmin", false)
            ->findOrFail(request("user_id"));
    
            return response(
                [
                    'data' => new UserShowResource($user),
    
                    'message' => 'Retrieved successfully'
                ],
                200
            );
        }

        $user = User::with(['job' => function ($query) {
            $query->with('department');
        }])
            ->with(['expense_types' => function ($query) {
                $query->with('sub_types');
            }])
            ->where("is_superadmin", false)
            ->orderBy("last_name");

        if (request()->has("update_settings")) {
            $user = User::with('job')
                ->with('expense_types')
                ->orderBy("last_name")
                ->where("is_superadmin", false)
                ->get();
            return UserShowResource::collection($user);
        }
        return UserResource::collection($user->get());
    }

    /**
     * Recompute remaining fund of user
     *
     * @param  mixed $request
     * @return void
     */
    public function validateFund(Request $request)
    {
        $deduction = DB::table('expenses')
            ->select(DB::raw('SUM(expenses.amount) - SUM(expenses.reimbursable_amount) - 
                CASE WHEN ((SUM(`expenses`.`amount`) - SUM(`expenses`.`reimbursable_amount`)) = 0) 
                    THEN 0 ELSE SUM(`expense_report_payment`.`payment`) END AS deduction'))
            ->leftJoin('expense_reports', 'expense_reports.id', '=', 'expenses.expense_report_id')
            ->leftJoin('expense_report_payment', 'expense_report_payment.expense_report_id', '=', 'expense_reports.id')
            ->leftJoin('payments', 'payments.id', '=', 'expense_report_payment.payment_id')
            ->where(DB::raw('expenses.user_id'), request("id"))
            ->where(DB::raw('expenses.deleted_at'), null)
            ->where(DB::raw('expense_reports.rejected_at'), null)
            ->where(DB::raw('expense_reports.cancelled_at'), null)
            ->where(DB::raw('expense_reports.deleted_at'), null)
            ->first();

        $user = User::findOrFail(request("id"));

        if($user->remaining_fund > $user->fund ) {
            $user->remaining_fund = $user->fund;
        } else {
            $user->remaining_fund = $user->fund - $deduction->deduction;
        }

        $user->save();

        return $this->successResponse($user, "Validated User Remaining Fund", 200);
    }
}
