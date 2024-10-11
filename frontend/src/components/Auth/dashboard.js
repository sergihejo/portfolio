import { useAuth } from '../../hooks/useAuth';

function Dashboard() {
	const auth = useAuth(); // Usa el hook para obtener el estado de usuario

	const handleLogout = () => {
		auth.logout(); // Llama a la función logout
	};

	return (
		<div>
			<h2>Dashboard</h2>
			<p>Bienvenido, {auth.user?.username}</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Dashboard;
