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
            'tin' => ['required', 'max:255', Rule::unique('vendors')->ignore($id, 'id')],
            'contact_person' => ['nullable', 'max:150'],
            'mobile_number' => ['nullable', 'max:50'],
            'telephone_number' => ['nullable', 'max:50'],
            'website' => ['nullable', 'max:150'],
            'remarks' => ['nullable'],
            'is_vat_inclusive' => ['required'],

            'address' => ['nullable'],
            // 'building_address' => ['nullable', 'max:150'],
            // 'street_name' => ['nullable', 'max:150'],
            // 'street_address' => ['nullable', 'max:150'],
            // 'subdivision' => ['nullable', 'max:150'],
            // 'barangay' => ['nullable', 'max:150'],
            // 'city' => ['nullable', 'max:150'],
            // 'province' => ['nullable', 'max:150'],
            // 'country' => ['nullable', 'max:150'],
            // 'zip' => ['nullable', 'max:50'],
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

        $vendors = Vendor::orderBy($sortBy, $sortType);

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
        // $vendor->building_address = $request->building_address;
        // $vendor->street_name = $request->street_name;
        // $vendor->street_address = $request->street_address;
        // $vendor->subdivision = $request->subdivision;
        // $vendor->barangay = $request->barangay;
        // $vendor->city = $request->city;
        // $vendor->province = $request->province;
        // $vendor->country = $request->country;
        // $vendor->zip = $request->zip;

        $vendor->save();

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
        $vendor = Vendor::findOrFail($id);

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
                $vendor = Vendor::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), null)->validate();

                $vendor = Vendor::findOrFail($id);

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
                // $vendor->building_address = $request->building_address;
                // $vendor->street_name = $request->street_name;
                // $vendor->street_address = $request->street_address;
                // $vendor->subdivision = $request->subdivision;
                // $vendor->barangay = $request->barangay;
                // $vendor->city = $request->city;
                // $vendor->province = $request->province;
                // $vendor->country = $request->country;
                // $vendor->zip = $request->zip;

                $vendor->save();

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
        $vendor = Vendor::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
