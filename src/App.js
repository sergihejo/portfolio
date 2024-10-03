import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
	return (
		<div className="App min-h-screen">
			<Header />
			<div className="flex flex-col items-center justify-center">
				<Intro />
				<Projects />
				<Footer />
			</div>
		</div>
	);
}

export default App;
