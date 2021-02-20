<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Vendor;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\VendorResource;
use App\Http\Requests\VendorStoreRequest;
use App\Http\Requests\VendorUpdateRequest;
use App\Http\Resources\Vendor\VendorShowResource;
use App\Http\Resources\Vendor\VendorIndexResource;

class VendorController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response
    
    public function __construct()
    {
        // apply permissions
        $this->middleware(['permission:view all vendors'], ['only' => ['index']]);
        $this->middleware(['permission:view vendors'], ['only' => ['show']]);
        $this->middleware(['permission:add vendors'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit vendors'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete vendors'], ['only' => ['destroy']]);
        $this->middleware(['permission:restore vendors'], ['only' => ['restore']]);
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
        $vendors = Vendor::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Archived':
                    $vendors = $vendors->onlyTrashed();
                    break;
                default:
                    $vendors = $vendors;
                    break;
            }
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
        $vendor->create($validated);

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
        $vendor = Vendor::withTrashed()->findOrFail($id);

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

        $vendor = Vendor::withTrashed()->findOrFail($id);
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
        $message = "Vendor deleted successfully";

        // check if multiple records
        if (request()->has("ids")) {
            $vendor = Vendor::whereIn('id', request('ids'))->delete();

            // foreach (request('ids') as $id) {
            //     $vendor = Vendor::findOrFail($id);
            //     $vendor->delete();
            // }

            $message = "Vendor(s) deleted successfully";
        } else {
            $vendor = Vendor::findOrFail($id);
            $vendor->delete();
            $message = "Vendor deleted successfully";
        }

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
        $message = "Vendor restored successfully";

        // check if multiple records
        if (request()->has("ids")) {
            $vendor = Vendor::withTrashed()
                ->whereIn('id', request('ids'))
                ->restore();

            // foreach (request('ids') as $id) {
            //     $vendor = Vendor::withTrashed()->findOrFail($id);
            //     $vendor->restore();
            // }

            $message = "Vendor(s) restored successfully";
        } else {
            $vendor = Vendor::withTrashed()->findOrFail($id);
            $vendor->restore();
        }

        return $this->successResponse(null, $message, 201);
    }

    /**
     * Display a listing of the resource
     *
     * @return void
     */
    public function getVendors()
    {
        $vendors = Vendor::with(['expense_types' => function ($query) {
            $query->withTrashed();
        }])
        ->orderBy("name")->get();

        return VendorResource::collection($vendors);
    }
}
