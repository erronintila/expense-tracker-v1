<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use SoftDeletes;
    
    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];
    
    /**
     * Displays the department associated with job designation.
     *
     * @return void
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    
    /**
     * Displays the employees associated with job designation.
     *
     * @return void
     */
    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
    
    /**
     * Displays the job histories associated with job designation.
     *
     * @return void
     */
    public function job_histories()
    {
        return $this->hasMany(JobHistory::class);
    }
}
