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
     * Load Individual File From Passed Path
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
     * Load Folders From Passed Directory
     *
     * @return \Illuminate\Http\Response
     */
    public function loadHomeFolder()
    {
        $directories  = Storage::directories();
        $formatedJSON = array();

        foreach($directories as $key => $folder)
        {
            $name = explode('/', $folder);

            $formatedJSON[$key] = [
                'path' => $folder,
                'name' => end($name),
            ];
        }

        return response()->json($formatedJSON);
    }

    /**
     * Load Files From Passed Directory
     *
     * @return \Illuminate\Http\Response
     */
    public function loadHomeFiles()
    {
        $files        = Storage::files();
        $formatedJSON = array();

        foreach($files as $key => $file)
        {
            $name = explode('/', $file);

            $formatedJSON[$key] = [
                'path' => $file,
                'type' => Storage::mimeType($file),
                'name' => end($name),
            ];
        }

        return response()->json($formatedJSON);
    }

    /**
     * Load Folders From Passed Directory
     *
     * @return \Illuminate\Http\Response
     */
    public function loadDirectories($directory)
    {
        $directories  = Storage::directories($directory);
        $formatedJSON = array();

        foreach($directories as $key => $folder)
        {
            $name = explode('/', $folder);

            $formatedJSON[$key] = [
                'path' => $folder,
                'name' => end($name),
            ];
        }

        return response()->json($formatedJSON);
    }

    /**
     * Load Files From Passed Directory
     *
     * @return \Illuminate\Http\Response
     */
    public function loadFiles($directory)
    {
        $files        = Storage::files($directory);
        $formatedJSON = array();

        foreach($files as $key => $file)
        {
            $name = explode('/', $file);

            $formatedJSON[$key] = [
                'path' => $file,
                'type' => Storage::mimeType($file),
                'name' => end($name),
            ];
        }

        return response()->json($formatedJSON);
    }

    /**
     * Load Nested File
     *
     * @return \Illuminate\Http\Response
     */
    public function loadNestedFile($directory = '', $file)
    {
        dd($directory);
        $filepath = $directory . $file;
        $file     = Storage::get($filepath);
        $type     = Storage::mimeType($filepath);
        $response = Response::make($file, 200);

        $response->header("Content-Type", $type);

        return $response;
    }
}
