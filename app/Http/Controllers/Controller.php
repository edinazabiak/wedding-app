<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quiz;
use App\Models\Game;
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

        return Inertia::render('Game', [
            'quiz' => $quiz,
        ]);
    }

    public function validation(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:game,name'
        ], [
            'name.required' => 'Kérlek, adj meg egy nevet!',
            'name.string'   => 'A névnek szöveges formátumúnak kell lennie!',
            'name.max'      => 'A név maximum 255 karakter hosszú lehet!',
            'name.unique'   => 'Ez a név már szerepel az adatbázisban. Kérlek, válassz másikat!',
        ]);

        if ($validatedData) {
            return response()->json(['message' => 'Eredmény sikeresen mentve!']);
        }

        return response()->json(['message' => $validatedData], 400);
    }

    public function saveResult(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:game,name',
            'answers'   => 'required|array'
        ], [
            'name.required' => 'Kérlek, adj meg egy nevet!',
            'name.string'   => 'A névnek szöveges formátumúnak kell lennie!',
            'name.max'      => 'A név maximum 255 karakter hosszú lehet!',
            'name.unique'   => 'Ez a név már szerepel az adatbázisban. Kérlek, válassz másikat!',
            'answers.required'   => 'A válaszok mező nem lehet üres!',
            'answers.array'      => 'A válaszoknak tömb formátumúnak kell lennie!',
        ]);

        if ($validatedData) {
            DB::table('game')->insert([
                'name'     => $validatedData['name'],
                'answers'  => json_encode($validatedData['answers']),
                'is_done'  => $validatedData['is_done'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            return response()->json(['message' => 'Eredmény sikeresen mentve!']);
        }

        return response()->json(['message' => $validatedData], 400);
    }
}
