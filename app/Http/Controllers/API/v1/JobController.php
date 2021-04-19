<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Job;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Resources\JobResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Job\JobStoreRequest;
use App\Http\Requests\Job\JobUpdateRequest;
use App\Models\Department;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        // apply permissions
        // $this->middleware(['permission:view all jobs'], ['only' => ['index']]);
        $this->middleware(['permission:view jobs'], ['only' => ['show']]);
        $this->middleware(['permission:add jobs'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit jobs'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete jobs'], ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!request("isSelection") || !request()->has("isSelection")) {
            abort_if(!app("auth")->user()->hasPermissionTo('view all jobs'), 403);
        }

        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $jobs = Job::with(['department' => function ($query) {
            if (request()->has("isDeleted") && request("isDeleted")) {
                $query->withTrashed();
            }
        }]);

        switch ($sortBy) {
            case 'name':
                $jobs = $jobs->orderBy("name", $sortType);
                break;
            case 'department.name':
                $jobs = $jobs->leftJoin('departments', 'jobs.department_id', '=', 'departments.id')
                    ->select('jobs.*')
                    ->orderBy('departments.name', $sortType);
                break;
            default:
                break;
        }

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Archived':
                    $jobs = $jobs->onlyTrashed();
                    break;
                default:
                    $jobs = $jobs;
                    break;
            }
        }

        if (request()->has('department_id')) {
            if (request('department_id') > 0) {
                $jobs = $jobs->where('department_id', request('department_id'));
            }
        }

        $jobs = $jobs->where(function ($query) use ($search) {
            $query->where('jobs.name', "like", "%" . $search . "%");
            $query->orWhereHas('department', function ($q) use ($search) {
                $q->where('name', "like", "%" . $search . "%");
            });
        });

        $jobs = $jobs->paginate($itemsPerPage);

        return JobResource::collection($jobs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobStoreRequest $request)
    {
        abort_if(!auth()->user()->is_admin, 403);

        $validated = $request->validated();
        $department = Department::findOrFail($validated["department_id"]);

        $job = new Job();
        $job->fill($validated);
        $job->code = generate_code(Job::class, "JOB", 10);
        $job->department()->associate($department);
        $job->save();

        $message = "Job designation created successfully";
        return $this->successResponse($job, $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (request()->has("isDeleted") && request("isDeleted")) {
            $job = Job::with(['department' => function ($query) {
                $query->withTrashed();
            }])->findOrFail($id);
        } else {
            $job = Job::with('department')->findOrFail($id);
        }

        $message = "Job designation retrieved successfully";
        return $this->successResponse(new JobResource($job), $message, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(JobUpdateRequest $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);

        $validated = $request->validated();
        $department = Department::findOrFail($validated["department_id"]);

        $job = Job::findOrFail($id);
        $job->fill($validated);
        $job->department()->associate($department);
        $job->save();

        $message = "Job designation updated successfully";
        return $this->successResponse($job, $message, 200);
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
            $data = Job::findOrFail(explode(",", $id));
            $data->each->delete();
            return $data;
        });

        $message = "Job designation(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | JOB CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Restore the specified resource from storage.
     *
     * @return void
     */
    public function restore(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);

        $data = DB::transaction(function () use ($id) {
            $data = Job::onlyTrashed()->findOrFail(explode(",", $id));
            $data->each->restore();
            return $data;
        });

        $message = "Job designation(s) restored successfully";
        return $this->successResponse($data, $message, 200);
    }

    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function getJobs(Request $request)
    {
        if (request()->has('only')) {
            $jobs = Job::orderBy("name");

            if (request()->has("department_id")) {
                if (request('department_id') > 0) {
                    $jobs = $jobs->where("department_id", request('department_id'));
                }
            }
            return $this->successResponse($jobs->get(), "", 200);
        }

        $jobs = Job::with('department')->orderBy("name");

        if (request()->has("department_id")) {
            if (request('department_id') > 0) {
                $jobs = $jobs->where("department_id", request('department_id'));
            }
        }
        return JobResource::collection($jobs->get());
    }
}
