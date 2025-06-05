import { useEffect } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
	useEffect(() => {
		const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
		if (isOpen) document.addEventListener('keydown', onEsc);
		return () => document.removeEventListener('keydown', onEsc);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-h-[90vh] max-w-[1000px] overflow-hidden bg-white rounded shadow-xl">
				{children}
				<button
					onClick={onClose}
					className="absolute top-2 right-3 text-xl cursor-pointer z-20 text-black hover:scale-120"
					aria-label="Close"
				>
					<X strokeWidth={'3px'} />
				</button>
			</div>
		</div>
	);
}
