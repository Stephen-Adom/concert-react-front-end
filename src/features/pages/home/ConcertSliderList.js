import React from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { SwiperSlide } from "../../../components";

const ConcertSliderList = () => {
	return (
		<div className="relative w-full gap-5 mt-10 concert-swiper-container">
			<button
				type="button"
				className="swiper-btn  top-[50%] left-0  bg-[#efefef] rounded-tr-full rounded-br-full justify-end"
			>
				<BsCaretLeft className="text-white"></BsCaretLeft>
			</button>
			<button
				type="button"
				className="swiper-btn top-[50%] right-0 bg-primaryGreen rounded-tl-full rounded-bl-full  justify-start"
			>
				<BsCaretRight className="text-white"></BsCaretRight>
			</button>

			<div className="flex items-center justify-center gap-4 swiper-wrapper w-[70%] mx-auto">
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
			</div>
		</div>
	);
};

export default ConcertSliderList;
