import React from 'react';
import './header.css';

export default function Header() {
	return (
		<header className="header flex flex-col w-full">
			{/* <img src="logo.png" alt="Company Logo" className="logo" /> */}
			<nav className="mt-7">
				<ul className="links flex list-none justify-center align-center">
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
