<?php

namespace App\Traits;

trait ApiResponse
{    
    /**
     * successResponse
     *
     * @param  mixed $data
     * @param  mixed $message
     * @param  mixed $code
     * @return void
     */
    protected function successResponse($data, $message = null, $code = 200)
    {
        return response()->json([
            'status'=> 'Success',
            'message' => $message,
            'data' => $data
        ], $code);
    }
    
    /**
     * errorResponse
     *
     * @param  mixed $message
     * @param  mixed $code
     * @return void
     */
    protected function errorResponse($message = null, $code)
    {
        return response()->json([
            'status'=>'Error',
            'message' => $message,
            'data' => null
        ], $code);
    }
}
