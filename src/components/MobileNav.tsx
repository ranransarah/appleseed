interface Props {
	open: boolean;
	setOpen: (arg: boolean) => void;
	children?: React.ReactNode;
}

const MobileNav = ({ open, setOpen, children }: Props) => {
	return (
		<>
			<div
				className={`absolute left-0 z-10 flex w-full flex-col gap-8 px-8 pb-10  transition-all xl:hidden bg-white shadow-[0_10px_10px_-10px_rgba(0,0,0,0.3)] ${
					open ? 'top-[100%]' : 'top-[-300%]'
				}`}
			>
				{children}
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="ml-auto flex aspect-square w-[20px] md:w-[30px] flex-col justify-evenly overflow-hidden xl:hidden"
			>
				<div className={`bar ${open ? 'active-first' : ''}`}></div>
				<div className={`bar ${open ? 'active-middle' : ''}`}></div>
				<div className={`bar ${open ? 'active-last' : ''}`}></div>
			</button>
		</>
	);
};

export default MobileNav;
