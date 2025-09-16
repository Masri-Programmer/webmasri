<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// Route::get('/privacy-policy', function () {
//     return Inertia::render('PrivacyPolicy');
// })->name('privacy-policy');

Route::inertia('/privacy-policy', 'PrivacyPolicy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsConditions');
})->name('terms-conditions');

Route::get('/imprint', function () {
    return Inertia::render('Imprint');
})->name('imprint');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/language/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'de', 'fr' ])) {
        session()->put('locale', $locale);
    }
    return redirect()->back();
})->whereIn('locale', ['en', 'de', 'fr'])->name('language.switch');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
