<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Vendor;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\VendorResource;
use App\Http\Requests\Vendor\VendorStoreRequest;
use App\Http\Requests\Vendor\VendorUpdateRequest;
use App\Http\Resources\Vendor\VendorShowResource;
use App\Http\Resources\Vendor\VendorIndexResource;
use Illuminate\Support\Facades\DB;

class VendorController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        // apply permissions
        $this->middleware(['permission:view vendors'], ['only' => ['show']]);
        $this->middleware(['permission:add vendors'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit vendors'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete vendors'], ['only' => ['destroy']]);
        $this->middleware(['permission:restore vendors'], ['only' => ['restore']]);
        $this->middleware(['permission:set vendor activation'], ['only' => ['update_activation']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!request("isSelection") || !request()->has("isSelection")) {
            if (!app("auth")->user()->hasPermissionTo('view all vendors')) {
                abort(403);
            }
        }

        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;
        $vendors = Vendor::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Archived':
                    $vendors = $vendors->onlyTrashed();
                    break;
                case 'Inactive':
                    $vendors = $vendors->where('is_active', 0);
                    break;
                case 'Active':
                    $vendors = $vendors->where('is_active', 1);
                    break;
                default:
                    $vendors = $vendors;
                    break;
            }
        }

        if (request()->has("is_active")) {
            $vendors = $vendors->where('is_active', (request("is_active") || strtolower(request("is_active")) == 'true') ?? 1);
        }

        $vendors = $vendors->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere("name", "like", "%" . $search . "%");
            $query->orWhere("email", "like", "%" . $search . "%");
            $query->orWhere("tin", "like", "%" . $search . "%");
            $query->orWhere("mobile_number", "like", "%" . $search . "%");
            $query->orWhere("telephone_number", "like", "%" . $search . "%");
        });

        $vendors = $vendors->paginate($itemsPerPage);
        return VendorIndexResource::collection($vendors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VendorStoreRequest $request)
    {
        $validated = $request->validated();

        $vendor = new Vendor();
        $vendor->fill($validated);
        $vendor->save();

        $vendor->expense_types()->sync(request('expense_types') ?? []);

        $message = "Vendor created successfully";
        return $this->successResponse($vendor, $message, 201);
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
            $vendor = Vendor::withTrashed()->findOrFail($id);
        } else {
            $vendor = Vendor::findOrFail($id);
        }
        
        $message = 'Vendor retrieved successfully';
        return $this->successResponse($vendor, $message, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(VendorUpdateRequest $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);
        
        $validated = $request->validated();

        $vendor = Vendor::findOrFail($id);
        $vendor->update($validated);

        $vendor->expense_types()->sync(request('expense_types') ?? []);

        $message = "Vendor updated successfully";
        return $this->successResponse($vendor, $message, 200);
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
            $data = Vendor::findOrFail(explode(",", $id));
            $data->each->delete();
            return $data;
        });

        $message = "Vendor(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | VENDOR CUSTOM FUNCTIONS
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
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = Vendor::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            return $data;
        });

        $message = "Vendor(s) restored successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function update_activation(Request $request, $id)
    {
        $activation = request("is_active") ? "activated" : "deactivated";

        $data = DB::transaction(function () use ($activation, $id) {
            $ids = explode(",", $id);
            $data = Vendor::findOrFail($ids);
            $data->each(function ($item) use ($activation) {
                activity()->disableLogging();
                $item->is_active = request("is_active");
                $item->save();

                activity()->enableLogging();
                activity('vendor')
                    ->performedOn($item)
                    ->withProperties(['attributes' => ["id" => $item->id, "code" => $item->code, "name" => $item->name], 'custom' => ['link' => null]])
                    ->log("{$activation} vendor");
            });
            return $data;
        });

        $message = "Vendor(s) {$activation} successfully";
        return $this->successResponse($data, $message, 200);
    }

    /**
     * Display a listing of the resource
     *
     * @return void
     */
    public function getVendors()
    {
        $vendors = Vendor::with('expense_types')->orderBy("name")->get();
        return VendorResource::collection($vendors);
    }
}
