<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class DepartmentController extends Controller
{
    use ApiResponse;
    
    public function __construct()
    {
        $this->middleware(['permission:view all departments'], ['only' => ['index']]);
        $this->middleware(['permission:view departments'], ['only' => ['show']]);
        $this->middleware(['permission:add departments'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit departments'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete departments'], ['only' => ['destroy']]);
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

            'name' => ['required', 'max:100', Rule::unique('departments')->ignore($id, 'id')],
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

        $departments = Department::with(['jobs' => function ($query) {
            $query->withTrashed();
        }])
        ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {

                case 'Archived':

                    $departments = $departments->onlyTrashed();

                    break;
                default:

                    $departments = $departments;

                    break;
            }
        }

        $departments = $departments->where('name', "like", "%" . $search . "%");

        $departments = $departments->paginate($itemsPerPage);

        return DepartmentResource::collection($departments);
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

        $department->code = generate_code(Department::class, "DEP", 10);

        $department->name = $request->name;

        $department->notes = json_encode([]);

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
        $department = Department::withTrashed()
        ->with(['jobs' => function ($query) {
            $query->withTrashed();
        }])
        ->findOrFail($id);

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

                if (request()->has("ids")) {
                    foreach ($request->ids as $id) {
                        $department = Department::withTrashed()->findOrFail($id);

                        $department->restore();
                    }
                } else {
                    $department = Department::withTrashed()->findOrFail($id);

                    $department->restore();
                }

                // $department = Department::withTrashed()
                //     ->whereIn('id', $request->ids)
                //     ->restore();

                break;
            default:

                $this->validator($request->all(), $id)->validate();

                $department = Department::withTrashed()->findOrFail($id);

                $department->name = $request->name;

                $department->save();

                break;
        }

        return response(
            [
                'message' => 'Updated successfully',
                'data' => $department->notes == null ? null : json_decode($department->notes)
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
                $department = Department::withTrashed()->findOrFail($id);

                $department->delete();
            }
        } else {
            $department = Department::withTrashed()->findOrFail($id);

            $department->delete();
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

    /**
     * Display a listing of the resource.
     *
     * @param  mixed $request
     * @return void
     */
    public function getDepartments(Request $request)
    {
        if (request()->has('only')) {
            return $this->successResponse(Department::orderBy("name")->get(), "Retrieved successfully", 200);
        }

        $departments = Department::orderBy("name");

        if (request()->has("department_id")) {
            if ($request->department_id > 0) {
                $departments = $departments->where("id", $request->department_id);
            }
        }

        return DepartmentResource::collection($departments->get());
    }
}
