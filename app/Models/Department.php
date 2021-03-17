<?php

namespace App\Models;

use App\User;
use Exception;
use JsonException;
use App\Models\Job;
use App\Traits\ApiResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | INITIALIZATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    use SoftDeletes, LogsActivity, ApiResponse;

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

        static::deleting(function ($department) {
            if ($department->jobs()->count() > 0) {
                abort(422, "Some records can't be deleted.");

                // throw new JsonException("Model has child records", 422);

                // abort("Model has child records", 401);

                // abort(response()->json(['Model has child records'], 401));

                // return abort(500, 'Model has child records');

                // return response("Model has child records", 500);
                // throw new Exception("Model have child records");
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
    protected static $logAttributes = ['name'];

    // // Ignoring attributes from logging
    protected static $logAttributesToIgnore = ['updated_at'];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "department";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} department";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'departments',
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
     * Displays the jobs associated with department.
     *
     * @return mixed
     */
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    /**
     * Displays users associated with department
     * Has-Many-Through Relationship
     * Get all of the users for the department.
     *
     * @return mixed
     */
    public function users()
    {
        return $this->hasManyThrough(
            User::class,
            Job::class,
            'department_id', // Foreign key on jobs table...
            'job_id', // Foreign key on users table...
            'id', // Local key on departments table...
            'id' // Local key on jobs table...
        );
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
}
