import type { Info } from './base';

export type CurriculumInfo = Info & {
	icon: string;
};

export const CurriculumInfo: CurriculumInfo[] = [
	{
		title: '因龄施教 | Education by Age',
		body: (
			<>
				<p>
					根据孩子年龄段提供适宜的课程与活动，让每个阶段的孩子都能快乐成长。
				</p>
				<p>
					We provide age-appropriate activities and curriculum so that children
					at each stage can grow happily.
				</p>
			</>
		),
		icon: '/icons/target.png',
	},
	{
		title: '语言启蒙 | Language Immersion',
		body: (
			<>
				<p>
					中英文双语环境搭配有趣的语言游戏，让孩子自然爱上语言，增强表达能力。
				</p>
				<p>
					A Chinese-English bilingual environment, combined with fun language
					games, helps children develop a love for language and improve their
					communication skills.
				</p>
			</>
		),
		icon: '/icons/language.png',
	},
	{
		title: '艺术课程 | Art Curriculum',
		body: (
			<>
				<p>通过绘画、手工、音乐等多彩艺术活动，激发孩子的创造力和审美情趣。</p>
				<p>
					Through colorful artistic activities such as painting, crafts, and
					music, we inspire children's creativity and aesthetic appreciation.
				</p>
			</>
		),
		icon: '/icons/art.png',
	},
	{
		title: 'STEAM科学 | STEAM Exploration',
		body: (
			<>
				<p>有趣的科学小实验和探索活动，培养孩子的好奇心和逻辑思维。</p>
				<p>
					Fun experiments and hands-on activities cultivate children's curiosity
					and logical thinking skills.
				</p>
			</>
		),
		icon: '/icons/microscope.png',
	},
	{
		title: '体能活动 | Physical Play',
		body: (
			<>
				<p>每天户外游戏和体育活动，强健体魄，促进孩子的运动协调发展。</p>
				<p>
					Daily outdoor games and sports activities strengthen the body and
					improve children's motor skills and coordination.
				</p>
			</>
		),
		icon: '/icons/running.png',
	},
	{
		title: '生活习惯培养 | Life Skills',
		body: (
			<>
				<p>
					注重培养孩子良好的生活习惯，如自理、礼貌与合作，让孩子学会独立与分享。
				</p>
				<p>
					We emphasize developing good habits such as self-care, courtesy, and
					cooperation, helping children learn independence and sharing.
				</p>
			</>
		),
		icon: '/icons/skill.png',
	},
];
