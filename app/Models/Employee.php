<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Employee extends Model
{
    use SoftDeletes, LogsActivity;

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
    protected static $logName = "employee";

    // // logging description
    public function getDescriptionForEvent(string $eventName): string
    {
        return "{$eventName} employee";
    }

    // // used to fill properties and add custom fields before the activity is saved.
    public function tapActivity(Activity $activity, string $eventName)
    {
        $role = Auth::user() == null ? "default" : (Auth::user()->is_admin ? "admin" : "standard user");

        $activity->properties = $activity->properties->merge([
            'custom' => [
                'table' => 'employees',
                'causer_role' => $role,
            ],
        ]);
    }

    /**
     * Displays the user account associated with employee.
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Displays the job designation associated with employee.
     *
     * @return void
     */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Displays the job designation associated with employee.
     *
     * @return void
     */
    public function department()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Displays the expenses associated with employee.
     *
     * @return void
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    /**
     * Displays the job histories associated with employee.
     *
     * @return void
     */
    public function job_histories()
    {
        return $this->hasMany(JobHistory::class);
    }

    /**
     * Displays the allowances associated with employee.
     *
     * @return void
     */
    public function allowances()
    {
        return $this->hasMany(Allowance::class);
    }

    /**
     * Displays the fullname of employee.
     *
     * @return void
     */
    public function name()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function adjustments()
    {
        return $this->hasMany(Adjustment::class);
    }

    /**
     * Displays the Expense Reports associated with employee.
     *
     * @return void
     */
    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

    // public function remaining_fund()
    // {
    //     $expenses = ExpenseReport::where("employee_id", $this->id)
    //         ->where("approved_at", "<>", null)
    //         ->where("deleted_at", null)
    //         ->doesntHave("payment")
    //         ->with("expenses")
    //         ->get()
    //         ->sum(function ($expense_report) {
    //             $amount = $expense_report->expenses->sum('amount');
    //             $reimbursable_amount = $expense_report->expenses->sum('reimbursable_amount');
    //             $total = $amount - $reimbursable_amount;
    //             return $total;
    //         });

    //     return $this->fund - $expenses;
    // }

    public function expense_types()
    {
        return $this->belongsToMany(ExpenseType::class)->withPivot('limit')->withTimestamps();
    }

    public function sub_types()
    {
        return $this->belongsToMany(SubType::class)->withPivot('limit')->withTimestamps();
    }
}
