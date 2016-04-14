<?php

namespace App\Http\Controllers;

use Storage;
use App\Http\Requests;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $files       = Storage::allFiles();
        $directories = Storage::allDirectories();

        // dd($files);

        return view('home', [
            'files'       => $files,
            'directories' => $directories,
        ]);
    }
}
