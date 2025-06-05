import { Images } from '../data/Gallery';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function GalleryPage() {
	const [selected, setSelected] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = ({ index }: { index: number }) => {
		console.log(index, Images[index]);
		setSelected(Images[index].src);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<main className="background-main">
			<div className="px-[5%] xl:px-[10%] pb-10 min-h-[80vh]">
				<h1 className="text-3xl font-bold py-10 text-center">
					Our Photo Gallery
				</h1>
				<div>
					<RowsPhotoAlbum
						photos={Images}
						onClick={handleClick}
						rowConstraints={{ maxPhotos: 4 }}
					/>
				</div>
			</div>
			{selected && isOpen ? (
				<Modal
					isOpen={isOpen}
					onClose={handleClose}
				>
					<img src={selected} />
				</Modal>
			) : null}
		</main>
	);
}
