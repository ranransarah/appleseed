import { Link } from '@tanstack/react-router';

export default function Footer() {
	return (
		<footer className="px-[5%] xl:px-[10%] min-h-10 gap-10 flex flex-wrap items-center justify-between py-8">
			<div className="flex flex-col">
				<p className="text-lg font-semibold mb-2">Contact Us</p>
				<a href="tel:+14083100602">+1 (408) 310-0602</a>
				<p>9907 Lousada Dr, Elk Grove, CA 95757</p>
			</div>
			<div className="flex flex-col items-center">
				<p className="flex items-center font-bold">
					<svg
						width="21"
						height="21"
						viewBox="0 0 22 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5 text-inherit mr-2"
					>
						<path
							fill="currentColor"
							d="M14.8268 14.632C14.5228 14.76 13.4828 15.272 11.5788 15.272C8.89085 15.272 6.45885 13.288 6.45885 10.472C6.45885 7.656 8.87485 5.64 11.5788 5.64C13.3708 5.64 14.5068 6.136 14.8268 6.264V7.976C14.4748 7.8 13.2268 7.16 11.7868 7.16C9.94685 7.16 8.33085 8.52 8.33085 10.456C8.33085 12.36 9.86685 13.736 11.6588 13.736C13.2428 13.736 14.4588 13.096 14.8268 12.952V14.632Z"
						/>
						<path
							stroke="currentColor"
							d="M20.977 10.5C20.977 16.0302 16.5649 20.5 11.1385 20.5C5.71216 20.5 1.30005 16.0302 1.30005 10.5C1.30005 4.96982 5.71216 0.5 11.1385 0.5C16.5649 0.5 20.977 4.96982 20.977 10.5Z"
						/>
					</svg>
					Apple Seed Kindergarten
				</p>
				<div className="mt-2">
					<Link to="/privacy-policy">Privacy Policy</Link> |{' '}
					<Link to="/tos">Terms Of Use</Link>
				</div>
			</div>
		</footer>
	);
}
