<?php

namespace App\Http\Controllers\API\v1;

use App\User;
use App\Models\Adjustment;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\AdjustmentResource;

class AdjustmentController extends Controller
{    
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        $this->middleware(['permission:view all adjustments'], ['only' => ['index']]);
        $this->middleware(['permission:view adjustments'], ['only' => ['show']]);
        $this->middleware(['permission:add adjustments'], ['only' => ['create', 'store']]);
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
            'reference' => ['nullable', 'max:150'],
            'code' => ['nullable'],
            'description' => [],
            'add_amount' => ['required'],
            'subtract_amount' => ['required'],
            'type' => ['required', 'max:150'],
            'remarks' => ['nullable'],
            'user' => ['required']
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $adjustments = Adjustment::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request("status")) {
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
        $this->validator(request()->all(), null)->validate();

        $adjustment = new Adjustment();
        $adjustment->reference = request("reference");
        $adjustment->code = generate_code(Adjustment::class, "ADJ", 10);
        $adjustment->remarks = request("remarks");
        $adjustment->user_id = request("user");

        if (request()->has("type")) {
            switch (request("type")) {
                case 'Manage Revolving Fund':
                    $user = User::findOrFail(request("user"));
                    $new_fund = ($user->fund + request("add_amount")) - request("subtract_amount");
                    $new_remaining_fund = ($user->remaining_fund + request("add_amount")) - request("subtract_amount");
                    if ($new_fund < 0 || $new_remaining_fund < 0) {
                        return response("Error", 500);
                    }

                    $adjustment->description = (request("add_amount") < request("subtract_amount")) ?
                        "Decreased Revolving Fund for {$user->last_name}, {$user->first_name}" :
                        "Added Revolving Fund for {$user->last_name}, {$user->first_name}";

                    $adjustment->add_amount = request("add_amount");
                    $adjustment->subtract_amount = request("subtract_amount");
                    $adjustment->type = request("type");
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
        $adjustment = Adjustment::findOrFail($id);

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
