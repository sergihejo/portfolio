import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import propTypes from "prop-types";

// Crear el contexto de autenticación
const AuthContext = createContext();

export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook para usar el contexto de autenticación
export const useAuth = () => {
	return useContext(AuthContext);
};

// Hook personalizado que provee la lógica de autenticación
function useProvideAuth() {
	const [user, setUser] = useState(null);

	// Función para hacer login
	const login = async (username, password) => {
		const response = await fetch(
			process.env.REACT_APP_BACKEND_URL + '/auth/login',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			}
		);
		const data = await response.json();

		if (data.access_token) {
			localStorage.setItem('token', data.access_token);
			setUser({ username });
			window.location.href = '/admin';
		} else {
			throw new Error('Login failed. Please check your credentials.');
		}
	};

	// Función para hacer logout
	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		window.location.href = '/';
	};

	// Comprobar si el usuario está autenticado al cargar el componente
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			try {
				const decodedToken = jwtDecode(token);
				setUser({ username: decodedToken.username }); // Ajusta esto según la estructura de tu token
			} catch (error) {
				console.error('Error al decodificar el token:', error);
			}
		}
	}, []);

	return {
		user,
		login,
		logout
	};
}

AuthProvider.propTypes = {
	children: propTypes.node.isRequired,
};