import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useAuth } from '../../hooks/useAuth';

const AdminDashboard = () => {
	const auth = useAuth();

	const handleLogout = () => {
		auth.logout();
	};
	return (
		<div className="admin-dashboard">
			<h1>Admin Dashboard</h1>
			<div className="admin-actions">
				<Link to="/admin/users">
					<button className="admin-btn">Manage Users</button>
				</Link>
				<Link to="/admin/projects">
					<button className="admin-btn">Manage Projects</button>
				</Link>
				{/* Logout  */}
				<button className="admin-btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminDashboard;
