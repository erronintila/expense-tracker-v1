<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\VendorResource;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
            'code' => ['nullable', 'max:255'],
            'name' => ['required', 'max:255'],
            'email' => ['required', 'max:255'],
            'tin' => ['required', 'max:255'],
            'contact_person' => ['required', 'max:255'],
            'phone' => ['required', 'max:255'],
            'address' => ['required', 'max:255'],
            'remarks' => ['nullable', 'max:255'],
            'is_vat_inclusive' => ['required', 'max:255'],
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $vendor = Vendor::orderBy('name')->get();
        $count = count($vendor);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $vendor = Vendor::onlyTrashed()->orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
                default:
                    $vendor = Vendor::orderBy('name')->limit($request->limit ?? $count)->get();
                    break;
            }
        }

        return response(
            [
                'data' => VendorResource::collection($vendor),
                'message' => 'Vendors retrieved successfully'
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

        $vendor = new Vendor();

        $vendor->code = $request->code;
        $vendor->name = $request->name;
        $vendor->email = $request->email;
        $vendor->tin = $request->tin;
        $vendor->contact_person = $request->contact_person;
        $vendor->phone = $request->phone;
        $vendor->address = $request->address;
        $vendor->remarks = $request->remarks;
        $vendor->is_vat_inclusive = $request->is_vat_inclusive;

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
                $vendor->phone = $request->phone;
                $vendor->address = $request->address;
                $vendor->remarks = $request->remarks;
                $vendor->is_vat_inclusive = $request->is_vat_inclusive;

                $vendor->save();

                break;
        }

        return response(
            [
                'data' => new VendorResource($vendor),
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
                'data' => new VendorResource($vendor),
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
