import AdmissionCard from '../components/AdmissionCard';
import { AdmissionInfo } from '../data/AdmissionInfo';

export default function Admission() {
	return (
		<section className="px-[5%] w-full py-20">
			<div className="max-w-[1440px] mx-auto">
				<h2 className="text-3xl font-bold mb-16 text-center">
					招生信息 | Admission Information
				</h2>
				<div className="flex flex-wrap justify-between w-full gap-4">
					{AdmissionInfo.map((info) => (
						<AdmissionCard
							key={info.title}
							info={info}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
