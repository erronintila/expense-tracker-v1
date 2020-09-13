<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseTypeResource;
use App\Models\ExpenseType;
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
        $search = $request->search ?? "";
        $sortBy = $request->sortBy ?? "name";
        $sortType = $request->sortType ?? "asc";
        $itemsPerPage = $request->itemsPerPage ?? 10;

        $expense_types = ExpenseType::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $expense_types = $expense_types->onlyTrashed();
                    break;
                default:
                    $expense_types = $expense_types;
                    break;
            }
        }

        $expense_types = $expense_types->where('name', "like", "%" . $search . "%");
        $expense_types = $expense_types->paginate($itemsPerPage);

        return ExpenseTypeResource::collection($expense_types);
        // $expense_type = ExpenseType::orderBy('name')->get();
        // $count = count($expense_type);

        // if (request()->has('status')) {
        //     switch ($request->status) {
        //         case 'Archived':
        //             $expense_type = ExpenseType::onlyTrashed()
        //                 ->orderBy('name')
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //         default:
        //             $expense_type = ExpenseType::orderBy('name')
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //     }
        // }

        // return response(
        //     [
        //         'data' => ExpenseTypeResource::collection($expense_type),
        //         'message' => 'Expense Types retrieved successfully'
        //     ],
        //     200
        // );
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
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
