import React from "react";

const ConcertDetails = () => {
	return (
		<div className="w-full h-screen px-10">
			<section className="flex flex-col sm:flex-col md:flex-row items-center justify-start gap-10 h-full py-10 md:justify-center md:py-0">
				<div className="concert-image-container w-[65%]">
					<img src="https://picsum.photos/500/300" width="100%" alt="concert-image" />
				</div>
				<div className="concert-details w-[35%]">
					<h3 className="font-bold text-right">CONCERT 1</h3>
					<p className="text-sm font-semibold text-right mt-1">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</section>
		</div>
	);
};

export default ConcertDetails;
