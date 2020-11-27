<?php

namespace App\Http\Resources;

use App\Models\Employee;
use App\Models\Expense;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Activitylog\Models\Activity;

class ExpenseReportResource extends JsonResource
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
            "description" => $this->description,
            "remarks" => $this->remarks,
            "notes" => $this->notes,
            "submission_period" => $this->submission_period,
            "approval_period" => $this->approval_period,

            // -------------------------------------------------------------------
            // Transaction Logs
            // -------------------------------------------------------------------
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "deleted_at" => $this->deleted_at,
            "submitted_at" => $this->submitted_at,
            "reviewed_at" => $this->reviewed_at,
            "approved_at" => $this->approved_at,
            "rejected_at" => $this->rejected_at,
            "cancelled_at" => $this->cancelled_at,

            "created_by" => $this->created_by,
            "updated_by" => $this->updated_by,
            "deleted_by" => $this->deleted_by,
            "submitted_by" => $this->submitted_by,
            "reviewed_by" => $this->reviewed_by,
            "approved_by" => $this->approved_by,
            "rejected_by" => $this->rejected_by,
            "cancelled_by" => $this->cancelled_by,

            // -------------------------------------------------------------------
            // Relationships
            // -------------------------------------------------------------------
            "expenses" => ExpenseResource::collection($this->whenLoaded('expenses')),
            "payments" => PaymentResource::collection($this->whenLoaded('payments')),
            "employee" => new EmployeeResource($this->whenLoaded('employee'))
        ];


        return parent::toArray($request);

        // $activities = Activity::where("subject_type", "App\Models\ExpenseReport")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
        // $logs = [];
        
        // foreach ($activities as $activity) {
        //     $temp = [
        //         "causer" => User::find($activity["causer_id"]),
        //         "created_at" => $activity["created_at"],
        //         "description" => $activity["description"],
        //     ];

        //     array_push($logs, $temp);
        // }

        // return [
        //     "id" => $this->id,
        //     "code" => $this->code,
        //     "reference_no" => $this->reference_no,
        //     "description" => $this->description,
        //     "remarks" => $this->remarks,
        //     "notes" => $this->notes,
        //     "submission_period" => $this->submission_period,
        //     "approval_period" => $this->approval_period,
        //     "from" => date("Y-m-d", min(array_map("strtotime", $this->expenses->pluck("date")->toArray()))),
        //     "to" => date("Y-m-d", max(array_map("strtotime", $this->expenses->pluck("date")->toArray()))),
        //     "status" => $this->getStatusAttribute(),
        //     // "status" => [
        //     //     "color" => "red",
        //     //     "remarks" => "Status is unindentified",
        //     //     "status" => "Error",
        //     // ],

        //     "total" => $this->getTotalExpenseAmountAttribute(),
        //     // "total" => 0,
        //     "total_reimbursable" => $this->getTotalReimbursableAmountAttribute(),
        //     // "total_reimbursable" => 0,
        //     "paid" => $this->getTotalExpenseAmountAttribute() - $this->getBalanceAttribute(),
        //     // "paid" => 0,
        //     "payments" => $this->payments,
        //     // "payments" => null,
        //     "balance" => $this->getBalanceAttribute(),
        //     // "balance" => 0,
        //     "total_received_payment" => $this->getReceivedPaymentAmountAttribute(),
        //     // "total_received_payment" => 0,

        //     // "employee" => new EmployeeResource($this->employee()->withTrashed()->first()),
        //     // "expenses" => ExpenseResource::collection($this->expenses()->withTrashed()->get()),

        //     "employee" => $this->employee,
        //     // "employee" => ["id" => null, "name" => ""],
        //     // "expenses" => $this->expenses,
        //     "expenses" => [],

        //     "created" => $this->getCreatedInfoAttribute(),
        //     "updated" => $this->getUpdatedInfoAttribute(),
        //     "deleted" => $this->getDeletedInfoAttribute(),
        //     "submitted" => $this->getSubmittedInfoAttribute(),
        //     "reviewed" => $this->getReviewedInfoAttribute(),
        //     "approved" => $this->getApprovedInfoAttribute(),
        //     "rejected" => $this->getRejectedInfoAttribute(),
        //     "cancelled" => $this->getCancelledInfoAttribute(),

        //     // "created" => [ "created_at"=> null, "created_by"=> [ "name"=> "" ] ],
        //     // "updated" => [ "updated_at"=> null, "updated_by"=> [ "name"=> "" ] ],
        //     // "deleted" => [ "deleted_at"=> null, "deleted_by"=> [ "name"=> "" ] ],
        //     // "submitted" => [ "submitted_at"=> null, "submitted_by"=> [ "name"=> "" ] ],
        //     // "reviewed" => [ "reviewed_at"=> null, "reviewed_by"=> [ "name"=> "" ] ],
        //     // "approved" => [ "approved_at"=> null, "approved_by"=> [ "name"=> "" ] ],
        //     // "rejected" => [ "rejected_at"=> null, "rejected_by"=> [ "name"=> "" ] ],
        //     // "cancelled" => [ "cancelled_at"=> null, "cancelled_by"=> [ "name"=> "" ] ],

        //     "logs" => $logs,
        // ];
    }
}
