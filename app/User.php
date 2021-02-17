<?php

namespace App;

use App\Models\Job;
use App\Models\Expense;
use App\Models\Adjustment;
use App\Models\ExpenseType;
use App\Models\ExpenseReport;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'full_name',
        'name',
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
    protected static $logAttributesToIgnore = ['password', 'remember_token', 'updated_at'];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizing the log name
    protected static $logName = "user";

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
                'section' => 'users',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "users/{$this->id}"
            ],
        ]);
    }

    /** ========================================================================================================================================
        RELATIONSHIPS
    ============================================================================================================================================ */

    /**
     * Displays the job designation associated with user.
     *
     * @return mixed
     */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Displays the expenses associated with user.
     *
     * @return mixed
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    /**
     * Displays the adjustments associated with user.
     *
     * @return mixed
     */
    public function adjustments()
    {
        return $this->hasMany(Adjustment::class);
    }

    /**
     * Displays the Expense Reports associated with user.
     *
     * @return mixed
     */
    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

    /**
     * Displays the Expense types associated with user.
     *
     * @return mixed
     */
    public function expense_types()
    {
        return $this->belongsToMany(ExpenseType::class)->withPivot('limit')->withTimestamps();
    }

    /**
     * Displays the Expense Type Sub-types associated with user.
     *
     * @return mixed
     */
    public function sub_types()
    {
        return $this->belongsToMany(ExpenseType::class)->withPivot('limit')->withTimestamps();
    }

    /** ========================================================================================================================================
        LARAVEL ACCESSORS
    ============================================================================================================================================ */

    /**
     * Displays the full name of user.
     *
     * @return mixed
     */
    public function getFullNameAttribute()
    {
        return $this->first_name . "" . ($this->middle_name ?  " " . $this->middle_name . " " : " ") . $this->last_name . ($this->suffix ? ", " . $this->suffix : "");
    }

    /**
     * Displays the full name of user.
     *
     * @return mixed
     */
    public function getNameAttribute()
    {
        return $this->first_name . "" . ($this->middle_name ?  " " . $this->middle_name . " " : " ") . $this->last_name . ($this->suffix ? ", " . $this->suffix : "");
    }
}
