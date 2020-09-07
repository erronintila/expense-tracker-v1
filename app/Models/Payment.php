<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use SoftDeletes;
    
    protected $guarded = [];

    public function expense_reports()
    {
        return $this->hasMany(ExpenseReport::class);
    }

    public function status() {

        $approved = is_null($this->approved_at);
        $cancelled = is_null($this->cancelled_at);
        $deleted = is_null($this->deleted_at);
        $released = is_null($this->released_at);
        $received = is_null($this->received_at);

        if (!$deleted) {
            $arr = [
                'text' => 'Archived',
                'status' => 'Archived',
                'badge' => '<span class="badge badge-danger">Archived</span>'
            ];

            return $arr;
        }

        if (!$cancelled) {
            $arr = [
                'text' => 'Cancelled',
                'status' => 'Cancelled',
                'badge' => '<span class="badge badge-danger">Cancelled</span>'
            ];

            return $arr;
        }

        if (!$received) {
            $arr = [
                'text' => 'Payment Received',
                'status' => 'Payment Delivered',
                'badge' => '<span class="badge badge-success">Payment Delivered</span>'
            ];

            return $arr;
        }

        if (!$released) {
            $arr = [
                'text' => 'Payment Released',
                'status' => 'Waiting for Recipient Confirmation',
                'badge' => '<span class="badge badge-primary">Waiting for Recipient Confirmation</span>'
            ];

            return $arr;
        }

        if (!$approved) {
            $arr = [
                'text' => 'Approved',
                'status' => 'Waiting for Release',
                'badge' => '<span class="badge badge-primary">Waiting for Release</span>'
            ];

            return $arr;
        }

        $arr = [
            'text' => 'Pending',
            'status' => 'For Approval',
            'badge' => '<span class="badge badge-warning">For Approval</span>'
        ];

        return $arr;
    }
}
