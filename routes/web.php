<?php


use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pop-up.popup');
});
Route::post('/contact-submit', [ContactController::class, 'submit'])->name('contact.submit');

