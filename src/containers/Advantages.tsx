import AdvantageCard from '../components/AdvantageCard';
import { AdvantageInfo } from '../data/AdvantageInfo';

export default function Advantages() {
	return (
		<section
			id="advantages"
			className="px-[5%] max-w-[1440px] py-20"
		>
			<h2 className="text-3xl font-bold mb-16 text-center">
				幼儿园优势 | Our Advantages
			</h2>
			<div className="flex flex-col">
				{AdvantageInfo.map((info, index) => (
					<AdvantageCard
						key={info.title}
						info={info}
						reverse={index % 2 === 0}
					/>
				))}
			</div>
		</section>
	);
}
