import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function ServiceProviders() {
	return (
		<>
			<section className="applications container my-3">
				<div className="row">
					<div className="col-12">
						<div className="accordion accordion-flush" id="accordionFlushExample">

							<div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									Vőfély: Markó Bandi
								</button>
								</h2>
								<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>A lagzink hangulatáért vőfélyünk, Markó Bandi felel. Ő gondoskodik arról, hogy minden vendég jól érezze magát és a buli zökkenőmentesen zajlódjon.
											Bármi kérdésed lenne a lagziról, a menetrendről, SOS probléma megoldás kell, bátran fordulj hozzá. Másik szakmája a mentőzés, így a biztonságot 
											is garantálja.
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
									Zenekar: Szabolcsi Vígadó
								</button>
								</h2>
								<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>Mivel a menyasszony és a vőlegény is szereti a mulatós zenét, a Szabolcsi Vígadó zenekar biztosítja a hangulatot a lagzin. De nem kell aggódnod, mai slágereket 
											is feldolgoznak, így hallhatsz majd Azahriát vagy Byealexet is. Ha hajnalban már csak a fiatalok maradnak bulizni, akik a mai zenéket szeretik, akkor lehetőség 
											lesz saját playlistet is hallgatni. A zenekar a vőfélytől kapja majd a jelzést, hogy mikor kell elkezdeni a zenélést, így biztosan nem marad el a buli.
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
									Fotós: Nagy Károly
								</button>
								</h2>
								<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>Bár nagyra értékeljük, ha a vendégeink megosztják a saját képeiket, a profi fotósunk, Nagy Károly, biztosítja, hogy a legfontosabb pillanatokat is megörökítse 
											a legjobb minőségben. A fotósunk kb. hajnal 1-ig jelen lesz, így biztosan nem marad el egyetlen fontos pillanat sem. A képeket a lagzi után megosztjuk majd a 
											vendégeinkkel,így mindenki hozzáférhet a képekhez, és megoszthatja azokat a saját közösségi média felületein is. Ha a vendégvárás során nem készült közös fotó
											a párral, akkor a lagzi során bármikor jelezheted neki és a párnak.
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
									Videós: RMCMédia
								</button>
								</h2>
								<div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>Hogy videó formájában is megmaradjon a nagy nap, az RMCMédia csapata rögzíti az eseményeket. Készül majd egy rövid, egy perces összefoglaló, egy 3-4 perces higlight 
											videó, illetve egy nagyobb időtartamú videó is, ami az esküvő nagyobb eseményeit (templomi szertartás, nyitótánc, éjszakai szertartás, menyasszonytánc) is tartalmazza. 
											Ne lepődj meg, ha meglátsz pár extrább felvevő cuccot, tényleg profi csapatról van szó. 
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
									Szertartásvezető: Buzainé Kovács Margó
								</button>
								</h2>
								<div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>A környék egyik legjobb szertartásvezetője. Ő vezeti majd le az éjszakai szertartást, ami bár nem hivatalos, csak szimbolikus, de garantáltan nagyon megható lesz. 
											Érdekes tény, hogy a szertartás helyszínéül szolgáló kápolna a menyasszony egyik rokona készítette évekkel ezelőtt, így a szertartásvezető és a kápolna is különleges 
											jelentőséggel bír a pár számára.
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
									Esküvői torta: Könnyű Desszertek
								</button>
								</h2>
								<div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>A menyasszony egy jó barátnője készítette az esküvői tortát, ami nem csak szép lett, de garanáltan nagyon finom is. Ha valaki Budapesten járna, érdemes ellátogatni a 
											Könnyű Desszertekhez, hogy megkóstoljon már finomságokat is. Menj a Tippan u. 2-fszt. 11 szám alá, hogy te is saját szemeiddel lásd Angi hangulatos cukrászdáját!
										</p>
									</div>
								</div>
							</div>

                            <div className="accordion-item">
								<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
									Sütemények: Kiss Virág Cukrászda
								</button>
								</h2>
								<div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
									<div className="accordion-body accordion-body__service-providers">
										<p>...</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);}

ServiceProviders.layout = (page) => <Layout children={page} />;

export default ServiceProviders;