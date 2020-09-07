<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
}
