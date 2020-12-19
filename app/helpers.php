<?php

use App\Models\Expense;
use Illuminate\Support\Facades\Auth;

if (!function_exists('generate_code')) {
    function generate_code($model, $prefix, $minLength)
    {
        $data = $model::withTrashed()->whereYear("created_at", date("Y"))->whereMonth("created_at", date("m"))->count();

        $ref = $prefix . date("Ym") . str_pad($data + 1, $minLength, '0', STR_PAD_LEFT);

        return $ref;
    }
}

if (!function_exists('log_activity')) {
    function log_activity($log_name, $model, $attributes, $action)
    {
        activity($log_name)
            ->performedOn($model)
            ->withProperties(['attributes' => $attributes])
            ->log($action);
    }
}