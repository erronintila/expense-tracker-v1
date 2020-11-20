<?php

namespace App\Http\Controllers;

class AppController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return view('app');
    }
}
