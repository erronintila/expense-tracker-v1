<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use App\User;

class Expense extends Model
{
    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | INITIALIZATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    use SoftDeletes, LogsActivity;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        // 'expense_report_id'
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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'status',
        // 'reimbursed_info',
        // 'cancelled_info',
        // 'rejected_info',
        // 'approved_info',
        // 'reviewed_info',
        // 'submitted_info',
        // 'deleted_info',
        // 'updated_info',
        // 'created_info',
        // 'balance',
        // 'formatted_date',
        // 'formatted_amount',
        // 'expiry_date',
    ];

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LIBRARY/PACKAGE CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Activity Logs Configuration
     *
     *
     */
    // // log changes to all the $fillable/$guarded attributes of the model
    protected static $logUnguarded = true;
    // protected static $logFillable = true;

    // // log the changed attributes for all events
    protected static $logAttributes = ['*'];

    // // Ignoring attributes from logging
    protected static $logAttributesToIgnore = ['updated_at', "updated_by", "deleted_by"];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "expense";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} expense";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'table' => 'expenses',
                'causer_role' => $role,
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Displays the expense type associated with expense.
     *
     * @return mixed
     */
    public function expense_type()
    {
        return $this->belongsTo(ExpenseType::class);
    }

    /**
     * Displays the employee associated with expense.
     *
     * @return mixed
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /**
     * Displays the vendor associated with expense.
     *
     * @return mixed
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function sub_type()
    {
        return $this->belongsTo(ExpenseType::class);
    }

    /**
     * Displays the expense report associated with expense.
     *
     * @return mixed
     */
    public function expense_report()
    {
        return $this->belongsTo(ExpenseReport::class);
    }

    // /**
    //  * Displays the payments associated with expense.
    //  *
    //  * @return mixed
    //  */
    // public function payments()
    // {
    //     return $this->belongsToMany(Payment::class);
    // }

    /**
     * Displays the tax associated with expense.
     *
     * @return mixed
     */
    public function tax()
    {
        return $this->belongsTo(Tax::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Displays the current status of expense.
     *
     * @return mixed
     */
    public function getStatusAttribute()
    {
        $arr = [
            'color' => 'red',
            'remarks' => 'Status is unindentified',
            'status' => 'Error',
        ];

        // $reported = is_null($this->expense_report_id);
        // $submitted = is_null($this->submitted_at);
        // $reviewed = is_null($this->reviewed_at);
        // $approved = is_null($this->approved_at);
        // $cancelled = is_null($this->cancelled_at);
        // $rejected = is_null($this->rejected_at);
        // $deleted = is_null($this->deleted_at);
        // $paid = is_null($this->paid_at);

        $reported = is_null($this->expense_report_id);
        $submitted = is_null($this->expense_report->submitted_at ?? null);
        $reviewed = is_null($this->expense_report->reviewed_at ?? null);
        $approved = is_null($this->expense_report->approved_at ?? null);
        $cancelled = is_null($this->expense_report->cancelled_at ?? null);
        $rejected = is_null($this->expense_report->rejected_at ?? null);
        $deleted = is_null($this->deleted_at);
        // $paid = false;
        // $paid = is_null($this->expense_report->payments ?? null);
        $paid = ($this->expense_report == null ? 0 : $this->expense_report->payments->count() > 0);

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was cancelled',
                'status' => 'Cancelled',
            ];

            // $arr = [
            //     'color' => 'grey',
            //     'remarks' => 'Expense was deleted',
            //     'status' => 'Deleted',
            // ];

            return $arr;
        }

        if ($paid) {
            // $arr = [
            //     'color' => 'green',
            //     'remarks' => 'Expense was paid/reimbursed',
            //     'status' => 'Reimbursed',
            // ];

            $expense_report = $this->expense_report;

            if ($expense_report->getReceivedPaymentAmountAttribute() > 0) {
                if ($expense_report->getBalanceAttribute() == 0) {
                    $arr = [
                        'color' => 'green',
                        'remarks' => 'Payment transaction was completed',
                        'status' => 'Reimbursed',
                    ];
                } else {
                    $arr = [
                        'color' => 'blue',
                        'remarks' => 'Expense Report has not been fully paid',
                        'status' => 'Incomplete Payment',
                    ];
                }
            } else {
                $arr = [
                    'color' => 'blue',
                    'remarks' => 'Payment waiting to be received',
                    'status' => 'Released Payment',
                ];
            }

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was cancelled',
                'status' => 'Cancelled',
            ];

            return $arr;
        }

        if (!$rejected) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was rejected',
                'status' => 'Rejected',
            ];

            return $arr;
        }

        // if (!$paid) {

        //     switch ($this->payment->getStatusAttribute()["status"]) {
        //         case 'Completed':
        //             $arr = [
        //                 'color' => 'green',
        //                 'remarks' => 'Payment transaction was completed',
        //                 'status' => 'Paid/Reimbursed',
        //             ];
        //             break;

        //         default:
        //             $arr = [
        //                 'color' => 'blue',
        //                 'remarks' => 'Processing Payment',
        //                 'status' => 'Approved',
        //             ];
        //             break;
        //     }

        //     return $arr;
        // }

        if (!$approved) {
            $arr = [
                'color' => 'cyan',
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
                'color' => 'blue',
                'remarks' => 'Submitted expense for approval',
                'status' => 'Submitted',
            ];

            return $arr;
        }

        if ($reported) {
            $arr = [
                'color' => 'grey',
                'remarks' => 'Expense is not associated with report',
                'status' => 'Unreported',
            ];

            return $arr;
        }

        if (!$reported && $submitted) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Expense is not yet submitted',
                'status' => 'Unsubmitted',
            ];

            return $arr;
        }

        // $arr = [
        //     'color' => 'orange',
        //     'remarks' => 'Expense for submission',
        //     'status' => 'Unreported',
        // ];

        return $arr;
    }

    /**
     * getExpiryDateAttribute
     *
     * @return mixed
     */
    public function getExpiryDateAttribute()
    {
        //compare date of submission to expiry date
        return false;
    }

    /**
     * Displays the formatted amount of the expense.
     *
     * @return mixed
     */
    public function getFormattedAmountAttribute()
    {
        return "₱ " . number_format($this->amount, 2);
    }

    /**
     * Displays the formatted receipt date of the expense.
     *
     * @return mixed
     */
    public function getFormattedDateAttribute()
    {
        return date('F d, Y', strtotime($this->date));
    }

    /**
     * balance
     *
     * @return mixed
     */
    public function getBalanceAttribute()
    {
        return 0;
    }

    /**
     * getCreatedInfoAttribute
     *
     * @return mixed
     */
    public function getCreatedInfoAttribute()
    {
        if ($this->created_at) {
            return [
                "created_at" => $this->created_at,
                "created_by" => User::withTrashed()->findOrFail($this->created_by)
            ];
        }

        return null;
    }

    /**
     * getUpdatedInfoAttribute
     *
     * @return mixed
     */
    public function getUpdatedInfoAttribute()
    {
        if ($this->updated_at) {
            return [
                "updated_at" => $this->updated_at,
                "updated_by" => User::withTrashed()->findOrFail($this->updated_by)
            ];
        }

        return null;
    }

    /**
     * getDeletedInfoAttribute
     *
     * @return mixed
     */
    public function getDeletedInfoAttribute()
    {
        if ($this->deleted_at) {
            return [
                "deleted_at" => $this->deleted_at,
                "deleted_by" => User::withTrashed()->findOrFail($this->deleted_by)
            ];
        }

        return null;
    }

    /**
     * getSubmittedInfoAttribute
     *
     * @return mixed
     */
    public function getSubmittedInfoAttribute()
    {
        $expense_report = $this->expense_report;

        if ($expense_report && $expense_report->submitted_at) {
            return [
                "submitted_at" => $expense_report->submitted_at,
                "submitted_by" => User::withTrashed()->findOrFail($expense_report->submitted_by)
            ];
        }

        return null;
    }

    /**
     * getReviewedInfoAttribute
     *
     * @return mixed
     */
    public function getReviewedInfoAttribute()
    {
        $expense_report = $this->expense_report;

        if ($expense_report && $expense_report->reviewed_at) {
            return [
                "reviewed_at" => $expense_report->reviewed_at,
                "reviewed_by" => User::withTrashed()->findOrFail($expense_report->reviewed_by)
            ];
        }

        return null;
    }

    /**
     * getApprovedInfoAttribute
     *
     * @return mixed
     */
    public function getApprovedInfoAttribute()
    {
        $expense_report = $this->expense_report;

        if ($expense_report && $expense_report->approved_at) {
            return [
                "approved_at" => $expense_report->approved_at,
                "approved_by" => User::withTrashed()->findOrFail($expense_report->approved_by)
            ];
        }

        return null;
    }

    /**
     * getRejectedInfoAttribute
     *
     * @return mixed
     */
    public function getRejectedInfoAttribute()
    {
        $expense_report = $this->expense_report;

        if ($expense_report && $expense_report->rejected_at) {
            return [
                "rejected_at" => $expense_report->rejected_at,
                "rejected_by" => User::withTrashed()->findOrFail($expense_report->rejected_by)
            ];
        }

        return null;
    }

    /**
     * getCancelledInfoAttribute
     *
     * @return mixed
     */
    public function getCancelledInfoAttribute()
    {
        $expense_report = $this->expense_report;

        if ($expense_report && $expense_report->cancelled_at) {
            return [
                "cancelled_at" => $expense_report->cancelled_at,
                "cancelled_by" => User::withTrashed()->findOrFail($expense_report->cancelled_by)
            ];
        }

        return null;
    }

    /**
     * getReimbursedInfoAttribute
     *
     * @return mixed
     */
    public function getReimbursedInfoAttribute()
    {
        $expense_report = $this->expense_report;

        // if ($expense_report && $expense_report->getBalanceAttribute() == 0 && $expense_report->getReceivedPaymentAmountAttribute() > 0) {
        //     // if ($expense_report && $expense_report->getBalanceAttribute() == 0) {
        //     return [
        //         "reference" => $expense_report->payments()->pluck("code"),
        //     ];
        // }

        if ($expense_report && $this->expense_report->getReceivedPaymentAmountAttribute() > 0) {
            return [
                "payments" => $this->payments
            ];
        }

        return null;
    }
}
