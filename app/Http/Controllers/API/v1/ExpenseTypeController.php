<?php

namespace App\Http\Controllers\API\v1;

use App\Models\ExpenseType;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Requests\ExpenseType\ExpenseTypeStoreRequest;
use App\Http\Requests\ExpenseType\ExpenseTypeUpdateRequest;
use App\Http\Resources\ExpenseType\ExpenseTypeOnlyResource;
use App\Http\Resources\ExpenseType\ExpenseTypeShowResource;

class ExpenseTypeController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        // apply permissions
        $this->middleware(['permission:view all expense types'], ['only' => ['index']]);
        $this->middleware(['permission:view expense types'], ['only' => ['show']]);
        $this->middleware(['permission:add expense types'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit expense types'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete expense types'], ['only' => ['destroy']]);
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

        $expense_types = ExpenseType::where('expense_type_id', null)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
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
    public function store(ExpenseTypeStoreRequest $request)
    {
        $validated = request()->validated(); // checks validation
        $message = "Expense type created successfully"; // return message

        $expense_type = new ExpenseType();
        $expense_type->code = generate_code(ExpenseType::class, "EXT", 10);
        $expense_type->name = request('name');
        $expense_type->limit = is_numeric(request('limit')) && (request('limit') > 0) ? request('limit') : null;
        $expense_type->save();

        // store sub types associated with expense type
        if (request()->has("sub_types")) {
            foreach (request('sub_types') as $item) {
                $sub_type = new ExpenseType();
                $sub_type->name = $item["name"];
                $sub_type->limit = is_numeric($item["limit"]) && ($item["limit"] > 0) ? $item["limit"] : null;
                $sub_type->expense_type_id = $expense_type->id;
                $sub_type->save();
            }
        }

        return $this->successResponse(new ExpenseTypeResource($expense_type), "$message", 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $message = "Expense type retrieved successfully"; // return message
        
        $expense_type = ExpenseType::withTrashed()
            ->with('sub_types')
            ->where('expense_type_id', null)
            ->findOrFail($id);

        return $this->successResponse(new ExpenseTypeShowResource($expense_type), $message, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ExpenseTypeUpdateRequest $request, $id)
    {
        $validated = request()->validated(); // checks validation

        $message = "Expense type updated successfully"; // return message
        $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);
        $expense_type->name = request('name');
        $expense_type->limit = is_numeric(request('limit')) && (request('limit') > 0) ? request('limit') : null;
        $expense_type->save();

        // remove sub types associated with expense type
        foreach ($expense_type->sub_types as $sub_type) {
            $sub_type->delete();
        }

        // update sub types associated with expense type
        foreach (request('sub_types') as $key => $value) {
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
        $message = "Expense type deleted successfully";

        if (request()->has("ids")) {
            foreach (request('ids') as $id) {
                $expense_type = ExpenseType::withTrashed()->findOrFail($id);

                $expense_type->delete();
            }

            $message = "Expense type(s) deleted successfully";
        } else {
            $expense_type = ExpenseType::withTrashed()->findOrFail($id);

            if ($expense_type->expenses) {
                return $this->errorResponse(null, "Record has been associated with expenses", 422);
            }

            $expense_type->delete();

            $message = "Expense type deleted successfully";
        }

        return $this->successResponse(null, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE TYPE CUSTOM FUNCTIONS
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
        $message = "Expense type restored successfully.";

        if (request()->has("ids")) {
            foreach (request('ids') as $id) {
                $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);

                $expense_type->restore();
            }

            $message = "Expense type(s) restored successfully.";
        } else {
            $expense_type = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($id);
            $expense_type->restore();

            $message = "Expense type restored successfully.";
        }

        return $this->successResponse(null, $message, 201);
    }

    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenseTypes(Request $request)
    {
        if (request()->has('only')) {
            $expense_type = ExpenseType::orderBy("name")
                ->where("expense_type_id", null)
                ->get();

            return $this->successResponse($expense_type, "Retrieved successfully", 200);
        }

        if (request()->has('id')) {
            $expense_type = ExpenseType::withTrashed()
                ->with(['sub_types' => function ($query) {
                    $query->withTrashed();
                }])->with(['expenses' => function ($query) {
                    $query->withTrashed();
                }])
                ->findOrFail(request('id'));

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
