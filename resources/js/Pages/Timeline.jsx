import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function Timeline() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const events = [
		{ time: "15:00", title: "Templomi szertartás",			 location: "Debreceni Szent Anna-székesegyház", description: "Isten színe előtt pecsételjük meg a házasságunkat." },
		{ time: "16:30", title: "Vendégvárás",					 location: "Fekete Farm", 						description: "Várunk téged finom falatokkal és hűsítő italokkal." },
		{ time: "17:00", title: "Fotózkodás",					 location: "Fekete Farm", 						description: "Készíts pár közös képet velünk!" },
		{ time: "19:00", title: "Nyitótánc és buli",			 location: "Fekete Farm", 						description: "A nyitótáncunk ideje, ami után kezdődik a buli!" },
		{ time: "20:00", title: "Vacsora",						 location: "Fekete Farm", 						description: "Megéheztél a táncolásban? Ideje vacsorázni!" },
		{ time: "21:00", title: "Éjszakai szertartás",			 location: "Fekete Farm", 						description: "Megható szertartás a csillagok alatt." },
		{ time: "21:30", title: "Sültes tál és buli",			 location: "Fekete Farm", 						description: "Finom falatok a késő éjszakai éhség csillapítására." },
		{ time: "00:00", title: "Tortavágás és menyasszonytánc", location: "Fekete Farm", 						description: "Kóstold meg a tortát és táncolj a menyasszonnyal!" },
		{ time: "00:30", title: "Mulatság",						 location: "Fekete Farm", 						description: "Hajnalig tartó mulatság." },
	];

	const getActiveEvent = () => {
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();
		for (let i = 0; i < events.length; i++) {
			const [eventHour, eventMinute] = events[i].time.split(":").map(Number);
			if (
				(currentHour > eventHour || (currentHour === eventHour && currentMinute >= eventMinute)) &&
				(i === events.length - 1 || currentHour < Number(events[i + 1].time.split(":")[0]) || (currentHour === Number(events[i + 1].time.split(":")[0]) && currentMinute < Number(events[i + 1].time.split(":")[1])))
			) {
				return i;
			}
		}
		return -1;
	};

	const activeEventIndex = getActiveEvent();

	return (
		<>
			<section className="applications container my-3">
				<div className="row flex-column justify-content-center align-items-center">
					{events.map((event, index) => (
						<div key={index} className="col-12 col-md-10 col-lg-6 timeline-item">
							<div className="timeline-time">
								<p>{event.time}</p>
							</div>
							<div>
								<span className={`timeline-rounder ${activeEventIndex === index ? "timeline-rounder__active" : ""}`}></span>
								<span className="timeline-line"></span>
							</div>
							<div className="timeline-content">
								<h2>{event.title}</h2>
								<span>{event.location}</span>
								<p>{event.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);}

Timeline.layout = (page) => <Layout children={page} />;

export default Timeline;