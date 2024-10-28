import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const validateToken = async () => {
			const token = localStorage.getItem('token');

			if (!token) {
				setIsAuthenticated(false);
				setIsLoading(false);
				navigate('/login', { state: { error: 'No token found' } });
			}

			let decodedToken;
			try {
				decodedToken = jwtDecode(token);
				if (decodedToken.exp < Date.now() / 1000) {
					setIsAuthenticated(false);
					setIsLoading(false);
					navigate('/login', { state: { error: 'Session expired' } });
				}

				const { username } = decodedToken;

				try {
					const response = await axios.get(
						process.env.REACT_APP_BACKEND_URL +
							`/users/search/${username}`
					);

					if (!response.data.validated) {
						setIsAuthenticated(false);
						setIsLoading(false);
						navigate('/pendingValidation', {
							state: { error: 'User not validated' }
						});
					} else {
						setIsAuthenticated(true);
						setIsLoading(false);
					}
				} catch (error) {
					setIsAuthenticated(false);
					setIsLoading(false);
					navigate('/login', {
						state: { error: 'Error validating user' }
					});
				}
			} catch (error) {
				setIsAuthenticated(false);
				setIsLoading(false);
				navigate('/login', { state: { error: 'Invalid token' } });
			}
		};

		validateToken();
	}, [navigate]);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
