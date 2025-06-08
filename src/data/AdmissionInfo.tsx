import {
	type LucideIcon,
	Cake,
	Calendar,
	School,
	AlarmClock,
} from 'lucide-react';
import type { Info } from './base';

export type AdmissionInfo = Info & {
	icon: LucideIcon;
};

export const AdmissionInfo: AdmissionInfo[] = [
	{
		title: '招生对象 | Age Group',
		body: (
			<>
				<p>0-4岁</p>
				<p>0-4 years old</p>
			</>
		),
		icon: Cake,
	},
	{
		title: '开学时间 | Start Date',
		body: (
			<>
				<p>全年招生，人数到达上限可签waitlist</p>
				<p>Year-round enrollment, waitlist available upon request</p>
			</>
		),
		icon: Calendar,
	},
	{
		title: '上课时间 | Class Time',
		body: (
			<>
				<p>周一至周五 8:00-16:00上下</p>
				<p>Monday to Friday, 8:00 am - 4:00 pm</p>
			</>
		),
		icon: AlarmClock,
	},
	{
		title: '班级规模 | Class Size',
		body: (
			<>
				<p>小班制, 每班不超过10人</p>
				<p>Small classes, no more than 10 children per class</p>
			</>
		),
		icon: School,
	},
];
