import React from 'react';
import SocialButton from './socialbutton';

export default function Intro() {
	return (
		<div className="mt-20 w-2/3 mb-20 flex items-center flex-col md:flex-row justify-center">
			<img
				src="https://avatars.githubusercontent.com/u/70150143?v=4"
				alt="Descripción de la imagen"
				className="w-2/3 md:w-1/3 h-auto md:mr-4 md:mt-4 mb-12 rounded-full order-1 md:order-2"
			/>
			<div className="md:mr-16 order-2 md:order-1">
				<h3 className="text-4xl font-bold">¡Hola! Soy Sergio</h3>
				<p className="text-xl my-6 text-justify">
					Soy estudiante de Ingeniería Informática en la Universidad
					de Valladolid, especializado en Tecnologías de la
					Información.
					<br />
					En este portfolio encontrarás algunos de los proyectos en
					los que he trabajado, aplicando conocimientos clave y
					desarrollando soluciones tecnológicas eficientes.
					<br />
					No dudes en ponerte en contacto conmigo a través del
					formulario al final de la página.
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
			{/* <img
				src="https://avatars.githubusercontent.com/u/70150143?v=4"
				alt="Descripción de la imagen"
				className="w-2/3 mf:w-1/3 h-auto mr-4 mt-4 rounded-full"
			/> */}
		</div>
	);
}
