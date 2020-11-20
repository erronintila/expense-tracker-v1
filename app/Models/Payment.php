<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Payment extends Model
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
    protected $appends = [];

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
    protected static $logName = "payment";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} payment";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'table' => 'payments',
                'causer_role' => $role,
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
    //  * @return void
    //  */
    // public function expense_reports()
    // {
    //     return $this->hasMany(ExpenseReport::class);
    // }
    
    /**
     * Displays the expense reports associated with payment.
     * Many-To-Many Relationship
     *
     * @return void
     */
    public function expense_reports()
    {
        return $this->belongsToMany(ExpenseReport::class)->withPivot('payment')->withTimestamps();
    }
    
    /**
     * Displays the expenses associated with payment.
     *
     * @return void
     */
    public function expenses()
    {
        return $this->belongsToMany(Expense::class);
    }
    
    /**
     * Displays the employee associated with payment.
     *
     * @return void
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * status
     *
     * @return void
     */
    public function getStatusAttribute()
    {
        $arr = [
            'color' => 'red',
            'remarks' => 'Status is unidentified',
            'status' => 'Error',
        ];

        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->deleted_at);
        $released = is_null($this->released_at);
        $received = is_null($this->received_at);

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
     * @return void
     */
    public function getCreatedInfoAttribute()
    {
        if ($this->created_at) {
            return [
                "created_at" => $this->created_at,
                "created_by" => User::withTrashed()->find($this->created_by)
            ];
        }

        return null;
    }
    
    /**
     * getUpdatedInfoAttribute
     *
     * @return void
     */
    public function getUpdatedInfoAttribute()
    {
        if ($this->updated_at) {
            return [
                "updated_at" => $this->updated_at,
                "updated_by" => User::withTrashed()->find($this->updated_by)
            ];
        }

        return null;
    }
    
    /**
     * getDeletedInfoAttribute
     *
     * @return void
     */
    public function getDeletedInfoAttribute()
    {
        if ($this->deleted_at) {
            return [
                "deleted_at" => $this->deleted_at,
                "deleted_by" => User::withTrashed()->find($this->deleted_by)
            ];
        }

        return null;
    }
    
    /**
     * getApprovedInfoAttribute
     *
     * @return void
     */
    public function getApprovedInfoAttribute()
    {
        if ($this->approved_at) {
            return [
                "approved_at" => $this->approved_at,
                "approved_by" => User::withTrashed()->find($this->approved_by)
            ];
        }

        return null;
    }
    
    /**
     * getCancelledInfoAttribute
     *
     * @return void
     */
    public function getCancelledInfoAttribute()
    {
        if ($this->cancelled_at) {
            return [
                "cancelled_at" => $this->cancelled_at,
                "cancelled_by" => User::withTrashed()->find($this->cancelled_by)
            ];
        }

        return null;
    }
    
    /**
     * getReleasedInfoAttribute
     *
     * @return void
     */
    public function getReleasedInfoAttribute()
    {
        if ($this->released_at) {
            return [
                "released_at" => $this->released_at,
                "released_by" => User::withTrashed()->find($this->released_by)
            ];
        }

        return null;
    }
    
    /**
     * getReceivedInfoAttribute
     *
     * @return void
     */
    public function getReceivedInfoAttribute()
    {
        if ($this->received_at) {
            return [
                "received_at" => $this->received_at,
                "received_by" => User::withTrashed()->find($this->received_by)
            ];
        }

        return null;
    }
}
