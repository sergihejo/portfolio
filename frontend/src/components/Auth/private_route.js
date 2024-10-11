import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function PrivateRoute({ children }) {
	const token = localStorage.getItem('token');

	if (!token) {
		return <Navigate to="/login" />;
	}

	let decodedToken;
	try {
		decodedToken = jwtDecode(token);
	} catch (error) {
		console.error('Error al decodificar el token:', error);
		return <Navigate to="/login" />;
	}

	if (decodedToken.exp < Date.now() / 1000) return <Navigate to="/login" />;

	return children;
}

export default PrivateRoute;
