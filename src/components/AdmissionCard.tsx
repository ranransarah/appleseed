import type { AdmissionInfo } from '../data/AdmissionInfo';

interface InfoCardProps {
	info: AdmissionInfo;
}

export default function InfoCard({ info }: InfoCardProps) {
	const Icon = info.icon;

	return (
		<div className="w-full md:w-[48%] p-8 bg-secondary rounded shadow-lg flex flex-row items-center">
			<Icon
				className="text-sunshine-gold font-semibold w-auto h-[100%] aspect-square"
				strokeWidth="1px"
			/>
			<div className="ml-4">
				<h3 className="text-xl font-bold">{info.title}</h3>
				<div className="font-semibold text-lg border-l-2 pl-4">{info.body}</div>
			</div>
		</div>
	);
}
