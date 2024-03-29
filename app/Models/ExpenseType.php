<?php

namespace App\Models;

use App\User;
use App\Models\Vendor;
use App\Models\Expense;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class ExpenseType extends Model
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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'has_expenses'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($expenseType) {
            abort_if($expenseType->expenses()->count() > 0, 422, "Some records can't be deleted.");
    
            $doesExpenseExist = DB::table("expense_types")
                    ->where("expense_types.id", $expenseType->id)
                    ->join("expenses", "expenses.sub_type_id", "=", "expense_types.id")
                    ->where("expenses.deleted_at", null)
                    ->where("expense_types.deleted_at", null)
                    ->count();
            
            abort_if($doesExpenseExist, 422, "Some records can't be deleted");
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
    protected static $logName = "expense_type";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} expense type";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = auth()->user() == null ? "default" : (auth()->user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'section' => 'expense_types',
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
     * Displays the expenses associated with expense type.
     *
     * @return mixed
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
    
    /**
     * Displays the vendors associated with expense type.
     *
     * @return mixed
     */
    public function vendors()
    {
        return $this->belongsToMany(Vendor::class)->withTimestamps();
    }
    
    /**
     * Displays the users associated with expense type.
     *
     * @return mixed
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('limit')->withTimestamps();
    }
    
    /**
     * Displays the expense types sub-types associated with expense type.
     *
     * @return mixed
     */
    public function sub_types()
    {
        // return $this->hasMany(SubType::class);
        return $this->hasMany($this);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | LARAVEL ACCESSORS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function getHasExpensesAttribute()
    {
        // return $this->expenses->count() > 0;

        return true;
    }
}
