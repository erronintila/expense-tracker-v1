<?php

namespace App\Http\Resources;

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
        // return parent::toArray($request);

        $activities = Activity::where("subject_type", "App\Models\ExpenseReport")->where("subject_id", $this->id)->orderBy("created_at", "DESC")->get();
        $logs = [];
        
        foreach ($activities as $activity) {
            $temp = [
                "causer" => User::find($activity['causer_id']),
                "created_at" => $activity['created_at'],
                "description" => $activity['description'],
            ];

            array_push($logs, $temp);
        }

        return [
            'id' => $this->id,
            'code' => $this->code,
            'reference_no' => $this->reference_no,
            'description' => $this->description,
            'remarks' => $this->remarks,
            'notes' => $this->notes,
            'submission_period' => $this->submission_period,
            'approval_period' => $this->approval_period,
            'from' => date('Y-m-d', min(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray()))),
            'to' => date('Y-m-d', max(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray()))),
            'status' => $this->getStatusAttribute(),

            'total' => $this->getTotalExpenseAmountAttribute(),
            'total_reimbursable' => $this->getTotalReimbursableAmountAttribute(),
            'paid' => $this->getTotalExpenseAmountAttribute() - $this->getBalanceAttribute(),
            'payments' => $this->payments,
            'balance' => $this->getBalanceAttribute(),
            'total_received_payment' => $this->getReceivedPaymentAmountAttribute(),

            // 'employee' => new EmployeeResource($this->employee()->withTrashed()->first()),
            // 'expenses' => ExpenseResource::collection($this->expenses()->withTrashed()->get()),

            'employee' => $this->employee()->withTrashed()->first(),
            'expenses' => $this->expenses()->withTrashed()->get(),

            'created' => $this->getCreatedInfoAttribute(),
            'updated' => $this->getUpdatedInfoAttribute(),
            'deleted' => $this->getDeletedInfoAttribute(),
            'submitted' => $this->getSubmittedInfoAttribute(),
            'reviewed' => $this->getReviewedInfoAttribute(),
            'approved' => $this->getApprovedInfoAttribute(),
            'rejected' => $this->getRejectedInfoAttribute(),
            'cancelled' => $this->getCancelledInfoAttribute(),

            'logs' => $logs,
        ];
    }
}
