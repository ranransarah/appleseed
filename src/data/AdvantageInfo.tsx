import type { Info } from './base';

export type AdvantageInfo = Info & {
	image: string;
};

export const AdvantageInfo: AdvantageInfo[] = [
	{
		title: '师资优良 | Caring Teachers',
		body: (
			<>
				<p>我们的教师团队经验丰富、富有爱心，悉心照料每一位幼儿。</p>
				<p>
					Our teaching team is experienced, loving, and attentive to every
					child.
				</p>
			</>
		),
		image: '/gabe-pierce-mLqWFEtlIEs-unsplash.jpg',
	},
	{
		title: '环境安全温馨 | Safe Environment',
		body: (
			<>
				<p>
					校园干净安全，教室明亮、设施齐全，为孩子营造如家般温馨的成长环境。
				</p>
				<p>
					A clean, secure campus with bright, well-equipped classrooms creates a
					warm, home-like atmosphere for children.
				</p>
			</>
		),
		image: '/gautam-arora-OVDtgUhUPBY-unsplash.jpg',
	},
	{
		title: '双语环境 | Bilingual Immersion',
		body: (
			<>
				<p>中外教师结合营造浸润式英语环境，让孩子轻松习得第二语言。</p>
				<p>
					Chinese and foreign teachers create an immersive English environment
					where children naturally acquire a second language.
				</p>
			</>
		),
		image: '/element5-digital-OyCl7Y4y0Bk-unsplash.jpg',
	},
	{
		title: '个性化关怀 | Individualized Care',
		body: (
			<>
				<p>采用小班教学，根据每个孩子的特点因材施教，关注每位幼儿的成长。</p>
				<p>
					Small class sizes enable tailored teaching to each child's needs,
					ensuring everyone receives personal attention.
				</p>
			</>
		),
		image: '/jerry-wang-jfnUC7s3iuw-unsplash.jpg',
	},
];
