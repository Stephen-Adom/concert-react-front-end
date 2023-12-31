import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { PiCaretCircleRightLight } from 'react-icons/pi';
import { TbCalendarPlus } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ConcertTableDetails,
  BackButton,
  MenuButton,
  ReserveConcertDialog,
  LocationDetails,
  ConcertDetailLoader,
} from '../components';
import { setErrors } from '../features/storeSlice/authSlice';
import { fetchConcert } from '../services/services';

const ConcertDetails = () => {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const fetchConcertDetails = () => {
    fetchConcert(id)
      .then((response) => {
        setConcert(response);
      })
      .catch((error) => {
        dispatch(setErrors(error.response.data));
      });
  };

  useEffect(() => {
    if (id) {
      fetchConcertDetails();
    }
  }, [id]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen px-5 md:px-10">
      {concert ? (
        <>
          <section className="flex flex-col items-start justify-start w-full h-full py-2 md:flex-row md:items-center gap-y-2 md:justify-center md:py-0">
            <MenuButton />
            <div className="flex flex-col items-start justify-start w-full gap-5 sm:flex-col lg:flex-row lg:gap-10">
              <div className="concert-image-container w-full lg:w-[70%]">
                <div
                  style={{ backgroundImage: `url(${concert.image})` }}
                  className="image-container w-full h-[250px] sm:h-[250px] md:h-[530px] lg:h-[530px] xl:h-[540px] bg-center bg-no-repeat"
                />
              </div>
              <div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
                <h3 className="font-bold text-center lg:text-right">{concert.name}</h3>
                <p className="mt-1 text-xs font-semibold text-center lg:text-right">
                  {concert.description}
                </p>

                <section className="mt-7">
                  <ConcertTableDetails concert={concert} />
                </section>

                <section className="mt-5">
                  <p className="mt-1 text-sm font-semibold text-center lg:text-right">
                    Location Details
                  </p>

                  {concert.concert_halls.length && (
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {concert.concert_halls.map((hall) => (
                      <React.Fragment key={hall.id}>
                        <LocationDetails hall={hall} />
                      </React.Fragment>
                    ))}
                  </div>
                  )}
                </section>

                <section className="flex justify-center mt-5 action lg:justify-end md:mt-10 lg:mt-20">
                  <Button
                    className="bg-primaryGreen py-[0.4rem] hover:!bg-lime-600"
                    pill
                    onClick={() => setVisible(true)}
                  >
                    <TbCalendarPlus className="w-6 h-6 mr-2" />
                    <p className="text-[0.79rem]">Reserve Concert</p>
                    <PiCaretCircleRightLight className="w-5 h-5 ml-3" />
                  </Button>
                </section>
              </div>
            </div>
          </section>

          <BackButton />
          <ReserveConcertDialog
            visible={visible}
            setVisible={setVisible}
            concert={concert}
            fetchConcertDetails={fetchConcertDetails}
          />
        </>
      ) : (
        <ConcertDetailLoader />
      )}
    </div>
  );
};

export default ConcertDetails;
