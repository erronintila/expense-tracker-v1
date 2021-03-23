<?php

namespace App\Models;

use App\User;
use App\Models\Department;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
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

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($job) {
            if ($job->users()->count() > 0) {
                abort(422, "Active user records found.");
            }

            if (!auth()->user()->is_admin) {
                abort(422, "Only administrators can delete record(s).");
            }
        });

        static::restoring(function ($job) {
            if ($job->department()->onlyTrashed()->count()) {
                abort(422, "No department found.");
            }
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
    protected static $logAttributesToIgnore = ['updated_at'];

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

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'jobs',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => null
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Displays the department associated with job designation.
     *
     * @return mixed
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Displays the users associated with job designation.
     *
     * @return mixed
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }

    // /**
    //  * Displays the job histories associated with job designation.
    //  *
    //  * @return mixed
    //  */
    // public function job_histories()
    // {
    //     return $this->hasMany(JobHistory::class);
    // }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
}
