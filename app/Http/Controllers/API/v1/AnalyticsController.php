<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponse;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    use ApiResponse;

    public function show_expense_analytics()
    {
        $data = [];

        $data = DB::table('expenses');

        if (request()->has('type')) {
            switch (request('type')) {
                case 'department':
                    # code...
                    break;
                case 'employee':
                    # code...
                    break;
                case 'vendor':
                    # code...
                    break;
                case 'expense_type':
                    # code...
                    break;
                case 'tax':
                    # code...
                    break;
                default:
                    abort(500, 'Error Occurred. Please contant administrator');
                    break;
            }
        }

        $data = $data->get();
        
        return $this->successResponse($data, "", 200);
    }

    public function show_expense_report_analytics()
    {
        $data = [];

        $data = DB::table('expense_reports');

        if (request()->has('type')) {
            switch (request('type')) {
                case 'employee':
                    # code...
                    break;
                case 'submission':
                    # code...
                    break;
                case 'approval':
                    # code...
                    break;
                default:
                    abort(500, 'Error Occurred. Please contant administrator');
                    break;
            }
        }

        $data = $data->get();

        return $this->successResponse($data, "", 200);
    }

    public function show_payment_analytics()
    {
        $data = [];

        $data = DB::table('payments');

        if (request()->has('type')) {
            switch (request('type')) {
                case 'release':
                    # code...
                    break;
                case 'confirmation':
                    # code...
                    break;
                default:
                    abort(500, 'Error Occurred. Please contant administrator');
                    break;
            }
        }

        $data = $data->get();

        return $this->successResponse($data, "", 200);
    }

    public function show_employee_analytics()
    {
        $data = [];

        $data = DB::table('employees');

        if (request()->has('type')) {
            switch (request('type')) {
                case 'fund':
                    # code...
                    break;
                default:
                    abort(500, 'Error Occurred. Please contant administrator');
                    break;
            }
        }

        $data = $data->get();

        return $this->successResponse($data, "", 200);
    }

    public function show_vendor_analytics()
    {
        $data = [];

        $data = DB::table('vendors');

        $data = $data->get();

        return $this->successResponse($data, "", 200);
    }
}
