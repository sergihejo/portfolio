// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
	return (
		<div className="App min-h-screen">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
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
