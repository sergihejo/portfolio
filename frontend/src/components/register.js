import { useState } from 'react';

function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = async () => {
		const response = await fetch(
			process.env.REACT_APP_BACKEND_URL + '/auth/register',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			}
		);
		// TODO: Handle response
		const data = await response.json();
		console.log('User registered:', data);
	};

	return (
		<div>
			<h2>Register</h2>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleRegister}>Register</button>
		</div>
	);
}

export default Register;
