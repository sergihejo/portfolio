import axios from 'axios';

export const login = async (credentials) => {
	const response = await axios.post('/api/auth/login', credentials);
	return response.data;
};

export const getProfile = async () => {
	const response = await axios.get('/api/auth/profile');
	return response.data;
};
