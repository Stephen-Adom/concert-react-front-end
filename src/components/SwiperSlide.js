import React from "react";

const SwiperSlide = () => {
	return (
		<div className="swiper-slide">
			<figure className="overflow-hidden rounded-full">
				<img src="https://picsum.photos/200/300" alt="" />
			</figure>

			<h3 className="mt-8 text-sm font-bold">VESPA C20</h3>

			<hr className="my-5 w-[50%] mx-auto h-0.5 border-t-0 bg-neutral-100 opacity-200 dark:opacity-50 border-dashed" />

			<p className="text-xs text-primaryGrey">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error magni dolorum, dignissimos
				quaerat consequuntur enim quis cum, neque debitis
			</p>
		</div>
	);
};

export default SwiperSlide;
