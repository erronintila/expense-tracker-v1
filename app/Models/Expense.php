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

    public function sub_type()
    {
        return $this->belongsTo(SubType::class);
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
        $arr = [
            'color' => 'red',
            'remarks' => 'Status is unindentified',
            'status' => 'Error',
        ];

        // return $this->deleted_at == null ? "Active" : "Archived";
        $reported = is_null($this->expense_report_id);
        $submitted = is_null($this->submitted_at);
        $reviewed = is_null($this->reviewed_at);
        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->cancelled_at);
        $rejected = is_null($this->rejected_at);
        $deleted = is_null($this->deleted_at);

        $paid = is_null($this->payment_id);

        if (!$deleted) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was deleted',
                'status' => 'Deleted',
            ];

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was cancelled',
                'status' => 'Cancelled',
            ];

            return $arr;
        }

        if (!$rejected) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Expense was rejected',
                'status' => 'Rejected',
            ];

            return $arr;
        }

        // if (!$paid) {

        //     switch ($this->payment->status()["status"]) {
        //         case 'Completed':
        //             $arr = [
        //                 'color' => 'green',
        //                 'remarks' => 'Payment transaction was completed',
        //                 'status' => 'Paid/Reimbursed',
        //             ];
        //             break;

        //         default:
        //             $arr = [
        //                 'color' => 'blue',
        //                 'remarks' => 'Processing Payment',
        //                 'status' => 'Approved',
        //             ];
        //             break;
        //     }

        //     return $arr;
        // }

        if (!$approved) {
            $arr = [
                'color' => 'blue',
                'remarks' => 'Processing Payment',
                'status' => 'Approved',
            ];

            return $arr;
        }

        if (!$reviewed) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'For Approval',
                'status' => 'Reviewed',
            ];

            return $arr;
        }

        if (!$submitted) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Submitted expense for approval',
                'status' => 'Submitted',
            ];

            return $arr;
        }

        if ($reported) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Expense is not associated with report',
                'status' => 'Unreported',
            ];

            return $arr;
        }

        // $arr = [
        //     'color' => 'orange',
        //     'remarks' => 'Expense for submission',
        //     'status' => 'Unreported',
        // ];

        return $arr;
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

    public function payments()
    {
        return $this->belongsToMany(Payment::class);
    }
}
