<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Expense extends Model
{
    use SoftDeletes;
    // use LogsActivity;

    protected $dates = ['deleted_at'];

    // protected static $logUnguarded = true;

    // // protected static $logAttributes = ['description', 'amount'];

    // // protected static $ignoreChangedAttributes = ['text'];

    // // Logging only the changed attributes
    // protected static $logOnlyDirty = true;

    // public function getDescriptionForEvent(string $eventName): string
    // {
    //     return "Record has been {$eventName}";
    // }

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        // 'expense_report_id'
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
     * Displays the expense type associated with expense.
     *
     * @return void
     */
    public function expense_type()
    {
        return $this->belongsTo(ExpenseType::class);
    }

    /**
     * Displays the employee associated with expense.
     *
     * @return void
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /**
     * Displays the vendor associated with expense.
     *
     * @return void
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    /**
     * Displays the expense report associated with expense.
     *
     * @return void
     */
    public function expense_report()
    {
        return $this->belongsTo(ExpenseReport::class);
    }

    public function expense_details()
    {
        return $this->hasMany(ExpenseDetail::class);
    }

    /**
     * Displays the current status of expense.
     *
     * @return void
     */
    public function status()
    {
        return $this->deleted_at == null ? "Active" : "Archived";
    }

    /**
     * Displays the formatted amount of the expense.
     *
     * @return void
     */
    public function amount_formatted()
    {
        return "₱ " . number_format($this->amount, 2);
    }

    // /**
    //  * Displays the formatted start date of the expense.
    //  *
    //  * @return void
    //  */
    // public function start_date_formatted()
    // {
    //     return date('F d, Y', strtotime($this->start_date));
    // }

    // /**
    //  * Displays the formatted end date of the expense.
    //  *
    //  * @return void
    //  */
    // public function end_date_formatted()
    // {
    //     return date('F d, Y', strtotime($this->end_date));
    // }

    /**
     * Displays the formatted receipt date of the expense.
     *
     * @return void
     */
    public function date_formatted()
    {
        return date('F d, Y', strtotime($this->date));
    }
}
