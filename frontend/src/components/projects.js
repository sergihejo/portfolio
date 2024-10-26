import React, { useEffect, useState } from 'react';
import ProjectCard from './project_card';
import axios from 'axios';

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_BACKEND_URL + '/projects'
				);
				setProjects(response.data);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	return (
		<div className="w-2/3">
			<h3 className="text-4xl font-extrabold" id="projects">
				<i className="fa-solid fa-code"></i> Proyectos
			</h3>
			{projects.map((project) => (
				<ProjectCard
					image={project.image_url}
					title={project.title}
					demo={project.demo_url}
					tech={project.tech_stack}
					description={project.description}
					github={project.github_url}
					preview={project.preview_url}
				/>
			))}
		</div>
	);
}
