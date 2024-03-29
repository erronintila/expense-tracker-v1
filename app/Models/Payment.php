<?php

namespace App\Models;

use App\User;
use App\Models\ExpenseReport;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;

class Payment extends Model
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
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        // 'deleted_at'
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
        // 'created_info',
        // 'updated_info',
        // 'deleted_info',
        // 'approved_info',
        // 'released_info',
        // 'received_info',
        // 'total_amount'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($payment) {
            abort_if(!auth()->user()->is_admin, 422, "Some records can't be deleted.");
        });
    }

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
    protected static $logAttributesToIgnore = [
        "approved_at",
        "approved_by",
        'updated_at',
        "updated_by",
        "deleted_by",
    ];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "payment";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} payment";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'payments',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "payments/{$this->id}"
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    // /**
    //  * expense_reports
    //  *
    //  * @return mixed
    //  */
    // public function expense_reports()
    // {
    //     return $this->hasMany(ExpenseReport::class);
    // }
    
    /**
     * Displays the expense reports associated with payment.
     * Many-To-Many Relationship
     *
     * @return mixed
     */
    public function expense_reports()
    {
        return $this->belongsToMany(ExpenseReport::class)->withPivot('payment')->withTimestamps();
    }
    
    // /**
    //  * Displays the expenses associated with payment.
    //  *
    //  * @return mixed
    //  */
    // public function expenses()
    // {
    //     return $this->belongsToMany(Expense::class);
    // }
    
    /**
     * Displays the user associated with payment.
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
     * Displays the earliest created date covered by the payment.
     *
     * @return mixed
     */
    public function getPaymentStartDateAttribute()
    {
        return $this->expense_reports()->withTrashed()->min("expense_reports.created_at");
    }

    /**
     * Displays the latest created date covered by the payment.
     *
     * @return mixed
     */
    public function getPaymentEndDateAttribute()
    {
        return $this->expense_reports()->withTrashed()->max("expense_reports.created_at");
    }
    
    /**
     * status
     *
     * @return mixed
     */
    public function getStatusAttribute()
    {
        $arr = [
            'color' => 'red',
            'remarks' => 'Status is unidentified',
            'status' => 'Error',
        ];

        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->cancelled_at);
        $deleted = is_null($this->deleted_at);
        $released = is_null($this->released_at);
        $received = is_null($this->received_at);

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Payment was deleted',
                'status' => 'Deleted',
            ];

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Payment was cancelled',
                'status' => 'Cancelled',
            ];

            return $arr;
        }

        if (!$received) {
            $arr = [
                'color' => 'green',
                'remarks' => 'Payment transaction was completed',
                'status' => 'Completed',
            ];

            return $arr;
        }

        if (!$released) {
            $arr = [
                'color' => 'blue',
                'remarks' => 'Payment was released',
                'status' => 'Released',
            ];

            return $arr;
        }

        if (!$approved) {
            $arr = [
                'color' => 'cyan',
                'remarks' => 'Payment was approved and waiting for release',
                'status' => 'Approved',
            ];

            return $arr;
        }

        $arr = [
            'color' => 'orange',
            'remarks' => 'Payment waiting for approval',
            'status' => 'Pending',
        ];

        return $arr;
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
        //         "created_by" => User::withTrashed()->find($this->created_by)
        //         // "created_by" => User::find($this->created_by)
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
        //         "updated_by" => User::withTrashed()->find($this->updated_by)
        //         // "updated_by" => User::find($this->updated_by)
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
        //         "deleted_by" => User::withTrashed()->find($this->deleted_by)
        //         // "deleted_by" => User::find($this->deleted_by)
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
        //         "approved_by" => User::withTrashed()->find($this->approved_by)
        //         // "approved_by" => User::find($this->approved_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getReleasedInfoAttribute
     *
     * @return mixed
     */
    public function getReleasedInfoAttribute()
    {
        // if ($this->released_at) {
        //     return [
        //         "released_at" => $this->released_at,
        //         "released_by" => User::withTrashed()->find($this->released_by)
        //         // "released_by" => User::find($this->released_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getReceivedInfoAttribute
     *
     * @return mixed
     */
    public function getReceivedInfoAttribute()
    {
        // if ($this->received_at) {
        //     return [
        //         "received_at" => $this->received_at,
        //         "received_by" => User::withTrashed()->find($this->received_by)
        //         // "received_by" => User::find($this->received_by)
        //     ];
        // }

        return null;
    }
    
    /**
     * getTotalAmountAttribute
     *
     * @return mixed
     */
    public function getTotalAmountAttribute()
    {
        if (!$this->expense_reports || !count($this->expense_reports)) {
            return $this->amount;
        }
        
        return $this->expense_reports->sum('pivot.payment');
        
        // $expense_reports = $this->expense_reports;
        // $sum = 0;

        // foreach ($expense_reports as $expense_report) {
        //     $sum += $expense_report->pivot->payment;
        // }

        // return $sum;
    }
}
