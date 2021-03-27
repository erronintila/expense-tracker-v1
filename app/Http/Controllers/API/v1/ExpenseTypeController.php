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
use Illuminate\Support\Facades\DB;

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
        $expense_type_id = request("expense_type_id") ?? null;

        $expense_types = ExpenseType::where('expense_type_id', $expense_type_id)
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

        if ($itemsPerPage == "false" || $itemsPerPage == false) {
            $itemsPerPage = $expense_types->count();
        }

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
        abort_if(!auth()->user()->is_admin, 403);

        $validated = $request->validated();
        $expense_type = DB::transaction(function () use ($validated) {
            $expense_type = new ExpenseType();
            $expense_type->fill($validated);
            $expense_type->code = generate_code(ExpenseType::class, "EXT", 10);
            $expense_type->limit = is_numeric(request('limit')) && (request('limit') > 0) ? request('limit') : null;
            $expense_type->save();

            if (request()->has("sub_types")) {
                foreach (request('sub_types') as $item) {
                    abort_if(DB::table("expense_types")->where("name", $item["name"])->exists(), 422, "Subtype name already exists.");

                    $sub_type = new ExpenseType();
                    $sub_type->name = $item["name"];
                    $sub_type->limit = is_numeric($item["limit"]) && ($item["limit"] > 0) ? $item["limit"] : null;
                    $sub_type->expense_type_id = $expense_type->id;
                    $sub_type->save();
                }
            }

            return $expense_type;
        });

        $message = "Expense type created successfully";
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
        $expense_type = ExpenseType::with('sub_types')
            ->where('expense_type_id', null)
            ->findOrFail($id);
        $message = "Expense type retrieved successfully";
        return $this->successResponse(new ExpenseTypeShowResource($expense_type), $message, 200);
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
        abort_if(!auth()->user()->is_admin, 403);

        $validated = $request->validated();
        $expense_type = DB::transaction(function () use ($id, $validated) {
            $expense_type = ExpenseType::where('expense_type_id', null)->findOrFail($id);
            $expense_type->fill($validated);
            $expense_type->limit = is_numeric(request('limit')) && (request('limit') > 0) ? request('limit') : null;
            $expense_type->save();

            // remove sub types associated with expense type
            $expense_type->sub_types->each->delete();
            
            // update sub types associated with expense type
            foreach (request('sub_types') as $key => $value) {
                abort_if(DB::table("expense_types")->where("id", "<>", $value["id"])->where("name", $value["name"])->exists(), 422, "Subtype name already exists.");

                ExpenseType::withTrashed()->updateOrCreate(
                    ['id' => $value["id"]],
                    [
                        'name' => $value["name"],
                        "limit" => is_numeric($value["limit"]) && ($value["limit"] > 0) ? $value["limit"] : null,
                        'expense_type_id' => $expense_type->id,
                        'deleted_at' => null,
                    ]
                );
            }

            return $expense_type;
        });

        $message = "Expense type updated successfully";
        return $this->successResponse($expense_type, $message, 200);
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
            $data = ExpenseType::findOrFail(explode(",", $id));
            $data->each->delete();
            return $data;
        });

        $message = "Expense type(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
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
        abort_if(!auth()->user()->is_admin, 403);
        
        $data = DB::transaction(function () use ($id) {
            $data = ExpenseType::onlyTrashed()->findOrFail(explode(",", $id));
            $data->each->restore();
            return $data;
        });

        $message = "Expense type(s) restored successfully";
        return $this->successResponse($data, $message, 200);
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
            $expense_type = ExpenseType::with('sub_types')
                ->with('expenses')
                ->findOrFail(request('id'));
            return new ExpenseTypeResource($expense_type);
        }

        $expense_types = ExpenseType::with('sub_types')
            ->with('expenses')
            ->where('expense_type_id', null)
            ->get();
        return ExpenseTypeResource::collection($expense_types);
    }
}
