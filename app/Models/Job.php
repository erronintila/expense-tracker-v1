<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use SoftDeletes;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'department_id'
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
