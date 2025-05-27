import useResize from '../hooks/useResize';
import MobileNav from './MobileNav';
import { useState } from 'react';

const Navs = [
	{
		text: 'About Us',
		subtext: '关于我们',
		link: '#about',
	},
	{
		text: 'Admission Information',
		subtext: '招生信息',
		link: '#admission',
	},
	{
		text: 'Our Advantages',
		subtext: '幼儿园优势',
		link: '#advantages',
	},
	{
		text: 'Course Highlights',
		subtext: '课程亮点',
		link: '#curriculum',
	},
];

function NavLinks({ setOpen }: { setOpen?: (arg: boolean) => void }) {
	const scrollTo = (link: string) => {
		const target = document.querySelector(link);

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			setOpen?.(false);
		}
	};

	return (
		<>
			{Navs.map((nav) => {
				return (
					<button
						onClick={() => scrollTo(nav.link)}
						key={nav.link}
						className="hover:text-sunshine-gold cursor-pointer text-left font-semibold relative text-nowrap"
					>
						{nav.text}{' '}
						<span className="absolute pl-2 md:pl-0 md:w-full md:left-0 md:translate-y-[80%]">
							{nav.subtext}
						</span>
					</button>
				);
			})}
		</>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const resize = useResize();

	return (
		<nav className="flex items-center relative z-20 py-8 px-[5%] xl:px-[10%] min-h-10">
			<a
				href="/"
				className="z-20 font-semibold flex items-center"
			>
				<img
					src="/appleseed-logo.png"
					alt="appleseed logo"
					className="h-30"
				/>
				<div className="text-3xl text-nowrap">
					Apple Seed 幼儿园
					<div className="text-xs">
						<p>小种子，大梦想</p>
						<p> Little Seeds, Big Dreams!</p>
					</div>
				</div>
			</a>
			{resize && (
				<div className="ml-auto hidden flex-row gap-6 xl:flex">
					<NavLinks />
				</div>
			)}
			{!resize && (
				<MobileNav
					open={open}
					setOpen={setOpen}
				>
					<NavLinks setOpen={setOpen} />
				</MobileNav>
			)}
		</nav>
	);
}
