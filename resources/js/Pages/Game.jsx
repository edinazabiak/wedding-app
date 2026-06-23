import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
import axios from 'axios';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function Game({ quiz }) {
	const [userName, setUserName] = useState(localStorage.getItem('user_name') || null);
	const [answers, setAnswers] = useState(JSON.parse(localStorage.getItem('answers')) || []);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [results, setResults] = useState(localStorage.getItem('result') || false);
	
	const startGame = (e) => {
		const name = e.target.previousElementSibling.value.trim();

		// check if name is not empty and unique (not already in database)
		axios.post(route('validation'), { name })
			.then(response => {
				if (response.data.unique) {
					setUserName(name);
					localStorage.setItem('user_name', name);
					localStorage.setItem('answers', JSON.stringify(createAnswersArray()));
				} else {
					alert('Ez a név már foglalt. Kérlek, válassz másikat!');
				}
			})
			.catch(error => {
				console.error('Hiba történt a név ellenőrzése során:', error);
			});
	};

	const createAnswersArray = () => {
		let emptyAnswersArray = [];
		for (let i = 0; i < quiz.length; i++) {
			emptyAnswersArray.push({
				question_id: quiz[i].id,
				answer: null
			});
		}
		
		return emptyAnswersArray;
	}

	const handleAnswerClick = (selectedOption, correctAnswer) => {
		let answersArray = JSON.parse(localStorage.getItem('answers')) || createAnswersArray();
		answersArray[currentQuestionIndex].answer = selectedOption;
		localStorage.setItem('answers', JSON.stringify(answersArray));

		if (selectedOption === correctAnswer) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);

		if (currentQuestionIndex + 1 >= quiz.length) {
			localStorage.setItem('result', true);
			setCurrentQuestionIndex(0);
			setResults(true);

			// eredmény elmentése az adatbázisba
			axios.post(route('saveResult'), {
				name: userName,
				score: score + (selectedOption === correctAnswer ? 1 : 0) // add the last question's score
			}).then(response => {
				console.log('Eredmény elmentve:', response.data);
			}).catch(error => {
				console.error('Hiba történt az eredmény mentése során:', error);
			});
		}
	};

	useEffect(() => {
		if (localStorage.getItem('answers')) {
			let answers = JSON.parse(localStorage.getItem('answers'));
			let firstNullAnswer = answers.find(answer => answer.answer === null);

			if (firstNullAnswer) {
				setCurrentQuestionIndex(answers.indexOf(firstNullAnswer));
			} else {
				localStorage.setItem('result', true);
				setResults(true);
			}
		}
	}, []);

	return (
		<>
			<section className="applications container my-3">
				<div className="row flex-column justify-content-center align-items-center">
					<div className="col-12 px-3 text-center">
						{ userName === null && !results ? (
							<div className="welcome-message">
								<p>Szia! Szeretnéd letesztelni, hogy mennyire ismersz minket? Add meg a nevedet (felismerhető legyen), és töltsd ki a tesztünket! Jól gondold át a válaszokat, mert egy készülékkel csak egyszer játszthatsz.</p>
								<p>Az az illető, aki a legtöbb pontszámot gyűjti, a menyasszony tánc után <mark>ajándékban</mark> részesül! </p>

								<input type="text" className="form-control text-center mb-3" name="user_name" placeholder="Adj meg egy nevet" />
								<button className="btn btn-primary" onClick={startGame}>Kezdődjön a játék!</button>
							</div>
						) : (
							!results ? (
								<div className="quiz-container">
									<div className="quiz-header">
										<div className="quiz-top">
											<p>{currentQuestionIndex + 1}</p>
										</div>
										<div className="quiz-title">
											<p>{quiz[currentQuestionIndex].question}</p>
										</div>
									</div>
									<div className="answers">
										<div className="answer-body" onClick={() => handleAnswerClick(1, quiz[currentQuestionIndex].answer)}>
											<div className="answer-letter">
												A
											</div>
											<div className="answer-text">{quiz[currentQuestionIndex].option1}</div>
										</div>
										<div className="answer-body" onClick={() => handleAnswerClick(2, quiz[currentQuestionIndex].answer)}>
											<div className="answer-letter">
												B
											</div>
											<div className="answer-text">{quiz[currentQuestionIndex].option2}</div>
										</div>
										<div className="answer-body" onClick={() => handleAnswerClick(3, quiz[currentQuestionIndex].answer)}>
											<div className="answer-letter">
												C
											</div>
											<div className="answer-text">{quiz[currentQuestionIndex].option3}</div>
										</div>
									</div>
								</div>
							) : (
								<div className="quiz-result">
									<p>Gratulálunk, {userName}! A teszt kitöltésével <mark>{score}</mark> pontot szereztél!</p>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</>
	);}

Game.layout = (page) => <Layout children={page} />;

export default Game;