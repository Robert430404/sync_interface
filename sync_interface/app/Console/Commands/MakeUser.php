<?php

namespace App\Console\Commands;

use App;
use App\User;
use Illuminate\Console\Command;

class MakeUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user {--name=} {--email=} {--password=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Makes A User Account';

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
     * @return mixed
     */
    public function handle()
    {
        $name  = $this->option('name');
        $email = $this->option('email');
        $pass  = $this->option('password');

        User::create([
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($pass),
        ]);

        $this->info('The User Has Been Made Successfully');
    }
}
