import React from 'react';
import SocialButton from './socialbutton';

export default function Intro() {
	return (
		<div className="mt-7 w-2/3 mb-20 ">
			<h3 className="text-4xl mb-2 font-bold">¡Hola! Soy Sergio</h3>
			<p className="text-xl mb-4">
				Actualmente soy un estudiante de Ingeniería Informática en la
				Universidad de Valladolid,
				<br />
				especializado en Tecnologías de la Información.
				<br />
				En este portafolio podrás encontrar algunos de los proyectos en
				los que he trabajado.
				<br />
				También puedes contactar conmigo utilizando los enlaces de
				abajo.
			</p>

			<SocialButton
				link="https://github.com/sergihejo"
				icon="fa-brands fa-github pr-2"
				alt="GitHub"
				text="GitHub"
			/>

			<SocialButton
				link="https://www.linkedin.com/in/sergio-herrero-joral/"
				icon="fa-brands fa-linkedin-in pr-2"
				alt="Linkedin"
				text="LinkedIn"
			/>
		</div>
	);
}
