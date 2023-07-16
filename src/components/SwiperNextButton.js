import React, { useEffect, useRef } from 'react';
import { useSwiper } from 'swiper/react';
import { BsCaretRight } from 'react-icons/bs';

const SwiperNextButton = ({ swiper, disableNextButton }) => (
  <button
    type="button"
    className={`swiper-btn top-[50%] right-0 rounded-tl-full rounded-bl-full  justify-start} ${
			  disableNextButton ? 'bg-[#efefef]' : 'bg-primaryGreen'
    }`}
    onClick={() => swiper?.slideNext()}
    disabled={disableNextButton}
		>
    <BsCaretRight className="text-white" />
  </button>
);

export default SwiperNextButton;
