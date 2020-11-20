<?php

namespace App\Http\Controllers;

class AppController extends Controller
{    
    /**
     * Show the main application layout.
     *
     * @return void
     */
    public function index()
    {
        return view('app');
    }
}
