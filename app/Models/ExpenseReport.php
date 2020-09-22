<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Askedio\SoftCascade\Traits\SoftCascadeTrait;

class ExpenseReport extends Model
{
    use SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    // protected $softCascade = ['expenses'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code', 'description', 'remarks', 'notes', 'employee_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // 'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        // 'email_verified_at' => 'datetime',
    ];

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

    // public function payment_requests()
    // {
    //     // return $this->belongsToMany(PaymentRequest::class);
    //     return $this->belongsToMany(
    //         PaymentRequest::class,
    //         'expense_report_payment_request',
    //         'expense_report_id',
    //         'payment_request_id',
    //     )
    //         ->withPivot('remarks', 'is_cancelled')
    //         ->withTimestamps();
    // }

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
                'color' => 'red',
                'remarks' => 'Expense Report was moved to archive',
                'status' => 'Archived',
            ];

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense Report was cancelled',
                'status' => 'Cancelled',
            ];

            return $arr;
        }

        if (!$paid) {

            switch ($this->payment->status()["status"]) {
                case 'Completed':
                    $arr = [
                        'color' => 'green',
                        'remarks' => 'Payment transaction was completed',
                        'status' => 'Paid/Reimbursed',
                    ];
                    break;

                default:
                    $arr = [
                        'color' => 'green',
                        'remarks' => 'Processing Payment',
                        'status' => 'Approved',
                    ];
                    break;
            }

            return $arr;
        }

        if (!$approved) {
            $arr = [
                'color' => 'green',
                'remarks' => 'Processing Payment',
                'status' => 'Approved',
            ];

            return $arr;
        }

        if (!$reviewed) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'For Approval',
                'status' => 'Reviewed',
            ];

            return $arr;
        }

        if (!$submitted) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Submitted expense report for approval',
                'status' => 'Pending',
            ];

            return $arr;
        }

        $arr = [
            'color' => 'blue',
            'remarks' => 'Expense Report for submission',
            'status' => 'For Submission',
        ];

        return $arr;
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
