import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function Game({ quiz }) {
	const [userName, setUserName] = useState(sessionStorage.getItem('user_name') || null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [results, setResults] = useState(false);
	
	const startGame = (e) => {
		const name = e.target.previousElementSibling.value.trim();

		if (name) {
			let answers = [];
			for (let i = 0; i < quiz.length; i++) {
				answers.push({
					question_id: quiz[i].id,
					answer: null
				});
			}

			sessionStorage.setItem('answers', JSON.stringify(answers));
			sessionStorage.setItem('user_name', name);
			setUserName(name);
			setResults(false);
		}
	};

	const handleAnswerClick = (selectedOption, correctAnswer) => {
		let answers = JSON.parse(sessionStorage.getItem('answers')) || [];
		answers[currentQuestionIndex].answer = selectedOption;
		sessionStorage.setItem('answers', JSON.stringify(answers));

		if (selectedOption === correctAnswer) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);

		if (currentQuestionIndex + 1 >= quiz.length) {
			sessionStorage.removeItem('user_name');
			sessionStorage.removeItem('answers');

			setUserName(null);
			setCurrentQuestionIndex(0);
			setScore(0);
			setResults(true);
		}
	};

	return (
		<>
			<section className="applications container my-3">
				<div className="row flex-column justify-content-center align-items-center">
					<div className="col-12 px-3 text-center">
						{ !userName || userName === null ? (
							<div className="welcome-message">
								<p>Szia! Szeretnéd letesztelni, hogy mennyire ismersz minket? Add meg a nevedet (lehet nickname is), és töltsd ki a tesztünket!</p>
								<p>A játék az esküvő után is elérhető lesz, nem kell aggódnod, ha mondjuk most nem lenne rá időd vagy kedved, de mégis érdekelnek a kérdések. </p>
								<p>Többször is kitöltheted a tesztet, de a végén csak a megoldások számát látod majd, a helyes válaszokat nem.</p>

								<input type="text" className="form-control text-center mb-3" name="user_name" placeholder="Adj meg egy nevet" />
								<button className="btn btn-primary" onClick={startGame}>Kezdődjön a játék!</button>
							</div>
						) : (
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
						)}

						{ results && (
							<div className="results">
								<h2>Játék vége!</h2>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);}

Game.layout = (page) => <Layout children={page} />;

export default Game;