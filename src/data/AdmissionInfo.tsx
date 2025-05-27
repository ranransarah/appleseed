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
				<p>2-6岁</p>
				<p>2-6 years old</p>
			</>
		),
		icon: Cake,
	},
	{
		title: '开学时间 | Start Date',
		body: (
			<>
				<p>2025年9月 (秋季班)</p>
				<p>September 2025 (Fall term)</p>
			</>
		),
		icon: Calendar,
	},
	{
		title: '上课时间 | Class Time',
		body: (
			<>
				<p>周一至周五 8:30-16:30</p>
				<p>Monday to Friday, 8:30 am - 4:30 pm</p>
			</>
		),
		icon: AlarmClock,
	},
	{
		title: '班级规模 | Class Size',
		body: (
			<>
				<p>小班制, 每班不超过20人</p>
				<p>Small classes, no more than 20 children per class</p>
			</>
		),
		icon: School,
	},
];
