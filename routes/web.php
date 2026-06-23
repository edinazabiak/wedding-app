<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::get('/',				[Controller::class, 'index'])->name('index');
Route::get('/kepfeltoltes',	[Controller::class, 'photoUpload'])->name('photoUpload');
Route::get('/vendeg',		[Controller::class, 'guest'])->name('guest');
Route::get('/menetrend',	[Controller::class, 'timeline'])->name('timeline');
Route::get('/szolgaltatok',	[Controller::class, 'serviceProviders'])->name('serviceProviders');
Route::get('/jatek',        [Controller::class, 'game'])->name('game');

Route::post('/validation',  [Controller::class, 'validation'])->name('validation');
Route::post('/save-result', [Controller::class, 'saveResult'])->name('saveResult');

Route::get('/test-upload', function () {

    Storage::disk('s3')->put(
        'test/hello.txt',
        'Hello R2!'
    );

    return 'ok';
});