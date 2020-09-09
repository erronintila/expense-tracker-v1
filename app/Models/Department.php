<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
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
