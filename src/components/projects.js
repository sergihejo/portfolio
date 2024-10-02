import React from 'react';
import ProjectCard from './project_card';

export default function Projects() {
	return (
		<div className="w-2/3">
			<h3 className="text-4xl font-extrabold" id="about">
				<i class="fa-solid fa-code"></i> Proyectos
			</h3>
			<p className="my-5">
				Estos son algunos de los proyectos en los que he trabajado
			</p>
			<ProjectCard
				image="https://i.imgur.com/8O2IfST.png"
				title="StudyHub"
				description="StudyHub es una aplicación web que permite a los estudiantes compartir apuntes y recursos de estudio. Además, cuenta con un foro para que los usuarios puedan plantear dudas y resolverlas entre ellos."
				github="https://github.com/JavivuG/StudyHub"
			/>
			<ProjectCard
				image="https://i.imgur.com/8O2IfST.png"
				title="Página Web CB&A Auditores"
				description="Página web de la empresa CB&A Auditores, realizada con HTML, TailwindCSS y JavaScript."
				preview="https://cbyaauditores.es/"
			/>
			<ProjectCard
				image="https://i.imgur.com/xhTkLsi.png"
				title="CB&A Modelo 182"
				description="Herramienta web para la generación del fichero txt compatible conn el modelo 182 de la Agencia Tributaria a partir de un xls/csv."
				github="https://github.com/sergihejo/cbya-modelo182"
				preview="https://modelo182.cbyaauditores.es/"
			/>
			<ProjectCard
				image="https://i.imgur.com/fm58uhb.png"
				title="Página Web FlyAnt Cargo VA"
				description="Página web para la aerolínea virtual FlyAnt Cargo VA, realizada con HTML, TailwindCSS y JavaScript."
				preview="https://flyant.asociacionaspa.es/welcome"
			/>
		</div>
	);
}
