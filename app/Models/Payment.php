<?php

namespace App\Models;

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
    
    /**
     * expense_reports
     *
     * @return void
     */
    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

    public function pivot_expense_reports()
    {
        return $this->belongsToMany(ExpenseReport::class)->withPivot('payment');
    }
    
    /**
     * expenses
     *
     * @return void
     */
    public function expenses()
    {
        return $this->belongsToMany(Expense::class);
    }
    
    /**
     * employee
     *
     * @return void
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | CUSTOM FIELDS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * status
     *
     * @return void
     */
    public function status()
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
}
