<?php

namespace App\Models;

use App\Models\Expense;
use App\Models\ExpenseType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
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

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($vendor) {
            abort_if($vendor->expenses()->count() > 0, 422,"Some records can't be deleted.");
        });
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
    protected static $logName = "vendor";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} vendor";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'vendors',
                'section_id' => $this->id,
                'causer_role' => $role,
                'link' => "vendors/{$this->id}"
            ],
        ]);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | RELATIONSHIPS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
    
    /**
     * Displays the expenses associated with vendor.
     *
     * @return mixed
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
    
    /**
     * Displays the expense types associated with vendor.
     *
     * @return mixed
     */
    public function expense_types()
    {
        return $this->belongsToMany(ExpenseType::class)->withTimestamps();
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */
}
