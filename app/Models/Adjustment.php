<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Adjustment extends Model
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

    protected $guarded = [];

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
    protected static $logName = "adjustment";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} adjustment";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'adjustments',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "adjustments/{$this->id}"
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Displays the user associated with adjustment.
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
}
