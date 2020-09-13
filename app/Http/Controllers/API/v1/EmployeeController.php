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
            'job_id' => ['required'],

            'address' => ['nullable'],
            'building_address' => ['nullable', 'max:150'],
            'street_name' => ['nullable', 'max:150'],
            'street_address' => ['nullable', 'max:150'],
            'subdivision' => ['nullable', 'max:150'],
            'barangay' => ['nullable', 'max:150'],
            'city' => ['nullable', 'max:150'],
            'province' => ['nullable', 'max:150'],
            'country' => ['nullable', 'max:150'],
            'zip' => ['nullable', 'max:50'],
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

        $employees = Employee::orderBy($sortBy, $sortType);

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

        return EmployeeResource::collection($employees);
        // $employees = Employee::orderBy('last_name')->get();
        // $count = count($employees);

        // if (request()->has('status')) {
        //     switch ($request->status) {
        //         case 'Archived':
        //             $employees = Employee::onlyTrashed()
        //                 ->orderBy('last_name')
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //         default:
        //             $employees = Employee::orderBy('last_name')
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //     }
        // }

        // return response(
        //     [
        //         'data' => EmployeeResource::collection($employees),
        //         'message' => 'Employees retrieved successfully'
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

        $employee = new Employee();

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
        $employee->building_address = $request->building_address;
        $employee->street_name = $request->street_name;
        $employee->street_address = $request->street_address;
        $employee->subdivision = $request->subdivision;
        $employee->barangay = $request->barangay;
        $employee->city = $request->city;
        $employee->province = $request->province;
        $employee->country = $request->country;
        $employee->zip = $request->zip;

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
                $employee->building_address = $request->building_address;
                $employee->street_name = $request->street_name;
                $employee->street_address = $request->street_address;
                $employee->subdivision = $request->subdivision;
                $employee->barangay = $request->barangay;
                $employee->city = $request->city;
                $employee->province = $request->province;
                $employee->country = $request->country;
                $employee->zip = $request->zip;

                $employee->save();

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
        $employee = Employee::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
