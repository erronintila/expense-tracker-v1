<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\VendorResource;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class VendorController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:view all vendors'], ['only' => ['index']]);
        $this->middleware(['permission:view vendors'], ['only' => ['show']]);
        $this->middleware(['permission:add vendors'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit vendors'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete vendors'], ['only' => ['destroy']]);
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

            'code' => ['nullable', 'max:255', Rule::unique('vendors')->ignore($id, 'id')],

            'name' => ['required', 'max:150'],

            'email' => ['nullable', 'email', 'max:150', Rule::unique('vendors')->ignore($id, 'id')],

            'tin' => ['nullable', 'max:255', Rule::unique('vendors')->ignore($id, 'id')],

            'contact_person' => ['nullable', 'max:150'],

            'mobile_number' => ['nullable', 'max:50'],

            'telephone_number' => ['nullable', 'max:50'],

            'website' => ['nullable', 'max:150'],

            'remarks' => ['nullable'],

            'is_vat_inclusive' => ['required'],

            'address' => ['nullable'],
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

        $vendors = Vendor::with(['expense_types' => function ($query) {
            $query->withTrashed();
        }])->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {

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

        return VendorResource::collection($vendors);
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

        $vendor = new Vendor();

        $vendor->code = generate_code(Vendor::class, "VEN", 10);

        $vendor->name = $request->name;

        $vendor->email = $request->email;

        $vendor->tin = $request->tin;

        $vendor->contact_person = $request->contact_person;

        $vendor->mobile_number = $request->mobile_number;

        $vendor->telephone_number = $request->telephone_number;

        $vendor->website = $request->website;

        $vendor->remarks = $request->remarks;

        $vendor->is_vat_inclusive = $request->is_vat_inclusive;

        $vendor->address = $request->address;

        $vendor->save();

        if (request()->has("expense_types")) {
            $vendor->expense_types()->sync($request->expense_types);

            // $expense_types = ExpenseType::withTrashed()->where('expense_type_id', null)->findOrFail($request->expense_types);

            // $vendor->expense_types()->attach($expense_types);
        }

        return response(
            [
                'data' => new VendorResource($vendor),

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
        $vendor = Vendor::withTrashed()->with(['expense_types' => function ($query) {
            $query->withTrashed();
        }])->findOrFail($id);

        return response(
            [
                'data' => new VendorResource($vendor),

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
                        $vendor = Vendor::withTrashed()->findOrFail($id);
        
                        $vendor->restore();
                    }
                } else {
                    $vendor = Vendor::withTrashed()->findOrFail($id);
        
                    $vendor->restore();
                }

                // $vendor = Vendor::withTrashed()
                //     ->whereIn('id', $request->ids)
                //     ->restore();

                break;
            default:

                $this->validator($request->all(), $id)->validate();

                $vendor = Vendor::withTrashed()->findOrFail($id);

                $vendor->code = $request->code;

                $vendor->name = $request->name;

                $vendor->email = $request->email;

                $vendor->tin = $request->tin;

                $vendor->contact_person = $request->contact_person;

                $vendor->mobile_number = $request->mobile_number;

                $vendor->telephone_number = $request->telephone_number;

                $vendor->website = $request->website;

                $vendor->remarks = $request->remarks;

                $vendor->is_vat_inclusive = $request->is_vat_inclusive;

                $vendor->address = $request->address;

                $vendor->save();

                if (request()->has("expense_types")) {
                    $vendor->expense_types()->sync($request->expense_types);
                }

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
                $vendor = Vendor::withTrashed()->findOrFail($id);

                $vendor->delete();
            }
        } else {
            $vendor = Vendor::withTrashed()->findOrFail($id);

            $vendor->delete();
        }

        // $vendor = Vendor::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
