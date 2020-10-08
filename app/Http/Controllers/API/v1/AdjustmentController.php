<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdjustmentResource;
use App\Models\Adjustment;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdjustmentController extends Controller
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

            'reference' => ['nullable', 'max:150'],

            'code' => ['nullable'],

            'description' => [],

            'amount' => ['required'],

            'type' => ['required', 'max:150'],

            'remarks' => ['nullable'],
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

        $sortBy = $request->sortBy ?? "updated_at";

        $sortType = $request->sortType ?? "desc";

        $itemsPerPage = $request->itemsPerPage ?? 10;

        $adjustments = Adjustment::orderBy($sortBy, $sortType);

        if (request()->has('status')) {

            switch ($request->status) {

                case 'Cancelled':

                    $adjustments = $adjustments->onlyTrashed();

                    break;

                default:

                    $adjustments = $adjustments;

                    break;
            }
        }

        $adjustments = $adjustments->where(function ($q) use ($search) {

            $q->where('reference', "like", "%" . $search . "%");

            $q->orWhere('description', "like", "%" . $search . "%");

            $q->orWhere('type', "like", "%" . $search . "%");
        });

        $adjustments = $adjustments->paginate($itemsPerPage);

        return AdjustmentResource::collection($adjustments);
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

        $adjustment = new Adjustment();

        $adjustment->reference = $request->reference;

        $adjustment->code = $request->code;

        $adjustment->remarks = $request->remarks;

        $adjustment->employee_id = $request->employee_id;

        if (request()->has("type")) {

            switch ($request->type) {

                case 'Manage Revolving Fund':

                    $employee = Employee::findOrFail($request->employee_id);

                    $amount = $request->amount;

                    $fund = $employee->fund;

                    $adjustment->description = ($employee->fund > $request->amount) ?
                        "Decreased Revolving Fund for {$employee->last_name}, {$employee->first_name}" :
                        "Added Revolving Fund for {$employee->last_name}, {$employee->first_name}";

                    $adjustment->add_amount = ($employee->fund >= $request->amount) ? 0 : ($amount - $fund);

                    $adjustment->subtract_amount = ($employee->fund >= $request->amount) ? ($fund - $amount) : 0;

                    $adjustment->type = $request->type;

                    $adjustment->save();

                    break;

                default:

                    $adjustment->save();

                    break;
            }
        }

        return response(
            [
                'data' => new AdjustmentResource($adjustment),

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
        $adjustment = Adjustment::withTrashed()->findOrFail($id);

        return response(
            [
                'data' => new AdjustmentResource($adjustment),

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

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {

    }
}
