<?php

namespace App\Http\Controllers;

class AppController extends Controller
{    
    /**
     * Show the main application layout.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('app');
    }
}
