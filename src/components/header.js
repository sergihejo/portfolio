import React from 'react';
import './header.css';

export default function Header() {
	return (
		<header className="header flex flex-col w-full fixed">
			{/* <img src="logo.png" alt="Company Logo" className="logo" /> */}
			<nav className="mt-7 flex justify-center">
				<ul className="links flex list-none justify-center align-center w-fit rounded-full bg-cyan-900	">
					<li className="mx-5">
						<a href="#projects">Proyectos</a>
					</li>
					{/* <li className="mx-5">
						<a href="#services">Sobre mí</a>
					</li> */}
					<li className="mx-5">
						<a href="#contact">Contacto</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
