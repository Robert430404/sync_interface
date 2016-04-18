<?php

namespace App\Http\Controllers;

use Storage;
use Response;
use App\Http\Requests;
use Illuminate\Http\Request;

class AssetController extends Controller
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
    public function loadFile($file)
    {
        $file     = Storage::get($file);
        $type     = Storage::mimeType($file);
        $response = Response::make($file, 200);

        $response->header("Content-Type", $type);

        return $response;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function loadNestedFile($directory, $file)
    {
        $filepath = $directory . $file;
        $file     = Storage::get($filepath);
        $type     = Storage::mimeType($filepath);
        $response = Response::make($file, 200);

        $response->header("Content-Type", $type);

        return $response;
    }
}
