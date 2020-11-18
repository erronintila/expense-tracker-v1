<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use App\User;

class ExpenseReport extends Model
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
    protected $guarded = [
        // 'code', 'description', 'remarks', 'notes', 'employee_id'
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
    protected static $logAttributesToIgnore = ['updated_at', "updated_by"];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "expense_report";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} expense report";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'table' => 'expense_reports',
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

    public function payments()
    {
        return $this->belongsToMany(Payment::class)->withPivot('payment')->withTimestamps();
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

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | CUSTOM FIELDS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Displays the status of Expense Report
     *
     * @return void
     */
    public function status()
    {
        $arr = [
            'color' => 'red',
            'remarks' => 'Status is unindentified',
            'status' => 'Error',
        ];

        $submitted = is_null($this->submitted_at);
        $reviewed = is_null($this->reviewed_at);
        $approved = is_null($this->approved_at);
        $rejected = is_null($this->rejected_at);
        $cancelled = is_null($this->cancelled_at);
        $deleted = is_null($this->deleted_at);
        $paid = is_null($this->payments);

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense Report was cancelled',
                'status' => 'Cancelled',
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

        if (!$rejected) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense Report was rejected',
                'status' => 'Rejected',
            ];

            return $arr;
        }

        if (!$paid) {
            if ($this->balance() == 0) {
                $arr = [
                    'color' => 'green',
                    'remarks' => 'Payment transaction was completed',
                    'status' => 'Reimbursed',
                ];
            } else {
                $arr = [
                    'color' => 'cyan',
                    'remarks' => 'Processing Payment',
                    'status' => 'Approved',
                ];
            }
            
            // switch ($this->payment->status()["status"]) {
            //     case 'Completed':
            //         $arr = [
            //             'color' => 'green',
            //             'remarks' => 'Payment transaction was completed',
            //             'status' => 'Reimbursed',
            //         ];
            //         break;

            //     default:
            //         $arr = [
            //             'color' => 'cyan',
            //             'remarks' => 'Processing Payment',
            //             'status' => 'Approved',
            //         ];
            //         break;
            // }

            return $arr;
        }

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
                'remarks' => 'Submitted expense report for approval',
                'status' => 'Submitted',
            ];

            return $arr;
        }

        $arr = [
            'color' => 'orange',
            'remarks' => 'Expense Report is not yet submitted',
            'status' => 'Unsubmitted',
        ];

        return $arr;
    }

    /**
     * late_submitted
     *
     * @return void
     */
    public function late_submitted()
    {
        return false;
    }

    /**
     * late_approved
     *
     * @return void
     */
    public function late_approved()
    {
        return false;
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

    public function total_amount()
    {
        return $this->expenses()->withTrashed()->get()->sum('amount');
    }

    public function total_reimbursable_amount()
    {
        return $this->expenses()->withTrashed()->get()->sum('reimbursable_amount');
    }

    public function balance()
    {
        $sum_payment = 0;

        foreach ($this->payments as $payment) {
            $sum_payment += $payment->pivot->payment;
        }

        return $this->total_amount() - $sum_payment;
    }

    public function created_by_user()
    {
        if ($this->created_at) {
            return [
                "created_at" => $this->created_at,
                "created_by" => User::withTrashed()->findOrFail($this->created_by)
            ];
        }

        return null;
    }

    public function updated_by_user()
    {
        if ($this->updated_at) {
            return [
                "updated_at" => $this->updated_at,
                "updated_by" => User::withTrashed()->findOrFail($this->updated_by)
            ];
        }

        return null;
    }

    public function deleted_by_user()
    {
        if ($this->deleted_at) {
            return [
                "deleted_at" => $this->deleted_at,
                "deleted_by" => User::withTrashed()->findOrFail($this->deleted_by)
            ];
        }

        return null;
    }

    public function submitted()
    {
        if ($this->submitted_at) {
            return [
                "submitted_at" => $this->submitted_at,
                "submitted_by" => User::withTrashed()->findOrFail($this->submitted_by)
            ];
        }

        return null;
    }

    public function reviewed()
    {
        if ($this->reviewed_at) {
            return [
                "reviewed_at" => $this->reviewed_at,
                "reviewed_by" => User::withTrashed()->findOrFail($this->reviewed_by)
            ];
        }

        return null;
    }

    public function approved()
    {
        if ($this->approved_at) {
            return [
                "approved_at" => $this->approved_at,
                "approved_by" => User::withTrashed()->findOrFail($this->approved_by)
            ];
        }

        return null;
    }

    public function rejected()
    {
        if ($this->rejected_at) {
            return [
                "rejected_at" => $this->rejected_at,
                "rejected_by" => User::withTrashed()->findOrFail($this->rejected_by)
            ];
        }

        return null;
    }

    public function cancelled()
    {
        if ($this->cancelled_at) {
            return [
                "cancelled_at" => $this->cancelled_at,
                "cancelled_by" => User::withTrashed()->findOrFail($this->cancelled_by)
            ];
        }

        return null;
    }

    public function reimbursed()
    {
        $expense_report = $this->expense_report;

        return null;
    }
}
