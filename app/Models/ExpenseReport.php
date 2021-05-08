<?php

namespace App\Models;

use App\User;
use App\Models\Expense;
use App\Models\Payment;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;

class ExpenseReport extends Model
{
    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | INITIALIZATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    use SoftDeletes, LogsActivity;
    use EagerLoadPivotTrait;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($expense_report) {
            abort_if(!auth()->user()->is_admin && $expense_report->approved_at != null, 422, "Approved expense report can't be deleted.");
            abort_if($expense_report->payments()->count() > 0, 422, "Some records can't be deleted.");
        });
    }
    
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
    protected $guarded = [];

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
        'balance',
        'status',
        'is_late_submitted',
        'is_late_approved',
        'expense_start_date',
        'expense_end_date',
        "total_expense_amount",
        "total_reimbursable_amount",
        "received_payment_amount",
        "unreceived_payment_amount",
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
    protected static $logName = "expense_report";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} expense report";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'expense_reports',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "expense_reports/{$this->id}"
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
     * @return mixed
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    /**
     * Displays the payments associated with expense report.
     *
     * @return mixed
     */
    public function payments()
    {
        return $this->belongsToMany(Payment::class)
                    ->where("cancelled_at", null)
                    ->withPivot('payment')
                    ->withTimestamps();
    }

    /**
     * Displays the user associated with Expense Report.
     *
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Displays the status of Expense Report
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

        $submitted = is_null($this->submitted_at);
        $reviewed = is_null($this->reviewed_at);
        $approved = is_null($this->approved_at);
        $rejected = is_null($this->rejected_at);
        $deleted = is_null($this->deleted_at);
        // $paid = false;
        $paid = ($this->payments->count() > 0);

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense Report was deleted',
                'status' => 'Deleted',
            ];

            return $arr;
        }

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense Report was deleted',
                'status' => 'Deleted',
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

        if ($paid) {
            if ($this->getReceivedPaymentAmountAttribute() > 0) {
                if ($this->getBalanceAttribute() == 0) {
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

    public function getIsLateSubmittedAttribute()
    {
        $is_late_submitted = false;
        $submission_period = $this->submission_period;
        $due_date = Carbon::now()->format("Y-m-d");

        // $min_date = DB::table('expense_reports')
        //     ->where("expense_reports.id", $this->id)
        //     ->join("expenses", "expenses.expense_report_id", "=", "expense_reports.id")
        //     ->select(DB::raw("
        //         MIN(expenses.date) as min_date,
        //         DATE_ADD(
        //             MIN(`expenses`.`date`),
        //             INTERVAL (1- DAYOFWEEK(MIN(`expenses`.`date`))) DAY
        //         ) as start_date,
        //         DATE_ADD(
        //             MIN(`expenses`.`date`),
        //             INTERVAL (7- DAYOFWEEK(MIN(`expenses`.`date`))) DAY
        //         ) as end_date
        //     "))
        //     ->first();

        // return Carbon::yesterday("Asia/Manila");

        switch ($submission_period) {
            case 'Weekly':
                $due_date = Carbon::createFromFormat('Y-m-d', $this->getExpenseStartDateAttribute())->endOfWeek()->format("Y-m-d");
                break;
            case 'Monthly':
                $due_date = Carbon::createFromFormat('Y-m-d', $this->getExpenseStartDateAttribute())->endOfMonth()->format("Y-m-d");
                break;
            default:
                // $due_date = Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->endOfDay()->format("Y-m-d");
                break;
        }

        // return $due_date;

        if ($this->submitted_at) {
            // $due_date = Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->addDays($this->encoding_period ?? 0)->format("Y-m-d");
            $submitted_date = Carbon::createFromFormat('Y-m-d H:i:s', $this->submitted_at)->format("Y-m-d");

            if ($due_date < $submitted_date) {
                $is_late_submitted = true;
            }
        }
        return $is_late_submitted;
    }

    public function getIsLateApprovedAttribute()
    {
        $is_late_approved = false;

        if ($this->approved_at) {
            $due_date = Carbon::createFromFormat('Y-m-d H:i:s', $this->submitted_at)->addDays($this->approval_period ?? 0)->format("Y-m-d");
            $approved_date = Carbon::createFromFormat('Y-m-d H:i:s', $this->approved_at)->format("Y-m-d");

            if ($due_date < $approved_date) {
                $is_late_approved = true;
            }
        }
        
        return $is_late_approved;
    }

    /**
     * Displays the earliest start date covered by the expense report.
     *
     * @return mixed
     */
    public function getExpenseStartDateAttribute()
    {
        return $this->expenses()->withTrashed()->min("date");
        // return date('Y-m-d', min(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray())));
    }

    /**
     * Displays the most recent end date covered by the expense report.
     *
     * @return mixed
     */
    public function getExpenseEndDateAttribute()
    {
        return date('Y-m-d', max(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray())));
    }
    
    /**
     * getTotalExpenseAmountAttribute
     *
     * @return mixed
     */
    public function getTotalExpenseAmountAttribute()
    {
        return $this->expenses()->withTrashed()->get()->sum('amount');
    }
    
    /**
     * getTotalReimbursableAmountAttribute
     *
     * @return mixed
     */
    public function getTotalReimbursableAmountAttribute()
    {
        return $this->expenses()->withTrashed()->get()->sum('reimbursable_amount');
    }

    /**
     * getBalanceAttribute
     *
     * @return mixed
     */
    public function getBalanceAttribute()
    {
        $sum_payment = 0;

        foreach ($this->payments as $payment) {
            $sum_payment += $payment->pivot->payment;
        }

        return $this->getTotalExpenseAmountAttribute() - $sum_payment;
    }
    
    /**
     * getReceivedPaymentAmountAttribute
     *
     * @return mixed
     */
    public function getReceivedPaymentAmountAttribute()
    {
        $payments = $this->payments()->where("received_at", "<>", null)->get();
        $sum_received_payment = 0;

        // return $payments;

        foreach ($payments as $payment) {
            $sum_received_payment += $payment->pivot->payment;
        }

        return $sum_received_payment;
    }

    /**
     * getReceivedPaymentAmountAttribute
     *
     * @return mixed
     */
    public function getUnreceivedPaymentAmountAttribute()
    {
        $payments = $this->payments()->where("received_at", null)->get();
        $sum_unreceived_payment = 0;

        // return $payments;

        foreach ($payments as $payment) {
            $sum_unreceived_payment += $payment->pivot->payment;
        }

        return $sum_unreceived_payment;
    }
    
    /**
     * getCreatedInfoAttribute
     *
     * @return mixed
     */
    public function getCreatedInfoAttribute()
    {
        // if ($this->created_at) {
        //     return [
        //         "created_at" => $this->created_at,
        //         "created_by" => User::withTrashed()->findOrFail($this->created_by)
        //         // "created_by" => User::findOrFail($this->created_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getUpdatedInfoAttribute
     *
     * @return mixed
     */
    public function getUpdatedInfoAttribute()
    {
        // if ($this->updated_at) {
        //     return [
        //         "updated_at" => $this->updated_at,
        //         "updated_by" => User::withTrashed()->findOrFail($this->updated_by)
        //         // "updated_by" => User::findOrFail($this->updated_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getDeletedInfoAttribute
     *
     * @return mixed
     */
    public function getDeletedInfoAttribute()
    {
        // if ($this->deleted_at) {
        //     return [
        //         "deleted_at" => $this->deleted_at,
        //         "deleted_by" => User::withTrashed()->findOrFail($this->deleted_by)
        //         // "deleted_by" => User::findOrFail($this->deleted_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getSubmittedInfoAttribute
     *
     * @return mixed
     */
    public function getSubmittedInfoAttribute()
    {
        // if ($this->submitted_at) {
        //     return [
        //         "submitted_at" => $this->submitted_at,
        //         "submitted_by" => User::withTrashed()->findOrFail($this->submitted_by)
        //         // "submitted_by" => User::findOrFail($this->submitted_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getReviewedInfoAttribute
     *
     * @return mixed
     */
    public function getReviewedInfoAttribute()
    {
        // if ($this->reviewed_at) {
        //     return [
        //         "reviewed_at" => $this->reviewed_at,
        //         "reviewed_by" => User::withTrashed()->findOrFail($this->reviewed_by)
        //         // "reviewed_by" => User::findOrFail($this->reviewed_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getApprovedInfoAttribute
     *
     * @return mixed
     */
    public function getApprovedInfoAttribute()
    {
        // if ($this->approved_at) {
        //     return [
        //         "approved_at" => $this->approved_at,
        //         "approved_by" => User::withTrashed()->findOrFail($this->approved_by)
        //         // "approved_by" => User::findOrFail($this->approved_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getRejectedInfoAttribute
     *
     * @return mixed
     */
    public function getRejectedInfoAttribute()
    {
        // if ($this->rejected_at) {
        //     return [
        //         "rejected_at" => $this->rejected_at,
        //         "rejected_by" => User::withTrashed()->findOrFail($this->rejected_by)
        //         // "rejected_by" => User::findOrFail($this->rejected_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getReimbursedInfoAttribute
     *
     * @return mixed
     */
    public function getReimbursedInfoAttribute()
    {
        if ($this->getReceivedPaymentAmountAttribute() > 0) {
            return [
                "payments" => $this->payments
            ];
        }

        return null;
    }
}
