<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Department;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Requests\Department\DepartmentStoreRequest;
use App\Http\Requests\Department\DepartmentUpdateRequest;
use Illuminate\Support\Facades\DB;

class DepartmentController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        // apply permissions
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
        if (!request("isSelection") || !request()->has("isSelection")) {
            abort_if(!app("auth")->user()->hasPermissionTo('view all departments'), 403);
        }

        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $departments = Department::with('jobs')
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
        abort_if(!auth()->user()->is_admin, 403);
        
        $validated = $request->validated();
        $department = new Department();
        $department->fill($validated);
        $department->code = generate_code(Department::class, "DEP", 10);
        $department->save();

        $message = "Department created successfully";
        return $this->successResponse($department, $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $department = Department::with('jobs')->findOrFail($id);
        $message = "Department retrieved successfully";
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
        abort_if(!auth()->user()->is_admin, 403);

        $validated = $request->validated();
        $department = Department::findOrFail($id);
        $department->update($validated);

        $message = "Department updated successfully";
        return $this->successResponse($department, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);

        $data = DB::transaction(function () use ($id) {
            $data = Department::findOrFail(explode(",", $id));
            $data->each->delete();
            return $data;
        });

        $message = "Department(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
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
        abort_if(!auth()->user()->is_admin, 403);

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = Department::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            return $data;
        });

        $message = "Department(s) restored successfully";
        return $this->successResponse($data, $message, 200);
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
