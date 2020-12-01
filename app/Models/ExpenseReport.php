<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use App\User;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Illuminate\Support\Facades\DB;

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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        "report_summary",
        'balance',
        'status',
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
        return $this->belongsToMany(Payment::class)->withPivot('payment')->withTimestamps();
    }

    /**
     * Displays the employee associated with Expense Report.
     *
     * @return mixed
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
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function getReportSummaryAttribute()
    {
        $summary = ["min_date" => "", "max_date" => "", "total_expenses" => 0, "total_reimbursable" => 0];

        $summary = DB::table('expense_reports')
            ->join("expenses", "expenses.expense_report_id", "=", "expense_reports.id")
            ->select(DB::raw("
                min(expenses.date) as min_date, 
                max(expenses.date) as max_date, 
                sum(expenses.amount) as total_expenses, 
                sum(expenses.reimbursable_amount) as total_reimbursable
            "))
            ->where(DB::raw("expense_reports.id"), $this->id)
            ->first();

        return $summary;
    }

    public function getPaymentSummaryAttribute()
    {
        $summary = [];

//         SELECT 
// SUM(`expense_report_payment`.`payment`) AS total_payment,
// IFNULL(
// (SELECT SUM(`expense_report_payment`.`payment`) 
// FROM `expense_reports` 
// JOIN `expense_report_payment` ON `expense_report_payment`.`expense_report_id` = `expense_reports`.`id`
// JOIN `payments` ON `payments`.`id` = `expense_report_payment`.`payment_id`
// WHERE `payments`.`received_at` = NULL
// ), 0) AS total_received
// FROM `expense_reports` 
// JOIN `expense_report_payment` ON `expense_report_payment`.`expense_report_id` = `expense_reports`.`id`
// JOIN `payments` ON `payments`.`id` = `expense_report_payment`.`payment_id`

        return $summary;
    }
    
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
        $cancelled = is_null($this->cancelled_at);
        $deleted = is_null($this->deleted_at);
        // $paid = false;
        $paid = ($this->payments->count() > 0);

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

    /**
     * late_submitted
     *
     * @return mixed
     */
    public function isLateSubmitted()
    {
        return false;
    }

    /**
     * late_approved
     *
     * @return mixed
     */
    public function isLateApproved()
    {
        return false;
    }

    /**
     * Displays the earliest start date covered by the expense report.
     *
     * @return mixed
     */
    public function getExpenseStartDateAttribute()
    {
        return date('Y-m-d', min(array_map('strtotime', $this->expenses()->withTrashed()->get()->pluck('date')->toArray())));
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

    // public function getDateRangeAttribute()
    // {
    //     $range = DB::table("expense_reports")
    //         ->join("expenses", "expenses.expense_report_id", "=", "expense_reports.id")
    //         ->select(DB::raw("min(expenses.date) as min_date, max(expenses.date) as max_date"))
    //         ->orderBy(DB::raw("expenses.date"))
    //         ->where(DB::raw("expense_reports.id"), $this->id)
    //         ->get();

    //     return $range->first();
    // }
    
    /**
     * getTotalExpenseAmountAttribute
     *
     * @return mixed
     */
    public function getTotalExpenseAmountAttribute()
    {
        // return $this->expenses()->withTrashed()->get()->sum('amount');

        $range = DB::table("expense_reports")
            ->join("expenses", "expenses.expense_report_id", "=", "expense_reports.id")
            ->select(DB::raw("sum(expenses.amount) as total_expenses_amount"))
            ->where(DB::raw("expense_reports.id"), $this->id)
            ->get();

        return $range->sum('total_expenses_amount');
    }
    
    /**
     * getTotalReimbursableAmountAttribute
     *
     * @return mixed
     */
    public function getTotalReimbursableAmountAttribute()
    {
        // return $this->expenses()->withTrashed()->get()->sum('reimbursable_amount');

        $range = DB::table("expense_reports")
            ->join("expenses", "expenses.expense_report_id", "=", "expense_reports.id")
            ->select(DB::raw("sum(expenses.reimbursable_amount) as total_reimbursable_amount"))
            ->where(DB::raw("expense_reports.id"), $this->id)
            ->get();

        return $range->sum('total_reimbursable_amount');
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
        if ($this->submitted_at) {
            return [
                "submitted_at" => $this->submitted_at,
                "submitted_by" => User::withTrashed()->findOrFail($this->submitted_by)
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
        if ($this->reviewed_at) {
            return [
                "reviewed_at" => $this->reviewed_at,
                "reviewed_by" => User::withTrashed()->findOrFail($this->reviewed_by)
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
        if ($this->approved_at) {
            return [
                "approved_at" => $this->approved_at,
                "approved_by" => User::withTrashed()->findOrFail($this->approved_by)
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
        if ($this->rejected_at) {
            return [
                "rejected_at" => $this->rejected_at,
                "rejected_by" => User::withTrashed()->findOrFail($this->rejected_by)
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
        if ($this->cancelled_at) {
            return [
                "cancelled_at" => $this->cancelled_at,
                "cancelled_by" => User::withTrashed()->findOrFail($this->cancelled_by)
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
        if ($this->getReceivedPaymentAmountAttribute() > 0) {
            return [
                "payments" => $this->payments
            ];
        }

        return null;
    }
}
