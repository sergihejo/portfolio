import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        tech_stack: '',
        github_url: '',
        demo_url: '',
        preview_url: '',
        image_url: ''
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
                newProject,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            fetchProjects();
            setNewProject({
                title: '',
                description: '',
                tech_stack: '',
                github_url: '',
                demo_url: '',
                preview_url: '',
                image_url: ''
            });
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const deleteProject = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) {
            return;
        }

        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `/projects/${id}`
            );
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    }

    const editProject = (id) => {
        window.location.href = `/admin/projects/edit/${id}`;
    }

    return (
        <div className="p-5">
            <h1 className="text-3xl mb-6 font-bold">Project Management</h1>
            <button
                className="bg-sky-700 text-white px-4 py-2 rounded-lg mb-4"
                onClick={() => window.location.href = '/admin'}
            >
                Go To Admin Panel
            </button>
            <div className="flex justify-center overflow-x-auto mb-12">
                <table className="w-fit text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Tech Stack</th>
                        <th className="px-6 py-3">GitHub URL</th>
                        <th className="px-6 py-3">Demo URL</th>
                        <th className="px-6 py-3">Preview URL</th>
                        <th className="px-6 py-3">Image URL</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b bg-gray-800 border-gray-700">
                            <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{project.title}</th>
                            <td className="px-6 py-4">
                                {project.description.length > 50 ? project.description.substring(0, 25) + '...' : project.description}
                            </td>
                            <td className="px-6 py-4">{project.tech_stack}</td>
                            <td className="px-6 py-4">
                                {project.github_url && (
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {project.demo_url && (
                                    <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        Demo
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {project.preview_url && (
                                    <a
                                        href={project.preview_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        Preview
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {project.image_url && (
                                    <img
                                        src={project.image_url}
                                        alt={project.username}
                                        className="w-8 h-8 rounded-full"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-sky-700 text-white px-4 py-2 rounded-lg mr-2"
                                        onClick={() => editProject(project.id)}
                                >Edit
                                </button>
                                <button className="bg-red-700 text-white px-4 py-2 rounded-lg"
                                        onClick={() => deleteProject(project.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center ">
                <div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
                    <h2 className="text-xl font-semibold">Add New Project</h2>
                    <div className="my-4">
                        <label
                            htmlFor="title"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Title
                        </label>
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
                        <label
                            htmlFor="description"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Description
                        </label>
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
                        <label
                            htmlFor="tech_stack"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Tech Stack
                        </label>
                        <input
                            type="text"
                            name="tech_stack"
                            placeholder="Tech Stack"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.tech_stack}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="github_url"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            GitHub URL
                        </label>
                        <input
                            type="text"
                            name="github_url"
                            placeholder="GitHub URL"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.github_url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="demo_url"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Demo URL
                        </label>
                        <input
                            type="text"
                            name="demo_url"
                            placeholder="Demo URL"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.demo_url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="preview_url"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Preview URL
                        </label>
                        <input
                            type="text"
                            name="preview_url"
                            placeholder="Preview URL"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.preview_url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image_url"
                            className="block text-gray-200 font-bold mb-2"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                            className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
                            value={newProject.image_url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleAddProject}
                            className="mt-3 w-full rounded-lg border-solid bg-sky-700 text-white px-4 py-2 hover:bg-sky-800"
                    >Add Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
