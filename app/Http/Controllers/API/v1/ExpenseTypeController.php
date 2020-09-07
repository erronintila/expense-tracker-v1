<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseTypeResource;
use App\Models\ExpenseType;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseTypeController extends Controller
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
            'name' => ['required', 'max:255', Rule::unique('expense_types')->ignore($id, 'id')],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $expense_type = ExpenseType::orderBy('name')->get();

        return response(
            [
                'data' => ExpenseTypeResource::collection($expense_type),
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

        $expense_type = new ExpenseType();

        $expense_type->name = $request->name;

        $expense_type->save();

        return response(
            [
                'data' => new ExpenseTypeResource($expense_type),
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
        $expense_type = ExpenseType::findOrFail($id);

        return response(
            [
                'data' => new ExpenseTypeResource($expense_type),
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
                $expense_type = ExpenseType::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), $id)->validate();

                $expense_type = ExpenseType::findOrFail($id);

                $expense_type->name = $request->name;

                $expense_type->save();
                break;
        }

        return response(
            [
                'data' => new ExpenseTypeResource($expense_type),
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
        $expense_type = ExpenseType::whereIn('id', $request->ids)->delete();

        return response(
            [
                'data' => new ExpenseTypeResource($expense_type),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
