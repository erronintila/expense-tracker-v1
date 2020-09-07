<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExpenseType extends Model
{
    use SoftDeletes;
    
    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];
    
    /**
     * Displays the expenses associated with expense type.
     *
     * @return void
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
}
