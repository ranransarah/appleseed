import { Link } from '@tanstack/react-router';
import useResize from '../hooks/useResize';
import MobileNav from './MobileNav';
import { useState } from 'react';

const Navs = [
	{
		text: 'Home',
		subtext: '主页',
		link: '/',
	},
	{
		text: 'Our Program',
		subtext: '我们的课程',
		link: '/program',
	},
	{
		text: 'Photo Gallery',
		subtext: '照片集',
		link: '/photo-gallery',
	},
	{
		text: 'Contact',
		subtext: '联系我们',
		link: '/contact',
	},
];

function NavLinks({ setOpen }: { setOpen?: (arg: boolean) => void }) {
	return (
		<>
			{Navs.map((nav) => {
				return (
					<Link
						to={nav.link}
						key={nav.link}
						onClick={() => setOpen?.(false)}
						className="hover:text-sunshine-gold cursor-pointer text-left font-semibold relative text-nowrap"
					>
						{nav.text}{' '}
						<span className="absolute pl-2 md:pl-0 md:w-full md:left-0 md:translate-y-[80%]">
							{nav.subtext}
						</span>
					</Link>
				);
			})}
		</>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const resize = useResize();

	return (
		<nav className="flex items-center fixed bg-white w-full z-20 py-4 px-[5%] xl:px-[10%] min-h-10 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.3)]">
			<a
				href="/"
				className="z-20 font-semibold flex items-center"
			>
				<img
					src="/appleseed-logo.png"
					alt="appleseed logo"
					className="h-12 md:h-30 mr-2"
				/>
				<div className="text-lg md:text-3xl text-nowrap">
					Apple Seed 幼儿园
					<div className="text-[.5em]">
						<p>小种子，大梦想</p>
						<p> Little Seeds, Big Dreams!</p>
					</div>
				</div>
			</a>
			{resize && (
				<div className="ml-auto hidden flex-row gap-12 xl:flex">
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
