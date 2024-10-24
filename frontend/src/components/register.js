import { useState } from 'react';
import axios from 'axios';

function Register() {
	const [newUser, setNewUser] = useState({
		username: '',
		email: '',
		password: '',
		name: '',
		description: '',
		image_url: '',
		github_url: '',
		linkedin_url: '',
		twitter_url: ''
	});

	const handleInputChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		});
	};

	const handleAddUser = async () => {
		try {
			await axios.post(
				process.env.REACT_APP_BACKEND_URL + '/auth/register',
				newUser
			);
			window.location.href = '/pendingValidation';
		} catch (error) {
			console.error('Error adding user:', error);
		}
	};

	const generatePassword = () => {
		const password = Math.random().toString(36).slice(-8);
		setNewUser({ ...newUser, password });
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-3xl font-bold m-4">Register</h2>
			<div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
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
						value={newUser.username}
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
						value={newUser.email}
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
							value={newUser.password}
							onChange={handleInputChange}
						/>
						<button
							onClick={generatePassword}
							className="rounded-lg border-solid bg-sky-700 text-white px-4 py-2 hover:bg-sky-800"
						>
							Generate
						</button>
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
						value={newUser.bio}
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
						value={newUser.image_url}
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
						value={newUser.github_url}
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
						value={newUser.linkedin_url}
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
						value={newUser.twitter_url}
						onChange={handleInputChange}
					/>
				</div>
				<button
					onClick={handleAddUser}
					className="w-full rounded-lg border-solid bg-sky-700 text-white px-4 py-2 hover:bg-sky-800"
				>
					Register
				</button>
			</div>
		</div>
	);
}

export default Register;
