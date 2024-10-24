import React from 'react';
import { useAuth } from '../hooks/useAuth';

function PendingValidation() {
	const auth = useAuth();

	const handleLogout = () => {
		auth.logout();
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-3xl font-bold m-4">Pending Validation</h2>
			<div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md m-7">
				<p>Your account is pending validation.</p>
			</div>
			{/*Logout button  */}
			<button
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
}

export default PendingValidation;
