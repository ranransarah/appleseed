interface Props {
	open: boolean;
	setOpen: (arg: boolean) => void;
	children?: React.ReactNode;
}

const MobileNav = ({ open, setOpen, children }: Props) => {
	return (
		<>
			<div
				className={`absolute left-0 z-10 flex w-full flex-col gap-2 p-4 transition-all xl:hidden bg-white ${
					open ? 'top-[100%]' : 'top-[-250%]'
				}`}
			>
				{children}
			</div>
			<button
				onClick={() => setOpen(!open)}
				className="ml-auto flex aspect-square w-[20px] flex-col justify-evenly overflow-hidden xl:hidden"
			>
				<div className={`bar ${open ? 'active-first' : ''}`}></div>
				<div className={`bar ${open ? 'active-middle' : ''}`}></div>
				<div className={`bar ${open ? 'active-last' : ''}`}></div>
			</button>
		</>
	);
};

export default MobileNav;
