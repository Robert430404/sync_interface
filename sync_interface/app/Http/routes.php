<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::get('/', 'HomeController@index');

// Pull Image From Storage And Return It
Route::get('/sync-files/{file}',             'AssetController@loadFile')->where('file', '(\.[A-Za-z]*)');
Route::get('/sync-files',                    'AssetController@loadHomeFiles');
Route::get('/sync-files/{directory}',        'AssetController@loadFiles');
Route::get('/sync-files/{directory}/{file}', 'AssetController@loadNestedFile');

// Directory REST Routes
Route::get('/sync-folders',                  'AssetController@loadHomeFolder');
Route::get('/sync-folders/{directory}',      'AssetController@loadDirectories');
