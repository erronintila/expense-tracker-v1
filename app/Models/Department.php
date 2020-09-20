<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use JsonException;

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

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($department) {
            if ($department->jobs()->count() > 0) {
                
                throw new JsonException("Model has child records");
            
                // abort("Model has child records", 401);
            
                // abort(response()->json(['Model has child records'], 401));
            
                // return abort(500, 'Model has child records');
            
                // return response("Model has child records", 500);
                // throw new Exception("Model have child records");
            }
        });
    }

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
