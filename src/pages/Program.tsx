import Curriculum from '../containers/Curriculum';
import Admission from '../containers/Admission';

export default function Program() {
	return (
		<main className="background-main md:nav-padding nav-padding-sm">
			<div className="px-[5%] xl:px-[10%] min-h-[80vh] pb-10 flex flex-col items-center">
				<Curriculum />
				<Admission />
			</div>
		</main>
	);
}
