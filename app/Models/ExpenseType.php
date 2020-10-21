<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class ExpenseType extends Model
{
    use SoftDeletes, LogsActivity;

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
    protected static $logName = "expense_type";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} expense type";
    }

    /**
     * Displays the expenses associated with expense type.
     *
     * @return void
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    public function vendors()
    {
        return $this->belongsToMany(Vendor::class)->withTimestamps();
    }

    public function employees()
    {
        return $this->belongsToMany(Employee::class)->withTimestamps();
    }

    public function sub_types()
    {
        return $this->hasMany(SubType::class);
    }
}
