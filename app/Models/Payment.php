<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Payment extends Model
{
    use SoftDeletes, LogsActivity;

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
    protected static $logAttributesToIgnore = [ 'updated_at'];

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

    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

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

    public function expenses()
    {
        return $this->belongsToMany(Expense::class);
    }
}
