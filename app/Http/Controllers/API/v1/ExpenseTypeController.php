<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseType\ExpenseTypeOnlyResource;
use App\Http\Resources\ExpenseType\ExpenseTypeShowResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Models\ExpenseType;
use App\Models\SubType;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseTypeController extends Controller
{
    use ApiResponse;

    public function __construct()
    {
        $this->middleware(['permission:view all expense types'], ['only' => ['index']]);
        $this->middleware(['permission:view expense types'], ['only' => ['show']]);
        $this->middleware(['permission:add expense types'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit expense types'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete expense types'], ['only' => ['destroy']]);
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

            'name' => ['required', 'max:100', Rule::unique('expense_types')->ignore($id, 'id')],
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

        $expense_types = ExpenseType::where('expense_type_id', null)
            ->orderBy($sortBy, $sortType);

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

        return ExpenseTypeOnlyResource::collection($expense_types);
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

        $expense_type->code = generate_code(ExpenseType::class, "EXT", 10);

        $expense_type->name = $request->name;

        $expense_type->limit = is_numeric($request->limit) && ($request->limit > 0) ? $request->limit : null;

        $expense_type->save();

        if (request()->has("sub_types")) {
            foreach ($request->sub_types as $item) {
                $sub_type = new ExpenseType();

                $sub_type->name = $item["name"];

                $sub_type->limit = is_numeric($item["limit"]) && ($item["limit"] > 0) ? $item["limit"] : null;

                $sub_type->expense_type_id = $expense_type->id;

                $sub_type->save();
            }
        }

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
        $expense_type = ExpenseType::withTrashed()
            ->with('sub_types')
            ->where('expense_type_id', null)
            ->findOrFail($id);

        return response(
            [
                'data' => new ExpenseTypeShowResource($expense_type),

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
                        $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);

                        $expense_type->restore();
                    }
                } else {
                    $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);

                    $expense_type->restore();
                }

                // $expense_type = ExpenseType::withTrashed()
                //     ->whereIn('id', $request->ids)
                //     ->restore();

                break;
            default:

                $this->validator($request->all(), $id)->validate();

                $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);

                $expense_type->name = $request->name;

                $expense_type->limit = is_numeric($request->limit) && ($request->limit > 0) ? $request->limit : null;

                $expense_type->save();

                ///////
                
                // foreach ($expense_type->sub_types as $sub_type) {
                //     if ($sub_type->expenses) {
                //         foreach ($expense_type->sub_types as $sub_type) {
                //             $sub_type->restore();
                //         }

                //         return response(
                //             [
                //                 'message' => 'Expense type/s has been associated with expenses'
                //             ],
                //             422
                //         );
                //     }

                //     $sub_type->delete();
                // }

                foreach ($expense_type->sub_types as $sub_type) {
                    $sub_type->delete();
                }

                foreach ($request->sub_types as $key => $value) {
                    $sub_type = ExpenseType::withTrashed()->updateOrCreate(
                        ['id' => $value["id"]],
                        [
                            'name' => $value["name"],

                            "limit" => is_numeric($value["limit"]) && ($value["limit"] > 0) ? $value["limit"] : null,

                            'expense_type_id' => $expense_type->id,

                            'deleted_at' => null,
                        ]
                    );
                }

                // if (request()->has("sub_types")) {

                //     foreach ($request->sub_types as $item) {

                //         $sub_type = SubType::updateOrCreate(

                //             ['name' =>   $item['name'], 'expense_type_id' => $expense_type->id],

                //             ['deleted_at' => null]
                //         );

                //         // $sub_type = SubType::firstOrNew(

                //         //     ['name' => $item['name']],

                //         //     ['expense_type_id' => $expense_type->id],
                //         // );

                //         // $sub_type->save();

                //         // $sub_type = SubType::updateOrCreate(

                //         //     // ['id' => $item['id']],

                //         //     ['name' => $item['name']],

                //         //     ['expense_type_id' => $expense_type->id],
                //         // );

                //         // // $sub_type->restore();
                //     }
                // }

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
        if (request()->has("ids")) {
            foreach ($request->ids as $id) {
                $expense_type = ExpenseType::withTrashed()->findOrFail($id);

                $expense_type->delete();
            }
        } else {
            $expense_type = ExpenseType::withTrashed()->findOrFail($id);

            if ($expense_type->expenses) {
                return response(
                    [
                        'message' => 'Record has been associated with expenses'
                    ],
                    422
                );
            }

            $expense_type->delete();
        }

        // $expense_type = ExpenseType::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE TYPE CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenseTypes(Request $request)
    {
        if (request()->has('only')) {
            return $this->successResponse(ExpenseType::orderBy("name")->where("expense_type_id", null)->get(), "Retrieved successfully", 200);
        }

        if (request()->has('id')) {
            $expense_type = ExpenseType::withTrashed()
                ->with(['sub_types' => function ($query) {
                    $query->withTrashed();
                }])->with(['expenses' => function ($query) {
                    $query->withTrashed();
                }])
                ->findOrFail($request->id);

            return new ExpenseTypeResource($expense_type);
        }

        $expense_types = ExpenseType::withTrashed()
            ->with(['sub_types' => function ($query) {
                $query->withTrashed();
            }])->with(['expenses' => function ($query) {
                $query->withTrashed();
            }])
            ->where('expense_type_id', null)
            ->get();

        return ExpenseTypeResource::collection($expense_types);
    }
}
