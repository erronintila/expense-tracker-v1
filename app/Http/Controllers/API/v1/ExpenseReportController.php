<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseReportResource;
use App\Models\ExpenseReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ExpenseReportController extends Controller
{
    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data, $id)
    {
        return Validator::make($data, [
            'code' => ['nullable', Rule::unique('employees')->ignore($id, 'id'), 'max:255'],
            'description' => ['required', 'max:255'],
            'employee_id' => ['required'],
            'remarks' => ['nullable'],
            'notes' => ['nullable'],
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
        $sortBy = $request->sortBy ?? "created_at";
        $sortType = $request->sortType ?? "desc";
        $itemsPerPage = $request->itemsPerPage ?? 10;

        $expense_reports = ExpenseReport::orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch ($request->status) {
                case 'Archived':
                    $expense_reports = $expense_reports->onlyTrashed();
                    break;
                default:
                    $expense_reports = $expense_reports;
                    break;
            }
        }

        $expense_reports = $expense_reports->where(function ($query) use ($search) {
            $query->where('code', "like", "%" . $search . "%");
            $query->orWhere('description', "like", "%" . $search . "%");
        });
        $expense_reports = $expense_reports->paginate($itemsPerPage);

        return ExpenseReportResource::collection($expense_reports);
        // $expense_reports = ExpenseReport::latest()->get();
        // $count = count($expense_reports);

        // if (request()->has('status')) {
        //     switch ($request->status) {
        //         case 'Archived':
        //             $expense_reports = ExpenseReport::onlyTrashed()
        //                 ->latest()
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //         default:
        //             $expense_reports = ExpenseReport::latest()
        //                 ->limit($request->limit ?? $count)
        //                 ->get();
        //             break;
        //     }
        // }

        // return response(
        //     [
        //         'data' => ExpenseReportResource::collection($expense_reports),
        //         'message' => 'Expense Reports retrieved successfully'
        //     ],
        //     200
        // );
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

        $expense_report = new ExpenseReport();

        $expense_report->description = $request->description;
        $expense_report->employee_id = $request->employee_id;
        $expense_report->remarks = $request->remarks;
        $expense_report->notes = $request->notes;

        $expense_report->save();

        return response(
            [
                'data' => new ExpenseReportResource($expense_report),
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
        $expense_report = ExpenseReport::findOrFail($id);

        return response(
            [
                'data' => new ExpenseReportResource($expense_report),
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
                $expense_report = ExpenseReport::withTrashed()
                    ->whereIn('id', $request->ids)
                    ->restore();

                break;
            default:
                $this->validator($request->all(), null)->validate();

                $expense_report = ExpenseReport::findOrFail($id);

                $expense_report->description = $request->description;
                $expense_report->employee_id = $request->employee_id;
                $expense_report->remarks = $request->remarks;
                $expense_report->notes = $request->notes;

                $expense_report->save();

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
        $expense_report = ExpenseReport::whereIn('id', $request->ids)->delete();

        return response(
            [
                'message' => 'Deleted successfully'
            ],
            200
        );
    }
}
