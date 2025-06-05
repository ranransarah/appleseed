export default function Contact() {
	return (
		<main className="background-main">
			<div className="px-[5%] xl:px-[10%] py-10 min-h-[80vh] flex flex-col items-center">
				<h1 className="text-3xl font-bold mb-20">Contact Information</h1>
				<div className="w-full flex lg:flex-row flex-col items-center justify-center gap-8">
					<div className="w-full lg:w-[45%] px-8 flex flex-col gap-2 text-3xl shadow-lg p-8 bg-white">
						<h4 className="font-bold mb-4">地址 | Address</h4>
						<address className="not-italic">
							9907 Lousada Dr,
							<br />
							Elk Grove, CA 95757, United States
						</address>
						<a href="tel:+14083100602">+1 (408) 310-0602</a>
					</div>
					<div className="w-full lg:w-[45%] border-0 shadow-lg relative">
						<div className="absolute top-4 left-4 text-3xl font-bold">
							WeChat:
						</div>
						<img
							src="/wechat.jpg"
							alt="wechat qrcode"
							className="h-full"
						/>
					</div>
				</div>
				<iframe
					title="Google Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.578013663946!2d-121.42288552417973!3d38.39436427597747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac18b3f453cd7%3A0xf899c23bc5c5ad83!2s9907%20Lousada%20Dr%2C%20Elk%20Grove%2C%20CA%2095757!5e0!3m2!1sen!2sus!4v1717541598245!5m2!1sen!2sus"
					width="100%"
					height="100%"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full aspect-video border-0 shadow-lg mt-4"
				></iframe>
			</div>
		</main>
	);
}
