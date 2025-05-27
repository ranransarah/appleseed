import type { CurriculumInfo } from '../data/CurriculumInfo';

interface CurriculumCardProps {
	info: CurriculumInfo;
}

export default function CurriculumCard({ info }: CurriculumCardProps) {
	return (
		<div className="w-full md:w-[80%]">
			<h3 className="text-2xl font-bold mb-8 flex items-center">
				<img
					src={info.icon}
					className="mr-4 aspect-square h-full"
				/>

				{info.title}
			</h3>
			<div className="font-semibold text-lg flex flex-col gap-4">
				{info.body}
			</div>
		</div>
	);
}
