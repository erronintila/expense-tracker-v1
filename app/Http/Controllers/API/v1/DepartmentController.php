<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepartmentStoreRequest;
use App\Http\Requests\DepartmentUpdateRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        // apply permissions
        $this->middleware(['permission:view all departments'], ['only' => ['index']]);
        $this->middleware(['permission:view departments'], ['only' => ['show']]);
        $this->middleware(['permission:add departments'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit departments'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete departments'], ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $departments = Department::with(['jobs' => function ($query) {
            $query->withTrashed();
        }])
        ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
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
    public function store(DepartmentStoreRequest $request)
    {
        $validated = $request->validated(); // check validation
        $message = "Department created successfully"; // return message

        $department = new Department();
        $department->code = generate_code(Department::class, "DEP", 10);
        $department->name = request('name');
        $department->save();

        return $this->successResponse(new DepartmentResource($department), $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $message = "Department retrieved successfully"; // return message

        $department = Department::withTrashed()
            ->with(['jobs' => function ($query) {
                $query->withTrashed();
            }])
            ->findOrFail($id);

        return $this->successResponse(new DepartmentResource($department), $message, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DepartmentUpdateRequest $request, $id)
    {
        $validated = $request->validated(); // check validation
        $message = "Department updated successfully"; // return message

        $department = Department::withTrashed()->findOrFail($id);
        $department->name = request('name');
        $department->save();

        return $this->successResponse(null, $message, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $message = "Department deleted successfully"; // return message

        if (request()->has("ids")) {
            foreach (request('ids') as $id) {
                $department = Department::findOrFail($id);
                $department->delete();
            }

            $message = "Department(s) deleted successfully";
        } else {
            $department = Department::findOrFail($id);
            $department->delete();
            $message = "Department deleted successfully";
        }

        return $this->successResponse(null, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | DEPARTMENT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Restore the specified resource from storage.
     *
     * @param  mixed $request
     * @param  mixed $id
     * @return void
     */
    public function restore(Request $request, $id)
    {
        $message = "Department restored successfully"; // return message

        if (request()->has("ids")) {
            // $department = Department::withTrashed()
            //     ->whereIn('id', request('')ids)
            //     ->restore();
        
            foreach (request('ids') as $id) {
                $department = Department::withTrashed()->findOrFail($id);
                $department->restore();
                $message = "Department(s) restored successfully";
            }
        } else {
            $department = Department::withTrashed()->findOrFail($id);
            $department->restore();
            $message = "Department restored successfully";
        }

        return $this->successResponse(null, $message, 201);
    }

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
            if (request('department_id') > 0) {
                $departments = $departments->where("id", request('department_id'));
            }
        }

        return DepartmentResource::collection($departments->get());
    }
}
