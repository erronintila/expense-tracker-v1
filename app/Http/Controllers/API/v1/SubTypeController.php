<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\SubType;
use Illuminate\Http\Request;

class SubTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
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

            foreach ($request->sub_types as $key => $value) {

                $sub_type = SubType::findOrFail($value["id"]);

                if (count($sub_type->expenses)) {

                    return response(
                        [
                            'message' => 'Sub-type contains parent data'
                        ],
                        403
                    );
                }

                $sub_type->delete();
            }
        } else {

            $sub_type = SubType::findOrFail($id);

            if (count($sub_type->expenses)) {

                return response(
                    [
                        'message' => 'Sub-type contains parent data'
                    ],
                    403
                );
            }

            $sub_type->delete();
        }

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
