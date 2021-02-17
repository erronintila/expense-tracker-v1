<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Job;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Resources\JobResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\JobStoreRequest;
use App\Http\Requests\JobUpdateRequest;

class JobController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        // apply permissions
        $this->middleware(['permission:view all jobs'], ['only' => ['index']]);
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
        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        // if($sortBy == "department.name") {
        //     $jobs = Job::with("department")->sortBy("department.name", $sortType);
        // } else {
        $jobs = Job::with(['department' => function ($query) {
            $query->withTrashed();
        }])->orderBy($sortBy, $sortType);
        // }

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

        $jobs = $jobs->where('name', "like", "%" . $search . "%");
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
        $validated = $request->validated(); // checks validation
        $message = "Job designation created successfully"; // return message
        $job = new Job();
        $job->code = generate_code(Job::class, "JOB", 10);
        $job->name = request('name');
        $job->department_id = request('department_id');
        $job->save();

        return $this->successResponse(new JobResource($job), $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $message = "Job designation retrieved successfully"; // return message

        $job = Job::withTrashed()->with(['department' => function ($query) {
            $query->withTrashed();
        }])
        ->findOrFail($id);

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
        $validated = $request->validated(); // checks validation
        $message = "Job designation updated successfully"; // return message

        $job = Job::withTrashed()->findOrFail($id);
        $job->name = request('name');
        $job->department_id = request('department_id');
        $job->save();

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
        $message = "Job designation deleted successfully"; // return message

        if (request()->has("ids")) {
            // $job = Job::whereIn('id', request('')ids)->delete();

            foreach (request('ids') as $id) {
                $job = Job::withTrashed()->findOrFail($id);
                $job->delete();
            }

            $message = "Job designation(s) deleted successfully";
        } else {
            $job = Job::withTrashed()->findOrFail($id);
            $job->delete();
            $message = "Job designation deleted successfully";
        }

        return $this->successResponse(null, $message, 200);
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
        $message = "Job designation restored successfully"; // return message

        if (request()->has("ids")) {
            foreach (request('ids') as $id) {
                $job = Job::withTrashed()->findOrFail($id);
                $job->restore();
            }

            $message = "Job designation(s) restored successfully";
        } else {
            $job = Job::withTrashed()->findOrFail($id);
            $job->restore();
            $message = "Job designation restored successfully";
        }

        return $this->successResponse(null, $message, 201);
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

        $jobs = Job::with(['department' => function ($query) {
            $query->withTrashed();
        }])->orderBy("name");

        if (request()->has("department_id")) {
            if (request('department_id') > 0) {
                $jobs = $jobs->where("department_id", request('department_id'));
            }
        }

        return JobResource::collection($jobs->get());
    }
}
