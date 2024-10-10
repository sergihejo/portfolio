import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
	return (
		<div className="App min-h-screen bg-gradient-to-t from-slate-950 to-slate-800 text-white">
			{/* <Header /> */}
			<div className="flex flex-col items-center justify-center">
				<Intro />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
