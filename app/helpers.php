<?php

use App\Models\Expense;
use Illuminate\Support\Facades\Auth;

if (!function_exists('generate_code')) {

    function generate_code($model, $prefix, $minLength)
    {
        // $data = $model::latest('id')->first();

        // $ref = $prefix . str_pad($data == null ? 1 : $data->id + 1, $minLength, '0', STR_PAD_LEFT);

        $data = $model::whereYear("created_at", date("Y"))->whereMonth("created_at", date("m"))->count();

        $ref = $prefix . date("Ym") . str_pad($data + 1, $minLength, '0', STR_PAD_LEFT);

        return $ref;
    }
}

// if (!function_exists('validate_remaining_fund')) {

//     function validate_remaining_fund()
//     {
//         $employee = Auth::user()->employee;

//         $expenses = Expense::where("employee_id", $employee->id)
//             ->where("cancelled_at", null)
//             ->where("rejected_at", null)
//             ->where("deleted_at", null)
//             ->get();

//         $deduct = $expenses->sum("amount") - $expenses->sum("reimbursable_amount");

//         // return $employee->fund - $deduct;

//         $employee->remaining_fund = $employee->fund - $deduct;

//         $employee->save();
//     }
// }

// if (!function_exists('add_note')) {

//     function add_note($type, $model, $description)
//     {
//         $notes = json_decode($model->notes);

//         $new_note = ["text" => $description, "created_at" => now()];

//         array_push($new_note, $notes);

//         $model->notes = json_encode($notes);

//         $model->save();
//     }
// }
