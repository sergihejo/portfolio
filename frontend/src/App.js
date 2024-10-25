import './App.css';
// import Header from './components/header';
import Intro from './components/intro';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';
import { AuthProvider } from './hooks/useAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Auth/private_route';
import Login from './components/Auth/login';
import AdminDashboard from './components/Admin/dashboard';
import AdminUsers from './components/Admin/users';
import AdminProjects from './components/Admin/projects';
import Register from './components/register';
import PendingValidation from './components/pendingValidation';
import EditUser from './components/Admin/editUser';
import EditProject from "./components/Admin/editProject";

function App() {
	return (
		<AuthProvider>
			<div className="App min-h-screen bg-gradient-to-t from-slate-950 to-slate-800 text-white">
				{/* <Header /> */}
				<Router>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />

						<Route
							path="/pendingValidation"
							element={<PendingValidation />}
						/>

						<Route
							path="/admin/*"
							element={
								<PrivateRoute>
									<AdminDashboard />
								</PrivateRoute>
							}
						/>

						<Route
							path="/admin/users/edit/:id"
							element={
								<PrivateRoute>
									<EditUser />
								</PrivateRoute>
							}
						/>

						<Route
							path="/admin/projects/edit/:id"
							element={
								<PrivateRoute>
									<EditProject />
								</PrivateRoute>
							}
						/>
						<Route
							path="/admin/users"
							element={
								<PrivateRoute>
									<AdminUsers />
								</PrivateRoute>
							}
						/>

						<Route
							path="/admin/projects"
							element={
								<PrivateRoute>
									<AdminProjects />
								</PrivateRoute>
							}
						/>

						<Route
							path="/"
							element={
								<div className="flex flex-col items-center justify-center">
									<Intro />
									<Projects />
									<Contact />
									<Footer />
								</div>
							}
						/>
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
