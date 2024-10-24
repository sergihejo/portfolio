import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = useAuth();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.error) {
			setError(location.state.error);
		}
	}, [location.state]);

	const handleLogin = async () => {
		// await auth.login(username, password);
		try {
			await auth.login(username, password);
			setError(''); // Clear any previous error
		} catch (err) {
			console.error(err);
			setError('Login failed. Please check your credentials.');
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-3xl mb-4">Login</h2>
			<div className="flex flex-col justify-center items-center w-fit">
				<input
					type="text"
					className="border-2 border-gray-300 text-black rounded-lg p-1 mb-3"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleLogin();
						}
					}}
				/>
				<input
					type="password"
					className="border-2 border-gray-300 text-black rounded-lg p-1 mb-3"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleLogin();
						}
					}}
				/>
				<button
					onClick={handleLogin}
					className="mb-2 rounded-lg border-solid bg-sky-700 text-white px-2 py-1 hover:bg-sky-800"
				>
					Login
				</button>
				{error && <div className="text-red-500">{error}</div>}
			</div>
		</div>
	);
}

export default Login;
