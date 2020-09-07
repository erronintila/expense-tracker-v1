<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model
{
    use SoftDeletes;
    
    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];

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

    /**
     * Displays the current status of expense.
     *
     * @return void
     */
    public function status()
    {
        return $this->is_active ? "Active" : "Inactive";
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
