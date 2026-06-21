import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function Guest() {
	return (
		<>
			<section className="applications container my-3">
				<div className="row">
					<div className="col-12">
						<div className="accordion accordion-flush" id="accordionFlushExample">
							<div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseMain" aria-expanded="false" aria-controls="flush-collapseOne">
									Főasztal
								</button>
								</h2>
								<div id="flush-collapseMain" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">
										<p>
											<small>Menyasszony</small>
											Zabiák Edina
										</p>
										<p>
											<small>Vőlegény</small>
											Nagy Szabolcs
										</p>
										<p>
											<small>Örömanya</small>
											Zabiákné Budai Edit
										</p>
										<p>
											<small>Örömapa</small>
											Zabiák Gábor
										</p>
										<p>
											<small>Örömanya</small>
											Nagy Veronika Zita
										</p>
										<p>
											<small>Vőlegény tanúja, testvére</small>
											Nagy Zsolt
										</p>
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									1. asztal
								</button>
								</h2>
								<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">
										<p>
											<small>Menyasszony tanúja, testvére</small>
											Zabiák Patrik
										</p>
										<p>
											<small>Menyasszony sógornője</small>
											Zabiák Andrea
										</p>
										<p>
											<small>Fő koszorúslány</small>
											Zabiák Blanka
										</p>
										<p>
											<small>A pár keresztlánya</small>
											Zabiák Rebeka
										</p>
										<p>
											<small>Menyasszony nagymamája</small>
											Budai Pálné
										</p>
										<p>
											<small>Menyasszony keresztapja</small>
											Far Zoltán
										</p>
										<p>
											<small>Menyasszony keresztanyja</small>
											Far Judit
										</p>
										<p>
											Far Petra
										</p>
										<p>
											Far Zoltán
										</p>
										<p>
											Juliska néni
										</p>
										<p>
											Tóth György
										</p>
										<p>
											Tóthné Sári Szilvia
										</p>
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
									3. asztal
								</button>
								</h2>
								<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">
										<p>
											Oláh Ferenc
										</p>
										<p>
											Oláh Ferencné Budai Erzsébet
										</p>
										<p>
											Oláh Roland
										</p>
										<p>
											Oláh Tímea
										</p>
										<p>
											Oláh Meláni
										</p>
										<p>
											Oláh Kiara
										</p>
										<p>
											Oláh Adrienn
										</p>
										<p>
											Keczán Alexandra
										</p>
										<p>
											Berczi-Oláh Johanna
										</p>
										<p>
											Bencze Krisztián
										</p>
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne">
									5. asztal
								</button>
								</h2>
								<div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">
										<p>
											Szalóki Mihályné Budai Klára
										</p>
										<p>
											Gyülvészi Zoltán
										</p>
										<p>
											Dr. Szalóki Melinda
										</p>
										<p>
											<small>A pár keresztfia</small>
											Gyülvészi Brúnó
										</p>
										<p>
											Szalóki Mihály
										</p>
										<p>
											Kis Beatrix
										</p>
										<p>
											Szalóki Laura
										</p>
										<p>
											Szalóki Rézi
										</p>
										<p>
											Dredor Letti
										</p>
										<p>
											Lolika párja (kell a teljes név)
										</p>
										<p>
											Misó párja (kell a teljes név)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);}

Guest.layout = (page) => <Layout children={page} />;

export default Guest;