<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quiz;
use Illuminate\Support\Facades\DB;

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

    public function game(Request $request) {
        $quiz = Quiz::all()->toArray();
        $request->session()->flush();

        // if ($request->session()->get('user_name')) {
        //     return Inertia::render('Game', [
        //         'quiz' => $quiz,
        //     ]);
        // }

        return Inertia::render('Game', [
            'quiz' => $quiz,
        ]);
    }
}
