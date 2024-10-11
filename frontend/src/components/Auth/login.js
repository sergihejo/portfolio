import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const auth = useAuth();

	const handleLogin = async () => {
		await auth.login(username, password);
	};

	const handleLogout = () => {
		auth.logout();
	};

	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				className="border-2 border-gray-300 text-black rounded-lg p-1 mb-3"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				className="border-2 border-gray-300 text-black rounded-lg p-1 mb-3"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Login;
