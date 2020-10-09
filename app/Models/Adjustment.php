<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;

class Adjustment extends Model
{
    use SoftDeletes;
    // use LogsActivity;

    // protected static $logUnguarded = true;

    // // Logging only the changed attributes
    // protected static $logOnlyDirty = true;

    // public function getDescriptionForEvent(string $eventName): string
    // {
    //     return "Record has been {$eventName}";
    // }


    protected $guarded = [];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
