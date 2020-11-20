<?php

namespace App;

use App\Models\Employee;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** ========================================================================================================================================
        INITIALIZATION
    ============================================================================================================================================ */

    use Notifiable, SoftDeletes, HasRoles, LogsActivity;

    /** ========================================================================================================================================
        LARAVEL MODEL CONFIGURATION
    ============================================================================================================================================ */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'username', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /** ========================================================================================================================================
        LIBRARY/PACKAGE CONFIGURATION
    ============================================================================================================================================ */

    /**
     * Activity Logs Configuration
     *
     *
     */

    // // log changes to all the $fillable/$guarded attributes of the model
    // protected static $logUnguarded = true;
    protected static $logFillable = true;

    // // log the changed attributes for all events
    protected static $logAttributes = ['*'];

    // // Ignoring attributes from logging
    protected static $logAttributesToIgnore = ['remember_token', 'updated_at'];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "vendor";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} user";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'table' => 'users',
                'causer_role' => $role,
            ],
        ]);
    }

    /** ========================================================================================================================================
        RELATIONSHIPS
    ============================================================================================================================================ */

    /**
     * employee
     *
     * @return mixed
     */
    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

    /** ========================================================================================================================================
        LARAVEL ACCESSORS
    ============================================================================================================================================ */
}
