import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const UserManagement = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState({ username: '', email: '' });

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await axios.get(
				process.env.REACT_APP_BACKEND_URL + '/users'
			);
			setUsers(response.data);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	const handleInputChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		});
	};

	const handleAddUser = async () => {
		try {
			await axios.post(
				process.env.REACT_APP_BACKEND_URL + '/users',
				newUser
			);
			fetchUsers(); // Actualizar la lista de usuarios
		} catch (error) {
			console.error('Error adding user:', error);
		}
	};

	return (
		<div className="user-management">
			<h1>User Management</h1>
			<div className="user-list">
				{users.map((user) => (
					<div key={user.id} className="user-item">
						{user.username} - {user.email}
					</div>
				))}
			</div>

			<div className="add-user">
				<h2>Add New User</h2>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={newUser.username}
					onChange={handleInputChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={newUser.email}
					onChange={handleInputChange}
				/>
				<button onClick={handleAddUser}>Add User</button>
			</div>
		</div>
	);
};

export default UserManagement;
