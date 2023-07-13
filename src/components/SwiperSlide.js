import React from "react";
import { GiDrumKit } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";

const SwiperSlide = () => {
	return (
		<div className="swiper-slide hover:cursor-pointer p-[10px]">
			<figure className="overflow-hidden rounded-full">
				<img src="https://picsum.photos/200/300" width="100%" alt="" />
			</figure>

			<h3 className="mt-8 text-lg font-bold md:text-sm">VESPA C20</h3>

			<hr className="my-5 w-[50%] mx-auto h-0.5 border-t-0 bg-neutral-100 opacity-200 dark:opacity-50 border-dashed" />

			<p className="text-xs text-primaryGrey">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error magni dolorum, dignissimos
				quaerat consequuntur enim quis cum, neque debitis
			</p>

			<div className="flex items-center justify-center mt-4 additional-info gap-x-3">
				<span
					data-tooltip-target="tooltip-1"
					data-tooltip-placement="right"
					className="flex items-center justify-center w-8 h-8 border rounded-full border-primaryGrey"
				>
					<GiDrumKit className="text-primaryGrey"></GiDrumKit>

					<div
						id="tooltip-1"
						role="tooltip"
						className="absolute z-50 invisible inline-block px-3 py-2 text-xs font-medium duration-300 !bg-white border rounded-lg shadow-sm border-neutral-300 text-primaryDark tooltip"
					>
						Band Name
						<div className="border tooltip-arrow border-neutral-300" data-popper-arrow></div>
					</div>
				</span>
				<span
					data-tooltip-target="tooltip-2"
					data-tooltip-placement="right"
					className="flex items-center justify-center w-8 h-8 border rounded-full border-primaryGrey"
				>
					<CgUserList className="text-primaryGrey"></CgUserList>

					<div
						id="tooltip-2"
						role="tooltip"
						className="absolute z-50 invisible inline-block px-3 py-2 text-xs font-medium duration-300 !bg-white border rounded-lg shadow-sm border-neutral-300 text-primaryDark tooltip"
					>
						Artist Name
						<div className="border tooltip-arrow border-neutral-300" data-popper-arrow></div>
					</div>
				</span>
			</div>
		</div>
	);
};

export default SwiperSlide;
