import React, {useState, useEffect} from 'react';
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
        <div className="p-5">
            <h1 className="text-3xl mb-6 font-bold">Project Management</h1>
            <div className="flex justify-center overflow-x-auto mb-12">
                <table className="w-fit text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Tech Stack</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b bg-gray-800 border-gray-700">
                            <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{project.title}</th>
                            <td className="px-6 py-4">{project.description}</td>
                            <td className="px-6 py-4">{project.tech_stack}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center ">
                <div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
                    <h2 className="text-xl font-semibold">Add New Project</h2>
                    <div className="my-4">
                        <input
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={newProject.description}
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="tech_stack"
                            placeholder="Tech Stack"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.tech_stack}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleAddProject}
                                className="mt-3 w-full rounded-lg border-solid bg-sky-700 text-white px-4 py-2 hover:bg-sky-800"
                        >Add Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
