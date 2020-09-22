<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
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

    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

    public function status()
    {

        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->deleted_at);
        $released = is_null($this->released_at);
        $received = is_null($this->received_at);

        if (!$cancelled) {
            $arr = [
                'color' => 'red',
                'remarks' => 'Payment was cancelled',
                'status' => 'Cancelled',
            ];

            return $arr;
        }

        if (!$received) {
            $arr = [
                'color' => 'green',
                'remarks' => 'Payment was received',
                'status' => 'Completed',
            ];

            return $arr;
        }

        if (!$released) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Payment was released',
                'status' => 'Released',
            ];

            return $arr;
        }

        if (!$approved) {
            $arr = [
                'color' => 'orange',
                'remarks' => 'Payment was approved and waiting for release',
                'status' => 'Approved',
            ];

            return $arr;
        }

        $arr = [
            'color' => 'blue',
            'remarks' => 'Payment waiting for approval',
            'status' => 'Pending',
        ];

        return $arr;
    }
}
