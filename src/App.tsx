import Navbar from './components/Navbar';
import { Outlet } from '@tanstack/react-router';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
