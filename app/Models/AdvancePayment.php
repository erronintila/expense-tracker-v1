<?php

namespace App\Models;

use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class AdvancePayment extends Model
{
    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | INITIALIZATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    use SoftDeletes, LogsActivity;
    use EagerLoadPivotTrait;

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL MODEL CONFIGURATION
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    // protected $softCascade = ['expenses'];

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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        
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
    protected static $logAttributesToIgnore = ['updated_at'];

    // // only created and updated event will be logged
    // protected static $recordEvents = ['created', 'updated']

    // // logging only the changed attributes
    protected static $logOnlyDirty = true;

    // // prevents the package from storing empty logs
    // protected static $submitEmptyLogs = false;

    // // customizong the log name
    protected static $logName = "advance_payment";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} advance payment";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'advance_payments',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "advance_payments/{$this->id}"
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    /**
     * Displays the users associated with advance payment.
     *
     * @return mixed
     */
    public function users()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Displays the expense reports associated with advance payment.
     *
     * @return mixed
     */
    public function expense_reports()
    {
        return $this->belongsToMany(ExpenseReport::class)->withPivot('amount')->withTimestamps();
    }
}
