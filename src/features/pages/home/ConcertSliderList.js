import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomSwiperSlide, SwiperNextButton, SwiperPrevButton } from "../../../components";

const ConcertSliderList = () => {
	const [swiperInstance, setSwiperInstance] = useState();
	const [disablePrevButton, setDisablePrevButton] = useState(true);
	const [disableNextButton, setDisableNextButton] = useState(false);

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

			<div className="flex items-center justify-center swiper-wrapper w-[70%] mx-auto">
				<Swiper
					spaceBetween={40}
					slidesPerView={3}
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
