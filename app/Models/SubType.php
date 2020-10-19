<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubType extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function expense_type()
    {
        return $this->belongsTo(ExpenseType::class);
    }

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
}
