import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { SwiperPrevButtonProps } from '../model/model.types';

const SwiperPrevButton = ({ swiper, disablePrevButton }) => (
  <button
    type="button"
    className={`swiper-btn swiper-button-prev swiper-button-disabled top-[50%] left-0 rounded-tr-full rounded-br-full justify-end ${
		  disablePrevButton ? 'bg-[#efefef]' : 'bg-primaryGreen'
    }`}
    disabled={disablePrevButton}
    onClick={() => swiper?.slidePrev()}
  >
    <BsCaretLeft className="text-white" />
  </button>
);

SwiperPrevButton.propTypes = SwiperPrevButtonProps;

export default SwiperPrevButton;
