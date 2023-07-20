import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import {
  CustomSwiperSlide,
  SwiperNextButton,
  SwiperPrevButton,
  LatestConcertLoader,
} from '../../../components';
import { concertSelector } from '../../storeSlice/concertSlice';

const ConcertSliderList = () => {
  const [swiperInstance, setSwiperInstance] = useState();
  const [disablePrevButton, setDisablePrevButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [screenWidth, setScreenWidth] = useState('large');
  const { latestConcerts } = useSelector(concertSelector);

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
    if (screenWidth === 'xsmall') {
      return 1;
    }
    if (screenWidth === 'small') {
      return 1;
    }
    if (screenWidth === 'medium') {
      return 2;
    }
    return 3;
  };

  useEffect(() => {
    // check screen sizes
    if (window.innerWidth < 320) {
      setScreenWidth('xsmall');
    } else if (window.innerWidth >= 320 && window.innerWidth < 640) {
      setScreenWidth('small');
    } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      setScreenWidth('medium');
    } else {
      setScreenWidth('large');
    }
  }, []);

  return (
    <div className="relative w-full gap-5 mt-10 concert-swiper-container">
      <SwiperPrevButton swiper={swiperInstance} disablePrevButton={disablePrevButton} />
      <SwiperNextButton swiper={swiperInstance} disableNextButton={disableNextButton} />

      <div className="flex items-center justify-center swiper-wrapper w-full md:!w-[70%] lg:!w-[70%] xl:!w-[70%] mx-auto">
        {latestConcerts.length ? (
          <Swiper
            spaceBetween={40}
            slidesPerView={toggleSlidesPerView()}
            onSlideChange={(e) => slideChange(e)}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {latestConcerts.map((concert) => (
              <SwiperSlide key={concert.id}>
                <CustomSwiperSlide concert={concert} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <LatestConcertLoader />
        )}
      </div>
    </div>
  );
};

export default ConcertSliderList;