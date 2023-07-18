import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomSwiperSlide, SwiperNextButton, SwiperPrevButton } from '../../../components';

const ConcertSliderList = () => {
  const [concerts, setConcerts] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState();
  const [disablePrevButton, setDisablePrevButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [screenWidth, setScreenWidth] = useState('large');

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

  useEffect(() => {
    // Fetch concert data from API
    fetch('http://localhost:3000/api/v1/concerts')
      .then(response => response.json())
      .then(data => setConcerts(data))
      .catch(error => console.error('Error fetching concerts:', error));

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

  const toggleSlidesPerView = () => {
    if (screenWidth === 'xsmall') {
      return 1;
    } if (screenWidth === 'small') {
      return 1;
    } if (screenWidth === 'medium') {
      return 2;
    }
    return 3;
  };

  return (
    <div className="relative w-full gap-5 mt-10 concert-swiper-container">
      <SwiperPrevButton
        swiper={swiperInstance}
        disablePrevButton={disablePrevButton}
      />
      <SwiperNextButton
        swiper={swiperInstance}
        disableNextButton={disableNextButton}
      />

      <div className="flex items-center justify-center swiper-wrapper w-full md:!w-[70%] lg:!w-[70%] xl:!w-[70%] mx-auto">
        <Swiper
          spaceBetween={40}
          slidesPerView={toggleSlidesPerView()}
          onSlideChange={(e) => slideChange(e)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {concerts.map(concert => (
            <SwiperSlide key={concert.id}>
              <CustomSwiperSlide concert={concert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ConcertSliderList;
