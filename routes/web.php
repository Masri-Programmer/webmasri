<?php

use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsConditions');
})->name('terms-conditions');

Route::get('/imprint', function () {
    return Inertia::render('Imprint');
})->name('imprint');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact', ContactController::class);

Route::get('/faq', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/language/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'de', 'fr' ])) {
        session()->put('locale', $locale);
    }
    return redirect()->back();
})->whereIn('locale', ['en', 'de', 'fr','ar'])->name('language.switch');


Route::get('/pricing/{category?}', function ($category = null) {
    $categoryMap = [
        'landingPage' => 'landingPage',
        'website' => 'businessWebsite',
        'onlineshop' => 'onlineShop',
    ];

    $initialCategory = $categoryMap[$category] ?? 'businessWebsite';

    return Inertia::render('Pricing', [
        'initialCategory' => $initialCategory,
    ]);
})->name('pricing');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
