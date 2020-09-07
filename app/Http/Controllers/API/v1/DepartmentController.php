<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class DepartmentController extends Controller
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
            'name' => ['required', 'max:255', Rule::unique('departments')->ignore($id, 'id')],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $departments = Department::orderBy('name')->get();

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $departments = Department::onlyTrashed()->orderBy('name')->get();
                    break;
                default:
                    $departments = Department::orderBy('name')->get();
                    break;
            }
        }

        return response(
            [
                'data' => DepartmentResource::collection($departments),
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

        $department = new Department();

        $department->name = $request->name;

        $department->save();

        return response(
            [
                'data' => new DepartmentResource($department),
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
        $department = Department::findOrFail($id);

        return response(
            [
                'data' => new DepartmentResource($department),
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
                $department = Department::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), $id)->validate();

                $department = Department::findOrFail($id);

                $department->name = $request->name;

                $department->save();

                break;
        }

        return response(
            [
                'data' => new DepartmentResource($department),
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
        $department = Department::whereIn('id', $request->ids)->delete();

        return response(
            [
                'data' => new DepartmentResource($department),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
