import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const AdminDashboard = () => {
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
				<Link to="/admin/stats">
					<button className="admin-btn">View Stats</button>
				</Link>
			</div>
		</div>
	);
};

export default AdminDashboard;
