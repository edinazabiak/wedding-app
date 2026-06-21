import React, { useEffect } from "react";
import { router } from '@inertiajs/react';
import DecorationLeft from '../../../public/images/Asset 7.svg?react';
import DecorationRight from '../../../public/images/Asset 6.svg?react';

export default function Layout({ children }) {
	const date = new Date("2026-08-30T15:00:00");
	const [countdown, setCountdown] = React.useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		state: 'active'
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();

			if (date.getTime() < now) {
				clearInterval(interval);
				setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, state: 'expired' });
				return;
			}

			const distance = date.getTime() - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdown({ days, hours, minutes, seconds, state: 'active' });
		}, 1000);

		return () => clearInterval(interval);
	}, [date]);

	return (
		<>
			<header className="dashboard-header">
				<h1>Edina & Szabolcs</h1>

				{/* <div className="countdown py-3">
					{countdown.state === 'expired' ? (
						<h2>Üdvözlünk az esküvőnkön!</h2>
					) : (
						<>
							<h2>{countdown.days}
								<span className="d-block" style={{ fontSize: '0.75rem' }}>nap</span>
							</h2>
							<h2>{countdown.hours}
								<span className="d-block" style={{ fontSize: '0.75rem' }}>óra</span>
							</h2>
							<h2>{countdown.minutes}
								<span className="d-block" style={{ fontSize: '0.75rem' }}>perc</span>
							</h2>
							<h2>{countdown.seconds}
								<span className="d-block" style={{ fontSize: '0.75rem' }}>másodperc</span>
							</h2>
						</>
					)}
				</div> */}

				<DecorationRight className="decoration decoration-right position-fixed"/>

				<DecorationLeft className="decoration decoration-left position-fixed"/>

				<a href={route('index')}>
					<img src="/images/MI.JPEG" alt="Edina és Szabolcs" className="" />
				</a>
				
			</header>

			<main>
				{children}
			</main>

			<footer className="bg-white text-dark p-3">
				<div className="row justify-content-between nav">
						<div className="col-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
							<a href={route('photoUpload')} className={route().current('photoUpload') ? 'active' : ''}>
								<i className="fas fa-camera"></i>
								<p>Galéria</p>
							</a>
						</div>
						<div className="col-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
							<a href={route('timeline')} className={route().current('timeline') ? 'active' : ''}>
                                <i className="fas fa-calendar-alt"></i>
								<p>Menetrend</p>
							</a>
						</div>
						<div className="col-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
							<a href="#">
								<i className="fas fa-utensils"></i>
								<p>Étlap</p>
							</a>
						</div>
						<div className="col-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
							<a href={route('guest')} className={route().current('guest') ? 'active' : ''}>
                                <i className="fas fa-users"></i>
								<p>Vendéglista</p>
							</a>
						</div>
						<div className="col-2 d-flex justify-content-center align-items-center gap-3 flex-wrap">
							<a href="" className="">
                                <i className="fas fa-gamepad"></i>
								<p>Játék</p>
							</a>
						</div>
					</div>
			</footer>
		</>
	);
}
