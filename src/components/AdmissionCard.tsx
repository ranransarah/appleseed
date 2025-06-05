import type { AdmissionInfo } from '../data/AdmissionInfo';

interface InfoCardProps {
	info: AdmissionInfo;
}

export default function InfoCard({ info }: InfoCardProps) {
	const Icon = info.icon;

	return (
		<div className="w-full md:w-[48%] p-8 bg-secondary rounded shadow-lg flex flex-row items-center">
			<div className="h-auto w-1/2 max-w-[80px] aspect-square">
				<Icon
					className="w-full h-full text-sunshine-gold"
					strokeWidth="1px"
				/>
			</div>
			<div className="ml-4">
				<h3 className="text-lg md:text-xl font-bold">{info.title}</h3>
				<div className="font-semibold text-sm md:text-lg border-l-2 pl-4">
					{info.body}
				</div>
			</div>
		</div>
	);
}
