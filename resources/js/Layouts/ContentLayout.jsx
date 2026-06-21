import React, { useEffect } from "react";
import { router } from '@inertiajs/react';
import DecorationLeft from '../../../public/images/Asset 7.svg?react';
import DecorationRight from '../../../public/images/Asset 6.svg?react';

export default function Layout({ children }) {
	return (
		<>
			<header className="content-header py-3">
				<h1>Edina & Szabolcs</h1>
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
							<a href={route('serviceProviders')} className={route().current('serviceProviders') ? 'active' : ''}>
								<i className="fa-solid fa-gamepad"></i>
								<p>Játék</p>
							</a>
						</div>
					</div>
			</footer>
		</>
	);
}
