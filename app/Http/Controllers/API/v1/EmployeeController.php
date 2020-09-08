<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
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
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'suffix' => ['nullable', 'max:30'],
            'gender' => ['nullable', 'max:10'],
            'birthdate' => ['required', 'string', 'max:100'],
            'address' => ['nullable'],
            'phone' => ['nullable', 'max:50'],
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
        $employees = Employee::orderBy('last_name')->get();
        $count = count($employees);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $employees = Employee::onlyTrashed()
                        ->orderBy('last_name')
                        ->limit($request->limit ?? $count)
                        ->get();
                    break;
                default:
                    $employees = Employee::orderBy('last_name')
                        ->limit($request->limit ?? $count)
                        ->get();
                    break;
            }
        }

        return response(
            [
                'data' => EmployeeResource::collection($employees),
                'message' => 'Employees retrieved successfully'
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

        $employee = new Employee();

        $employee->first_name = $request->first_name;
        $employee->middle_name = $request->middle_name;
        $employee->last_name = $request->last_name;
        $employee->suffix = $request->suffix;
        $employee->gender = $request->gender;
        $employee->birthdate = $request->birthdate;
        $employee->address = $request->address;
        $employee->phone = $request->phone;
        $employee->job_id = $request->job_id;

        $employee->save();

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
        $employee = Employee::findOrFail($id);

        return response(
            [
                'data' => new EmployeeResource($employee),
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
                $employee = Employee::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), null)->validate();

                $employee = Employee::findOrFail($id);

                $employee->first_name     = $request->first_name;
                $employee->middle_name = $request->middle_name;
                $employee->last_name    = $request->last_name;
                $employee->suffix = $request->suffix;
                $employee->gender     = $request->gender;
                $employee->birthdate = $request->birthdate;
                $employee->address    = $request->address;
                $employee->phone = $request->phone;
                $employee->job_id = $request->job_id;

                $employee->save();

                break;
        }

        return response(
            [
                'data' => new EmployeeResource($employee),
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
        $employee = Employee::whereIn('id', $request->ids)->delete();

        return response(
            [
                'data' => new EmployeeResource($employee),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
