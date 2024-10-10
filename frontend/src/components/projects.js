import React, { useEffect, useState } from 'react';
import ProjectCard from './project_card';
import axios from 'axios';

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					'http://localhost:3001/projects'
				);
				setProjects(response.data);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	projects.map((project) => console.log(project.title));

	return (
		<div className="w-2/3">
			<h3 className="text-4xl font-extrabold" id="projects">
				<i class="fa-solid fa-code"></i> Proyectos
			</h3>
			<ProjectCard
				image="https://i.imgur.com/mtlFXLa.png"
				title="StudyHub"
				demo="https://i.imgur.com/PO65gVr.gif, https://i.imgur.com/N6Ppy2d.gif"
				tech="HTML, CSS, JavaScript, MySQL, Java"
				tech_icons="fab fa-html5, fab fa-css3-alt, fab fa-js, fab fa-node-js, fab fa-js, fab fa-js, fab fa-js, fab fa-js"
				tech_colors="text-red-600, text-blue-500, text-yellow-400, text-green-400, text-green-400, text-green-400, text-green-400, text-green-400"
				description="StudyHub es una aplicación web que permite a los estudiantes compartir apuntes y recursos de estudio. Además, cuenta con un foro para que los usuarios puedan plantear dudas y resolverlas entre ellos."
				github="https://github.com/JavivuG/StudyHub"
			/>
			<ProjectCard
				image="https://i.imgur.com/8O2IfST.png"
				title="Página Web CB&A Auditores"
				tech="HTML, TailwindCSS, JavaScript, Jenkins"
				description=" Desarrollo del sitio web de CB&A Auditores utilizando HTML, TailwindCSS y JavaScript.
  								El proyecto incluyó la implementación de un diseño responsive, optimización del rendimiento y creación de una interfaz moderna, 
  								centrada en la experiencia del usuario."
				preview="https://cbyaauditores.es/"
			/>
			<ProjectCard
				image="https://i.imgur.com/xhTkLsi.png"
				title="CB&A Modelo 182"
				tech="HTML, TailwindCSS, TypeScript, NestJS"
				description="Herramienta web desarrollada para la generación automática de un archivo .txt compatible con el modelo 182 de la Agencia Tributaria, 
  							a partir de datos en formato XLS o CSV. El proyecto simplifica el proceso de conversión y asegura que el fichero cumpla con los requisitos fiscales establecidos."
				github="https://github.com/sergihejo/cbya-modelo182"
				preview="https://modelo182.cbyaauditores.es/"
			/>
			<ProjectCard
				image="https://i.imgur.com/fm58uhb.png"
				title="Página Web FlyAnt Cargo VA"
				tech="HTML, TailwindCSS, JavaScript, MySQL, Laravel, Jenkins, Grafana"
				description=" Desarrollo de la página web para FlyAnt Cargo VA, una aerolínea virtual que simula operaciones reales en plataformas de vuelo online. 
  								Utilizando HTML, Laravel, TailwindCSS, JavaScript, entre otros, el sitio incluye funcionalidades como el seguimiento de vuelos virtuales y la integración de un sistema Moodle personalizado para la formación de los pilotos virtuales.
  								La web es responsive, optimizada para un rendimiento rápido y diseñada para mejorar la experiencia de los usuarios y pilotos de la aerolínea."
				preview="https://flyant.asociacionaspa.es/welcome"
			/>
		</div>
	);
}
