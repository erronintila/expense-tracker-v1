<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExpenseReport extends Model
{
    use SoftDeletes;
    
    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Displays the expenses associated with Expense Report.
     *
     * @return void
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    /**
     * Displays the employee associated with Expense Report.
     *
     * @return void
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function payment_requests()
    {
        // return $this->belongsToMany(PaymentRequest::class);
        return $this->belongsToMany(
            PaymentRequest::class,
            'expense_report_payment_request',
            'expense_report_id',
            'payment_request_id',
        )
            ->withPivot('remarks', 'is_cancelled')
            ->withTimestamps();
    }

    /**
     * Displays the status of Expense Report
     *
     * @return void
     */
    public function status()
    {
        $submitted = is_null($this->submitted_at);
        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->cancelled_at);
        $deleted = is_null($this->deleted_at);
        $reviewed = is_null($this->reviewed_at);
        $paid = is_null($this->payment_id);

        if (!$deleted) {
            $arr = [
                'text' => 'Archived',
                'status' => 'Archived',
                'badge' => '<span class="badge badge-danger">Archived</span>'
            ];

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'text' => 'Cancelled',
                'status' => 'Cancelled',
                'badge' => '<span class="badge badge-danger">Cancelled</span>'
            ];

            return $arr;
        }

        if (!$paid) {

            // if($payment_approved) {
            //     $arr = [
            //         'text' => 'Payment Approved',
            //         'status' => 'Payment for Release',
            //         'badge' => '<span class="badge badge-success">Payment for Release</span>'
            //     ];

            //     return $arr;
            // }

            // if($payment_cancelled) {
            //     $arr = [
            //         'text' => 'Payment Cancelled',
            //         'status' => 'Payment Cancelled',
            //         'badge' => '<span class="badge badge-danger">Payment Cancelled</span>'
            //     ];

            //     return $arr;
            // }

            // if($payment_released) {
            //     $arr = [
            //         'text' => 'Payment Released',
            //         'status' => 'Waiting for Receiver\'s Confirmation',
            //         'badge' => '<span class="badge badge-success">Waiting for Receiver\'s Confirmation</span>'
            //     ];

            //     return $arr;
            // }

            // if($payment_received) {
            //     $arr = [
            //         'text' => 'Payment Received',
            //         'status' => 'Payment Received',
            //         'badge' => '<span class="badge badge-success">Reimbursed</span>'
            //     ];

            //     return $arr;
            // }

            $arr = [
                'text' => 'Paid',
                'status' => 'Paid',
                'badge' => '<span class="badge badge-success">Reimbursed</span>'
            ];

            return $arr;
        }

        if (!$approved) {
            $arr = [
                'text' => 'Approved',
                'status' => 'Processing Payment',
                'badge' => '<span class="badge badge-primary">Processing Payment</span>'
            ];

            return $arr;
        }

        if (!$reviewed) {
            $arr = [
                'text' => 'Reviewed',
                'status' => 'For Approval',
                'badge' => '<span class="badge badge-primary">For Approval</span>'
            ];

            return $arr;
        }

        if (!$submitted) {
            $arr = [
                // 'text' => 'Submitted',
                // 'badge' => '<span class="badge badge-primary">Submitted</span>'
                'text' => 'Submitted',
                'status' => 'For Review',
                // 'badge' => '<span class="badge badge-warning">Pending</span>'
                'badge' => '<span class="badge badge-primary">For Review</span>'
            ];

            return $arr;
        }

        $arr = [
            // 'text' => 'Pending',
            // 'badge' => '<span class="badge badge-warning">Pending</span>'
            'text' => 'Pending',
            'status' => 'For Submission',
            'badge' => '<span class="badge badge-warning">For Submission</span>'
        ];

        return $arr;



        // if ($submitted && $approved && $cancelled && $deleted) {
        //     $arr = [
        //         'text' => 'Pending',
        //         'badge' => '<span class="badge badge-warning">Pending</span>'
        //     ];

        //     return $arr;
        // }
        // if (!$submitted && $approved && $cancelled && $deleted) {
        //     $arr = [
        //         'text' => 'Submitted',
        //         'badge' => '<span class="badge badge-primary">Submitted</span>'
        //     ];

        //     return $arr;
        // }
        // if (!$submitted && !$approved && $cancelled && $deleted) {
        //     $arr = [
        //         'text' => 'Approved',
        //         'badge' => '<span class="badge badge-success">Approved</span>'
        //     ];

        //     return $arr;
        // }
        // if (!$cancelled && $deleted) {
        //     $arr = [
        //         'text' => 'Cancelled',
        //         'badge' => '<span class="badge badge-danger">Cancelled</span>'
        //     ];

        //     return $arr;
        // }
        // if (!$deleted) {
        //     $arr = [
        //         'text' => 'Deleted',
        //         'badge' => '<span class="badge badge-danger">Deleted</span>'
        //     ];

        //     return $arr;
        // }

        // $arr = [
        //     'text' => 'Unknown',
        //     'badge' => '<span class="badge badge-danger">Unknown</span>'
        // ];

        // return $arr;
    }

    /**
     * Displays the earliest start date covered by the expense report.
     *
     * @return void
     */
    public function min_start_date()
    {
        return date('Y-m-d', min(array_map('strtotime', $this->expenses->pluck('date')->toArray())));
    }

    /**
     * Displays the most recent end date covered by the expense report.
     *
     * @return void
     */
    public function max_end_date()
    {
        return date('Y-m-d', max(array_map('strtotime', $this->expenses->pluck('date')->toArray())));
    }
}
