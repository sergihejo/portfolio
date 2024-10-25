import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AdminDashboard = () => {
	const auth = useAuth();

	const handleLogout = () => {
		auth.logout();
	};

	return (
		<div className="p-5">
			<h1 className="text-3xl font-bold">Admin Dashboard</h1>
			<div className="m-5">
				<Link to="/admin/users">
					<button className="m-2 py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white border-0 cursor-pointer">Manage Users</button>
				</Link>
				<Link to="/admin/projects">
					<button className="m-2 py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white border-0 cursor-pointer">Manage Projects</button>
				</Link>
				<Link to="/">
					<button className="m-2 py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white border-0 cursor-pointer">Go To Home</button>
				</Link>
				<button className="m-2 py-2 px-5 bg-sky-700 hover:bg-sky-900 text-white border-0 cursor-pointer" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminDashboard;
