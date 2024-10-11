import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const ProjectManagement = () => {
	const [projects, setProjects] = useState([]);
	const [newProject, setNewProject] = useState({
		title: '',
		description: '',
		tech_stack: ''
	});

	useEffect(() => {
		fetchProjects();
	}, []);

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

	const handleInputChange = (e) => {
		setNewProject({
			...newProject,
			[e.target.name]: e.target.value
		});
	};

	const handleAddProject = async () => {
		try {
			await axios.post(
				process.env.REACT_APP_BACKEND_URL + '/projects',
				newProject
			);
			fetchProjects(); // Actualizar la lista de proyectos
		} catch (error) {
			console.error('Error adding project:', error);
		}
	};

	return (
		<div className="project-management">
			<h1>Project Management</h1>
			<div className="project-list">
				{projects.map((project) => (
					<div key={project.id} className="project-item">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<p>
							<strong>Tech Stack:</strong> {project.tech_stack}
						</p>
					</div>
				))}
			</div>

			<div className="add-project">
				<h2>Add New Project</h2>
				<input
					type="text"
					name="title"
					placeholder="Project Title"
					value={newProject.title}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={newProject.description}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="tech_stack"
					placeholder="Tech Stack"
					value={newProject.tech_stack}
					onChange={handleInputChange}
				/>
				<button onClick={handleAddProject}>Add Project</button>
			</div>
		</div>
	);
};

export default ProjectManagement;
