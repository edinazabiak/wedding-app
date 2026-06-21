<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Controller
{
    public function index(Request $request) {
        return Inertia::render('Dashboard');
    }

    public function photoUpload(Request $request) {
        return Inertia::render('PhotoUpload');
    }

    public function guest(Request $request) {
        return Inertia::render('Guest');
    }

    public function timeline(Request $request) {
        return Inertia::render('Timeline');
    }

    public function serviceProviders(Request $request) {
        return Inertia::render('ServiceProviders');
    }
}
