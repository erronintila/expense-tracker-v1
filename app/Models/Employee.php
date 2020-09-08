<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use SoftDeletes;

    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];

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

    /**
     * Displays the Expense Reports associated with employee.
     *
     * @return void
     */
    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }
}