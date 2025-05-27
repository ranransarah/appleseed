import { useState, useCallback, useEffect } from 'react';

const useResize = () => {
	const [size, setSize] = useState(window.innerWidth >= 1280);

	const handleResize = useCallback(() => {
		if (window.innerWidth >= 1280) {
			setSize(true);
		} else {
			setSize(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return size;
};

export default useResize;
