import Navbar from './components/Navbar';
import About from './containers/About';
import Admission from './containers/Admission';
import Advantages from './containers/Advantages';
import Curriculum from './containers/Curriculum';

function App() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center">
				<About />
				<Admission />
				<Advantages />
				<Curriculum />
			</main>
		</>
	);
}

export default App;
