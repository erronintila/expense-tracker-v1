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
        // $this->middleware(['permission:view all vendors'], ['only' => ['index']]);
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
        $message = "Vendor created successfully";

        $vendor = new Vendor();
        $vendor->fill($validated);
        $vendor->save();

        // store expense types associated with vendor
        if (request()->has("expense_types")) {
            $vendor->expense_types()->sync(request('expense_types'));
        }

        return $this->successResponse(new VendorResource($vendor), $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (request()->has("isDeleted")) {
            if (request("isDeleted") != null) {
                $vendor = Vendor::withTrashed()->findOrFail($id);
            }
        } else {
            $vendor = Vendor::findOrFail($id);
        }
        
        return $this->successResponse(new VendorShowResource($vendor), 'Vendor retrieved successfully', 200);
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
        $validated = $request->validated();
        $message = "Vendor updated successfully";

        $vendor = Vendor::findOrFail($id);
        $vendor->update($validated);

        // update expense types associated with vendor
        if (request()->has("expense_types")) {
            $vendor->expense_types()->sync(request('expense_types'));
        }

        $message = "Vendor updated successfully";

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
        DB::transaction(function () use ($id) {
            if (request()->has("ids")) {
                foreach (request('ids') as $id) {
                    Vendor::findOrFail($id)->delete();
                }
            } else {
                Vendor::findOrFail($id)->delete();
            }
        });

        $message = "Vendor(s) deleted successfully";
        return $this->successResponse(null, $message, 200);
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
        DB::transaction(function () use ($id) {
            if (request()->has("ids")) {
                foreach (request('ids') as $id) {
                    Vendor::onlyTrashed()->findOrFail($id)->restore();
                }
            } else {
                Vendor::onlyTrashed()->findOrFail($id)->restore();
            }
        });

        $message = "Vendor(s) restored successfully";
        return $this->successResponse(null, $message, 201);
    }

    public function update_activation(Request $request, $id)
    {
        $activation = request("is_active") ? "activated" : "deactivated";
        $message = "Vendor {$activation} successfully";

        DB::transaction(function () use ($activation, $id) {
            if (request()->has("ids")) {
                foreach (request("ids") as $id) {
                    $vendor = Vendor::findOrFail($id);
                    $vendor->disableLogging();
                    $vendor->is_active = request("is_active");
                    $vendor->save();
    
                    activity('vendor')
                        ->performedOn($vendor)
                        ->withProperties(['attributes' => ["id" => $vendor->id, "code" => $vendor->code, "name" => $vendor->name], 'custom' => ['link' => null]])
                        ->log("{$activation} vendor");
                }
            } else {
                $vendor = Vendor::findOrFail($id);
                $vendor->disableLogging();
                $vendor->is_active = request("is_active");
                $vendor->save();
    
                activity('vendor')
                    ->performedOn($vendor)
                    ->withProperties(['attributes' => ["id" => $vendor->id, "code" => $vendor->code, "name" => $vendor->name], 'custom' => ['link' => null]])
                    ->log("{$activation} vendor");
            }
        });
        return $this->successResponse(null, $message, 200);
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
