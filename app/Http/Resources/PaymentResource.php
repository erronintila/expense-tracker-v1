<?php

namespace App\Http\Resources;

use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            // -------------------------------------------------------------------
            // Fields
            // -------------------------------------------------------------------
            "id" => $this->id,
            "code" => $this->code,
            "reference_no" => $this->reference_no,
            "voucher_no" => $this->voucher_no,
            "date" => $this->date,
            "description" => $this->description,
            "cheque_no" => $this->cheque_no,
            "cheque_date" => $this->cheque_date,
            "amount" => $this->getTotalAmountAttribute(),
            // "amount" => $this->amount,
            "payee" => $this->payee,
            "payee_address" => $this->payee_address,
            "payee_phone" => $this->payee_phone,
            "remarks"  => $this->remarks,
            "notes" => $this->notes,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "approved_at" => $this->approved_at,
            "released_at" => $this->released_at,
            "received_at" => $this->received_at,
            "cancelled_at" => $this->cancelled_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,
            "approved_by" => $this->approved_by,
            "released_by" => $this->released_by,
            "received_by" => $this->received_by,
            "cancelled_by" => $this->cancelled_by,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "expense_reports" => ExpenseReportResource::collection($this->whenLoaded('expense_reports')),
            // "expenses" => $this->expenses,
            "employee" => new EmployeeResource($this->whenLoaded('employee'))
        ];

        return parent::toArray($request);


        // // $expense_reports = ExpenseReportResource::collection($this->expense_reports()->withTrashed()->get());
        // $expense_reports = $this->expense_reports;

        // return [
        //     "id" => $this->id,
        //     "code" => $this->code,
        //     "reference_no" => $this->reference_no,
        //     "voucher_no" => $this->voucher_no,
        //     "description" => $this->description,
        //     "date" => $this->date,
        //     "cheque_no" => $this->cheque_no,
        //     "cheque_date" => $this->cheque_date,
        //     "amount" => $this->getTotalAmountAttribute(),
        //     // "amount" => $this->amount,
        //     // "payee" => $this->payee,
        //     // "payee_address" => $this->payee_address,
        //     // "payee_phone" => $this->payee_phone,
        //     "remarks"  => $this->remarks,
        //     "notes" => $this->notes,
        //     "expense_reports" => $expense_reports,
        //     "total_expense_amount" => $expense_reports,
        //     // "employee" => new EmployeeResource($this->employee) ?? [],
        //     "employee" => $this->employee ?? [],

        //     // "approved_at" => Carbon::parse($this->approved_at)->toDateTimeString(),
        //     // "cancelled_at" => Carbon::parse($this->cancelled_at)->toDateTimeString(),
        //     // "created_at" => Carbon::parse($this->created_at)->toDateTimeString(),
        //     // "updated_at" => Carbon::parse($this->updated_at)->toDateTimeString(),
        //     // "deleted_at" => Carbon::parse($this->deleted_at)->toDateTimeString(),
        //     "created" => $this->getCreatedInfoAttribute(),
        //     "updated" => $this->getUpdatedInfoAttribute(),
        //     "deleted" => $this->getDeletedInfoAttribute(),
        //     "approved" => $this->getApprovedInfoAttribute(),
        //     "cancelled" => $this->getCancelledInfoAttribute(),
        //     "released" => $this->getReleasedInfoAttribute(),
        //     "received" => $this->getReceivedInfoAttribute(),

        //     "status" => $this->getStatusAttribute(),

        //     "logs" => [],

        //     "total_amount" => $this->getTotalAmountAttribute()
        // ];
    }
}
