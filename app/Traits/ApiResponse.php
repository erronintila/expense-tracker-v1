<?php

namespace App\Traits;

trait ApiResponse
{    
    /**
     * Returns a success response on each request
     *
     * @param  mixed $data
     * @param  mixed $message
     * @param  mixed $code
     * @return mixed
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
     * Returns an error response on each request
     *
     * @param  mixed $message
     * @param  mixed $code
     * @return mixed $data
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
