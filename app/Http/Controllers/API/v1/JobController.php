<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class JobController extends Controller
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
            'name' => ['required', 'max:255', Rule::unique('jobs')->ignore($id, 'id')],
            'department_id' => ['required'],
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

        // if($sortBy == "department.name") {
        //     $jobs = Job::with("department")->sortBy("department.name", $sortType);
        // } else {
        $jobs = Job::orderBy($sortBy, $sortType);
        // }

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $jobs = $jobs->onlyTrashed();
                    break;
                default:
                    $jobs = $jobs;
                    break;
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
    public function store(Request $request)
    {
        $this->validator($request->all(), null)->validate();

        $job = new Job();

        $job->name = $request->name;
        $job->department_id = $request->department_id;

        $job->save();

        return response(
            [
                'data' => new JobResource($job),
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
        $job = Job::findOrFail($id);

        return response(
            [
                'data' => new JobResource($job),
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
                $job = Job::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), $id)->validate();

                $job = Job::findOrFail($id);

                $job->name = $request->name;
                $job->department_id = $request->department_id;

                $job->save();

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
        $job = Job::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
