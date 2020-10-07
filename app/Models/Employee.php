<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use SoftDeletes;

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

    public function remaining_fund()
    {
        $expenses = ExpenseReport::where("employee_id", $this->id)
            ->where("approved_at", "<>", null)
            ->where("deleted_at", null)
            ->doesntHave("payment")
            ->with("expenses")
            ->get()
            ->sum(function ($expense_report) {
                $amount = $expense_report->expenses->sum('amount');
                $reimbursable_amount = $expense_report->expenses->sum('reimbursable_amount');
                $total = $amount - $reimbursable_amount;
                return $total;
            });

        return $this->fund - $expenses;
    }

    public function actual_remaining_fund()
    {
        $expenses = Expense::where("employee_id", $this->id);
    }
}
