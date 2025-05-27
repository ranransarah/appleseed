import CurriculumCard from '../components/CurriculumCard';
import { CurriculumInfo } from '../data/CurriculumInfo';
import { Fragment } from 'react/jsx-runtime';

export default function Curriculum() {
	return (
		<section
			id="curriculum"
			className="px-[5%] w-full my-20 bg-sky-blue/50 py-20"
		>
			<div className="max-w-[1440px]">
				<h2 className="text-3xl font-bold mb-16 text-center">
					课程亮点 | Course Highlights
				</h2>
				<div className="flex flex-col items-center gap-6">
					{CurriculumInfo.map((info, index) => (
						<Fragment>
							{index !== 0 && (
								<div className="my-4 h-1 bg-sunshine-gold w-3/5 rounded-2xl"></div>
							)}
							<CurriculumCard
								key={info.title}
								info={info}
							/>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
