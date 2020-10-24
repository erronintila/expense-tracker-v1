<?php

if (!function_exists('generate_code')) {

    function generate_code($model, $prefix, $minLength)
    {
        $data = $model::latest('id')->first();

        $ref = $prefix . str_pad($data == null ? 1 : $data->id + 1, $minLength, '0', STR_PAD_LEFT);

        return $ref;
    }
}

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
