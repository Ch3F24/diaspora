<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/',[PageController::class,'home'])->name('home');

Route::group([
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localize', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath'],
    ], function () {

        Route::get('/',[PageController::class,'home'])->name('home');
        Route::get('/{location}',[PageController::class,'location'])->name('location');
        Route::get('/{location}/{slug}',[PageController::class,'category'])->name('category');
//        Route::get('/argentine',[PageController::class,'argentine'])->name('location.argentine');
});
