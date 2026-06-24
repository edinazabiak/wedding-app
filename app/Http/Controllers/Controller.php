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
			'name'	=> 'required|string|max:255|unique:game,name'
		], [
			'name.required'	=> 'Kérlek, adj meg egy nevet!',
			'name.string'	=> 'A névnek szöveges formátumúnak kell lennie!',
			'name.max'		=> 'A név maximum 255 karakter hosszú lehet!',
			'name.unique'	=> 'Ez a név már szerepel az adatbázisban. Kérlek, válassz másikat!',
		]);

		if ($validatedData) {
			return response()->json(['message' => 'Eredmény sikeresen mentve!'], 200);
		}

		return response()->json(['message' => $validatedData], 400);
	}

	public function saveResult(Request $request) {
		$validatedData = $request->validate([
			'name'		=> 'required|string|max:255|unique:game,name',
			'answers'	=> 'required|array',
			'score'		=> 'required|integer',
		], [
			'name.required'		=> 'Kérlek, adj meg egy nevet!',
			'name.string'		=> 'A névnek szöveges formátumúnak kell lennie!',
			'name.max'			=> 'A név maximum 255 karakter hosszú lehet!',
			'name.unique'		=> 'Ez a név már szerepel az adatbázisban. Kérlek, válassz másikat!',
			'answers.required'	=> 'A válaszok mező nem lehet üres!',
			'answers.array'		=> 'A válaszoknak tömb formátumúnak kell lennie!',
			'score.required'	=> 'A pontszám mező nem lehet üres!',
			'score.integer'		=> 'A pontszámnak egész számnak kell lennie!',
		]);

		if ($validatedData) {
			DB::table('game')->insert([
				'name'			=> $validatedData['name'],
				'answers'		=> json_encode($validatedData['answers']),
				'score'			=> $validatedData['score'],
				'created_at'	=> now(),
				'updated_at'	=> now(),
			]);

			return response()->json(['message' => 'Eredmény sikeresen mentve!'], 200);
		}

		return response()->json(['message' => $validatedData], 400);
	}

	public function results(Request $request) {
		$results = Game::orderBy('score', 'desc')->limit(10)->get()->toArray();

		return response()->json($results);
	}
}
