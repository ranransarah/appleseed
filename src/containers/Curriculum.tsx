import CurriculumCard from '../components/CurriculumCard';
import { CurriculumInfo } from '../data/CurriculumInfo';
import { Fragment } from 'react/jsx-runtime';

export default function Curriculum() {
	return (
		<section className="px-[5%] w-full py-10">
			<div className="max-w-[1440px]">
				<h2 className="text-3xl font-bold mb-16 text-center">
					课程亮点 | Program Highlights
				</h2>
				<div className="flex flex-col items-center gap-6">
					{CurriculumInfo.map((info, index) => (
						<Fragment key={info.title}>
							{index !== 0 && (
								<div className="my-4 h-1 bg-sunshine-gold w-3/5 rounded-2xl"></div>
							)}
							<CurriculumCard info={info} />
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
