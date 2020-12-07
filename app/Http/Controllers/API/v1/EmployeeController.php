<?php

namespace App\Http\Controllers\API\v1;

use App\Exports\EmployeesExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\Employee\EmployeeIndexResource;
use App\Http\Resources\Employee\EmployeeShowResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\ExpenseType;
use App\Models\Job;
use App\Traits\ApiResponse;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\Permission\Models\Role;

use function GuzzleHttp\Promise\all;

class EmployeeController extends Controller
{
    use ApiResponse;

    public function __construct()
    {
        $this->middleware(['permission:view all employees'], ['only' => ['index']]);
        $this->middleware(['permission:view employees'], ['only' => ['show']]);
        $this->middleware(['permission:add employees'], ['only' => ['create', 'store']]);
        // $this->middleware(['permission:edit employees'], ['only' => ['edit', 'update']]);
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

            'code' => ['nullable', Rule::unique('employees')->ignore($id, 'id'), 'max:255'],

            'first_name' => ['required', 'string', 'max:150'],

            'middle_name' => ['nullable', 'max:150'],

            'last_name' => ['required', 'string', 'max:150'],

            'suffix' => ['nullable', 'max:30'],

            'gender' => ['required', 'max:10'],

            'birthdate' => ['nullable'],

            'mobile_number' => ['nullable', 'max:50'],

            'telephone_number' => ['nullable', 'max:50'],

            'email' => ['nullable', 'email', Rule::unique('employees')->ignore($id, 'id')],

            'address' => ['required'],

            'job_id' => ['required'],

            'username' => ['required'],

            'role' => ['required'],

            'can_login' => ['required'],
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

        $sortBy = $request->sortBy ?? "last_name";

        $sortType = $request->sortType ?? "asc";

        $itemsPerPage = $request->itemsPerPage ?? 10;

        // $sortBy = $sortBy == "fullname" ? "last_name" : $sortBy;

        $employees = Employee::with(['job' => function ($query) {
            $query->withTrashed();
            $query->with(['department' => function ($query2) {
                $query2->withTrashed();
            }]);
        }]);
            // ->with(['user' => function ($query) {
            //     $query->withTrashed();
            // }]);
            // ->with(['expense_types' => function ($query) {
            //     $query->withTrashed();
            //     $query->with(['sub_types' => function ($query2) {
            //         $query2->withTrashed();
            //     }]);
            // }]);

        switch ($sortBy) {
            case 'fullname':

                $employees = $employees->orderBy("last_name", $sortType);

                break;
            case 'job.name':

                $employees = $employees->orderBy("last_name", $sortType);

                break;
            case 'department.name':

                $employees = $employees->orderBy("last_name", $sortType);

                break;
            case 'revolving_fund':

                $employees = $employees->orderBy("fund", $sortType);

                break;
            default:

                $employees = $employees->orderBy($sortBy, $sortType);

                break;
        }

        if (request()->has('status')) {
            switch ($request->status) {

                case 'Archived':

                    $employees = $employees->onlyTrashed();

                    break;
                default:

                    $employees = $employees;

                    break;
            }
        }

        if (request()->has('department_id')) {
            if ($request->department_id > 0) {
                $jobs = Job::where('department_id', $request->department_id);

                $employees = $employees->whereIn('job_id', $jobs->pluck('id'));
            }
        }

        if (request()->has('job_id')) {
            if ($request->job_id > 0) {
                $employees = $employees->where("job_id", $request->job_id);
            }
        }

        $employees = $employees->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");

            $query->orWhere("first_name", "like", "%" . $search . "%");

            $query->orWhere("middle_name", "like", "%" . $search . "%");

            $query->orWhere("last_name", "like", "%" . $search . "%");

            $query->orWhere("gender", "like", "%" . $search . "%");

            $query->orWhere("birthdate", "like", "%" . $search . "%");

            $query->orWhere("mobile_number", "like", "%" . $search . "%");

            $query->orWhere("email", "like", "%" . $search . "%");
        });

        $employees = $employees->paginate($itemsPerPage);

        return EmployeeIndexResource::collection($employees);
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

        $expense_types = ExpenseType::all();

        $employee = new Employee();

        $employee->code = $request->code ?? generate_code(Employee::class, "EMP", 10);

        $employee->first_name = $request->first_name;

        $employee->middle_name = $request->middle_name;

        $employee->last_name = $request->last_name;

        $employee->suffix = $request->suffix;

        $employee->gender = $request->gender;

        $employee->birthdate = $request->birthdate;

        $employee->mobile_number = $request->mobile_number;

        $employee->telephone_number = $request->telephone_number;

        $employee->email = $request->email;

        $employee->job_id = $request->job_id;

        $employee->address = $request->address;

        $employee->fund = $request->fund;

        $employee->remaining_fund = $request->fund;

        //// Assign a User to the Employee

        $user = new User();

        $user->name     = $request->last_name . ', ' . $request->first_name . ' ' . $request->middle_name;

        $user->username = $request->username;

        $user->email    = $request->email;

        $user->email_verified_at = now();

        $user->is_admin = $request->role == "Administrator";

        $user->can_login = $request->can_login;

        $user->password = Hash::make("password");

        $user->save();

        if ($request->role == "Administrator") {
            foreach ($request->permissions as $permission) {
                $user->givePermissionTo($permission["name"]);
            }
        } else {
            $user->assignRole("Standard User");
        }

        $employee->user_id = $user->id;

        $employee->save();

        $employee->expense_types()->sync($expense_types);

        // if (request()->has("expense_types")) {
        //     $employee->expense_types()->sync($request->expense_types);
        // }

        return response(
            [
                'data' => new EmployeeResource($employee),

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
        // $employee = Employee::withTrashed()->findOrFail($id);

        $employee = Employee::with(['job' => function ($query) {
            $query->withTrashed();
            $query->with(['department' => function ($query2) {
                $query2->withTrashed();
            }]);
        }])
        ->with(['user' => function ($query) {
            $query->withTrashed();
        }])
        // ->with(['expenses' => function ($query) {
        //     $query->withTrashed();
        // }])
        // ->with(['expense_reports' => function ($query) {
        //     $query->withTrashed();
        // }])
        ->with(['expense_types' => function ($query) {
            $query->withTrashed();
            // $query->with(['sub_types' => function ($query2) {
            //     $query2->withTrashed();
            // }]);
        }])
        // ->with(['sub_types' => function ($query) {
        //     $query->withTrashed();
        // }])
        ->findOrFail($id);

        // $employee = $employee->loadMissing(['job', 'user', 'expenses', 'expense_reports', 'expense_types', 'sub_types']);

        return response(
            [
                'data' => new EmployeeShowResource($employee),

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
        $subtypes = [];

        switch ($request->action) {

            case 'restore':

                if (!app("auth")->user()->hasPermissionTo('restore employees')) {
                    abort(403);
                }

                if (request()->has("ids")) {
                    foreach ($request->ids as $id) {
                        $employee = Employee::withTrashed()->findOrFail($id);

                        $employee->restore();

                        $user = User::withTrashed()->findOrFail($employee->user_id);

                        $user->restore();
                    }
                } else {
                    $employee = Employee::withTrashed()->findOrFail($id);

                    $employee->restore();

                    $user = User::withTrashed()->findOrFail($employee->user_id);

                    $user->restore();
                }

                break;
            case 'settings':

                $employee = Employee::withTrashed()->findOrFail($id);

                if (request()->has("expense_types")) {
                    // $employee->expense_types()->sync([]);

                    $employee->expense_types()->sync($request->expense_types);

                    // $employee->expense_types()->sync([]);

                    // $expense_types_id = [];

                    // foreach ($request->expense_types as $id) {
                    //     $expense_type = ExpenseType::withTrashed()->findOrFail($id);

                    //     array_push($expense_types_id, $expense_type->id);

                    //     foreach ($expense_type->sub_types()->withTrashed()->get() as $sub_type) {
                    //         array_push($expense_types_id, $sub_type->id);
                    //     }
                    // }

                    // $employee->expense_types()->sync($expense_types_id);
                }

                break;
            case 'update fund':
                if (!app("auth")->user()->hasPermissionTo('edit employees fund')) {
                    abort(403);
                }

                $employee = Employee::withTrashed()->findOrFail($id);

                $employee->fund = $request->fund;

                $employee->remaining_fund = $request->remaining_fund;

                $employee->save();

                break;
            default:

                if (!app("auth")->user()->hasPermissionTo('edit employees')) {
                    abort(403);
                }

                $this->validator($request->all(), $id)->validate();

                $employee = Employee::withTrashed()->findOrFail($id);

                $employee->code = $request->code;

                $employee->first_name = $request->first_name;

                $employee->middle_name = $request->middle_name;

                $employee->last_name = $request->last_name;

                $employee->suffix = $request->suffix;

                $employee->gender = $request->gender;

                $employee->birthdate = $request->birthdate;

                $employee->mobile_number = $request->mobile_number;

                $employee->telephone_number = $request->telephone_number;

                $employee->email = $request->email;

                $employee->job_id = $request->job_id;

                $employee->address = $request->address;

                $employee->save();

                // if (request()->has("expense_types")) {
                //     $employee->expense_types()->sync($request->expense_types);

                //     // foreach ($employee->expense_types as $item) {

                //     //     $expense_type = ExpenseType::withTrashed()->findOrFail($item["expense_type_id"]);

                //     //     foreach ($expense_type->sub_types as $item2) {

                //     //         $subtypes = $item2->pluck("id");
                //     //     }
                //     // }

                //     $employee->sub_types()->sync($employee->expense_types);
                // }

                if ($employee->user_id != null) {
                    $user = User::withTrashed()->findOrFail($employee->user_id);

                    $user->name = $request->last_name . ', ' . $request->first_name . ' ' . $request->middle_name;

                    $user->email = $request->email;

                    $user->username = $request->username;

                    $user->is_admin = $request->role == "Administrator";

                    $user->can_login = $request->can_login;

                    $user->save();

                    $user->syncPermissions();

                    $user->syncRoles();

                    if ($request->role == "Administrator") {
                        foreach ($request->permissions as $permission) {
                            $user->givePermissionTo($permission["name"]);
                        }
                    } else {
                        $user->assignRole("Standard User");
                    }
                }

                break;
        }

        return response(
            [
                'message' => 'Updated successfully',
                'data' => $subtypes
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
                $employee = Employee::withTrashed()->findOrFail($id);

                $employee->delete();

                $user = User::withTrashed()->findOrFail($employee->user_id);

                $user->delete();
            }
        } else {
            $employee = Employee::withTrashed()->findOrFail($id);

            $employee->delete();

            $user = User::withTrashed()->findOrFail($employee->user_id);

            $user->delete();
        }

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EMPLOYEE CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function export()
    {
        return Excel::download(new EmployeesExport, 'Employees.csv');
    }

    public function getEmployees(Request $request)
    {
        if (request()->has('only')) {
            return $this->successResponse(Employee::all(), "Retrieved successfully", 200);
        }

        $employee = Employee::with(['job' => function ($query) {
            $query->withTrashed();
            $query->with(['department' => function ($query2) {
                $query2->withTrashed();
            }]);
        }])
            ->with(['user' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['expense_types' => function ($query) {
                $query->withTrashed();
                $query->with(['sub_types' => function ($query2) {
                    $query2->withTrashed();
                }]);
            }])
            ->orderBy("last_name");

        if (request()->has("no_user") && request()->has("user_id")) {
            $employee->where("user_id", null)->orwhere("user_id", $request->user_id);
        }

        if(request()->has("update_settings")) {
            $employee = Employee::with(['job' => function ($query) {
                $query->withTrashed();
            }])
                ->with(['user' => function ($query) {
                    $query->withTrashed();
                }])
                ->with(['expense_types' => function ($query) {
                    $query->withTrashed();
                }])
                ->orderBy("last_name")
                ->get();
                
            return EmployeeShowResource::collection($employee);
        }

        return EmployeeResource::collection($employee->get());
    }

    /**
     * validateFund
     *
     * @param  mixed $request
     * @return void
     */
    public function validateFund(Request $request)
    {
        $employee = Employee::withTrashed()
            ->with(['job' => function ($query) {
                $query->withTrashed();
                $query->with(['department' => function ($query2) {
                    $query2->withTrashed();
                }]);
            }])
            ->with(['user' => function ($query) {
                $query->withTrashed();
            }])
            ->with(['expense_types' => function ($query) {
                $query->withTrashed();
                $query->with(['sub_types' => function ($query2) {
                    $query2->withTrashed();
                }]);
            }])
            ->findOrFail($request->id);

        $expenses = Expense::where("employee_id", $employee->id)
            ->where("deleted_at", null)
            ->orWhereHas("expense_report", function ($query) {
                $query->where([

                    ["cancelled_at", "=", null],

                    ["rejected_at", "=", null],

                    ["deleted_at", "=", null],
                ]);
            })
            ->get();

        $paid_expenses = Expense::where("employee_id", $employee->id)
                ->where("deleted_at", null)
                ->whereHas("expense_report", function ($query) {
                    $query->where([

                        ["cancelled_at", "=", null],

                        ["rejected_at", "=", null],

                        ["deleted_at", "=", null],
                    ]);
                    $query->whereHas("payments", function ($query) {
                        $query->where([

                            ["cancelled_at", "=", null],

                            ["received_at", "<>", null],

                            ["deleted_at", "=", null],
                        ]);
                    });
                })
                ->get();

        $deduct = $expenses->sum("amount") - $expenses->sum("reimbursable_amount");

        $paid = $paid_expenses->sum("amount") - $paid_expenses->sum("reimbursable_amount");

        $employee->remaining_fund = $employee->fund - $deduct + $paid;

        $employee->save();

        return response("Validated Employee Remaining Fund", 200);
    }


}
