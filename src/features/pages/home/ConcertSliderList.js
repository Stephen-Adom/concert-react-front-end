import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomSwiperSlide, SwiperNextButton, SwiperPrevButton } from "../../../components";

const ConcertSliderList = () => {
	const [swiperInstance, setSwiperInstance] = useState();
	const [disablePrevButton, setDisablePrevButton] = useState(true);
	const [disableNextButton, setDisableNextButton] = useState(false);
	const [screenWidth, setScreenWidth] = useState("large");

	const slideChange = (e) => {
		if (e?.isBeginning) {
			setDisablePrevButton(true);
		} else {
			setDisablePrevButton(false);
		}

		if (e?.isEnd) {
			setDisableNextButton(true);
		} else {
			setDisableNextButton(false);
		}
	};

	const toggleSlidesPerView = () => {
		if (screenWidth === "xsmall") {
			return 1;
		} else if (screenWidth === "small") {
			return 1;
		} else if (screenWidth === "medium") {
			return 2;
		} else {
			return 3;
		}
	};

	useEffect(() => {
		// check screen sizes
		if (window.innerWidth < 320) {
			setScreenWidth("xsmall");
		} else if (window.innerWidth >= 320 && window.innerWidth < 640) {
			setScreenWidth("small");
		} else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
			setScreenWidth("medium");
		} else {
			setScreenWidth("large");
		}
	}, []);

	return (
		<div className="relative w-full gap-5 mt-10 concert-swiper-container">
			<SwiperPrevButton
				swiper={swiperInstance}
				disablePrevButton={disablePrevButton}
			></SwiperPrevButton>
			<SwiperNextButton
				swiper={swiperInstance}
				disableNextButton={disableNextButton}
			></SwiperNextButton>

			<div className="flex items-center justify-center swiper-wrapper w-full md:!w-[70%] lg:!w-[70%] xl:!w-[70%] mx-auto">
				<Swiper
					spaceBetween={40}
					slidesPerView={toggleSlidesPerView()}
					onSlideChange={(e) => slideChange(e)}
					onSwiper={(swiper) => setSwiperInstance(swiper)}
				>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
					<SwiperSlide>
						<CustomSwiperSlide></CustomSwiperSlide>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default ConcertSliderList;
