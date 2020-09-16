<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ExpenseTypeResource;
use App\Http\Resources\JobResource;
use App\Http\Resources\VendorResource;
use App\Models\Department;
use App\Models\Employee;
use App\Models\ExpenseType;
use App\Models\Job;
use App\Models\Vendor;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function employees()
    {
        return EmployeeResource::collection(Employee::orderBy("last_name")->get());
    }

    public function vendors()
    {
        return VendorResource::collection(Vendor::orderBy("name")->get());
    }

    public function departments()
    {
        return DepartmentResource::collection(Department::orderBy("name")->get());
    }

    public function expense_types()
    {
        return ExpenseTypeResource::collection(ExpenseType::orderBy("name")->get());
    }

    public function jobs()
    {
        return JobResource::collection(Job::orderBy("name")->get());
    }
}
