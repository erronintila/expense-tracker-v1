<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Job extends Model
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
    protected static $logName = "job";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} job";
    }
    
    /**
     * Displays the department associated with job designation.
     *
     * @return void
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    
    /**
     * Displays the employees associated with job designation.
     *
     * @return void
     */
    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
    
    /**
     * Displays the job histories associated with job designation.
     *
     * @return void
     */
    public function job_histories()
    {
        return $this->hasMany(JobHistory::class);
    }
}
