import React from "react";
import { BsCaretRight } from "react-icons/bs";
import { SwiperNextButtonProps } from "../model/model.types";

const SwiperNextButton = ({ swiper, disableNextButton }) => (
	<button
		type="button"
		className={`swiper-btn top-[50%] right-0 rounded-tl-full rounded-bl-full  justify-start} ${
			disableNextButton ? "bg-[#efefef]" : "bg-primaryGreen"
		}`}
		onClick={() => swiper?.slideNext()}
		disabled={disableNextButton}
	>
		<BsCaretRight className="text-white" />
	</button>
);

SwiperNextButton.propTypes = SwiperNextButtonProps;

export default SwiperNextButton;
