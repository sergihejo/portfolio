import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import './style.css';
import axios from 'axios';

const EditProject = () => {
    const {id} = useParams();
    const [project, setProject] = useState({
        title: '',
        description: '',
        tech_stack: '',
        github_url: '',
        demo_url: '',
        preview_url: '',
        image_url: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `/projects/${id}`
                );
                setProject(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching project:', error);
                setError('Error fetching project details');
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                process.env.REACT_APP_BACKEND_URL + `/projects/${id}`,
                project,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            alert('Project details updated successfully');
        } catch (error) {
            console.error('Error updating project:', error);
            setError('Error updating project details');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold m-4">Edit Project</h2>
            <div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-400">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={project.title}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-400">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            value={project.description}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tech_stack" className="block text-gray-400">
                            Tech Stack
                        </label>
                        <input
                            type="text"
                            name="tech_stack"
                            id="tech_stack"
                            value={project.tech_stack}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="github_url" className="block text-gray-400">
                            GitHub URL
                        </label>
                        <input
                            type="text"
                            name="github_url"
                            id="github_url"
                            value={project.github_url}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="demo_url" className="block text-gray-400">
                            Demo URL
                        </label>
                        <input
                            type="text"
                            name="demo_url"
                            id="demo_url"
                            value={project.demo_url}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="preview_url" className="block text-gray-400">
                            Preview URL
                        </label>
                        <input
                            type="text"
                            name="preview_url"
                            id="preview_url"
                            value={project.preview_url}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image_url" className="block text-gray-400">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image_url"
                            id="image_url"
                            value={project.image_url}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border-solid border-gray-400 text-black px-4 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg border-solid bg-green-700 text-white px-4 py-2 mt-5 hover:bg-green-800">
                        Update Project
                    </button>
                </form>
                <button
                    className="w-full rounded-lg border-solid bg-sky-700 text-white px-4 py-2 mt-5 hover:bg-sky-800">
                    <Link to="/admin/projects">Back to Projects</Link>
                </button>
            </div>
        </div>
    );
};

export default EditProject;