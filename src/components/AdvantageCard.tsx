import type { AdvantageInfo } from '../data/AdvantageInfo';

interface AdvantageCardProps {
	info: AdvantageInfo;
	reverse: boolean;
}

export default function AdvantageCard({ info, reverse }: AdvantageCardProps) {
	return (
		<div
			className={`flex items-center flex-col ${
				reverse ? 'md:flex-row' : 'md:flex-row-reverse'
			}`}
		>
			<div className="md:w-1/2 flex items-center justify-center">
				<img
					src={info.image}
					alt={info.image}
					className="w-[90%] rounded shadow-xl"
				/>
			</div>
			<div className="md:w-1/2 p-8">
				<h3 className="text-2xl font-bold mb-12">{info.title}</h3>
				<div className="font-semibold text-xl flex flex-col gap-4">
					{info.body}
				</div>
			</div>
		</div>
	);
}
