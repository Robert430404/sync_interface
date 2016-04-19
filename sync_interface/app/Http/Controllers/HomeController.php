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
        $directories = Storage::directories();
        $filesTypes  = array();

        foreach($files as $key => $file)
        {
            $filesTypes[$key] = [
                'file' => $file,
                //'type' => Storage::mimeType($file),
                'type' => 'test',
            ];
        }

        // dd($filesTypes);

        return view('home', [
            'files'       => $filesTypes,
            'directories' => $directories,
        ]);
    }
}
