<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class appreset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset:app';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Drop tables, run migrations, seed data and install laravel passport';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Artisan::call("migrate:fresh");
        Artisan::call("db:seed");
        Artisan::call("optimize:clear");

        echo "Reset Application Successfully!";
    }
}
