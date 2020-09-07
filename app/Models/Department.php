<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;

    /**
     * guarded
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Displays the jobs associated with department.
     *
     * @return void
     */
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    /**
     * Displays employees associated with department
     * Has-Many-Through Relationship
     * Get all of the employees for the department.
     *
     * @return void
     */
    public function employees()
    {
        return $this->hasManyThrough(
            Employee::class,
            Job::class,
            'department_id', // Foreign key on jobs table...
            'job_id', // Foreign key on employees table...
            'id', // Local key on departments table...
            'id' // Local key on jobs table...
        );
    }
}
