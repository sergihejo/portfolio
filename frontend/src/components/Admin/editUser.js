import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const EditUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		description: '',
		image_url: ''
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_BACKEND_URL + `/users/${id}`
				);
				setUser(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching user:', error);
				setError('Error fetching user details');
				setLoading(false);
			}
		};

		fetchUser();
	}, [id]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(
				process.env.REACT_APP_BACKEND_URL + `/users/${id}`,
				user,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				}
			);
			alert('User details updated successfully');
		} catch (error) {
			console.error('Error updating user:', error);
			setError('Error updating user details');
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-3xl font-bold m-4">Edit User</h2>
			<div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
				{error && <div className="text-red-500 mb-4">{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-200 font-bold mb-2"
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							placeholder="Username"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.username}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-200 font-bold mb-2"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-200 font-bold mb-2"
						>
							Password
						</label>
						<div className="flex items-center">
							<input
								type="text"
								name="password"
								placeholder="Password"
								className="border-2 border-gray-300 text-black rounded-lg p-2 w-full mr-2"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-gray-200 font-bold mb-2"
						>
							Bio
						</label>
						<textarea
							name="description"
							placeholder="Bio"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.description}
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
							type="url"
							name="image_url"
							placeholder="https://i.imgur.com/mtlFXLa.png"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.image_url}
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
							type="url"
							name="github_url"
							placeholder="https://github.com/username"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.github_url}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="linkedin_url"
							className="block text-gray-200 font-bold mb-2"
						>
							LinkedIn URL
						</label>
						<input
							type="url"
							name="linkedin_url"
							placeholder="https://linkedin.com/in/username"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.linkedin_url}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="twitter_url"
							className="block text-gray-200 font-bold mb-2"
						>
							Twitter URL
						</label>
						<input
							type="url"
							name="twitter_url"
							placeholder="https://twitter.com/username"
							className="border-2 border-gray-300 text-black rounded-lg p-2 w-full"
							value={user.twitter_url}
							onChange={handleInputChange}
						/>
					</div>
					<button
						type="submit"
						className="w-full rounded-lg border-solid bg-green-700 text-white px-4 py-2 hover:bg-green-800"
					>
						Update User
					</button>
				</form>
				<button className="w-full rounded-lg border-solid bg-sky-700 text-white px-4 py-2 mt-5 hover:bg-sky-800">
					<Link to="/admin/users">Back to Users</Link>
				</button>
			</div>
		</div>
	);
};

export default EditUser;
