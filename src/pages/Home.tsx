import About from '../containers/About';
import Admission from '../containers/Admission';
import Advantages from '../containers/Advantages';

export default function Home() {
	return (
		<main className="flex flex-col items-center background-main nav-padding-sm md:nav-padding">
			<About />
			<Admission />
			<Advantages />
		</main>
	);
}
