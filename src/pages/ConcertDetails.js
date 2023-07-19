import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { ConcertTableDetails, BackButton, MenuButton, ReserveConcertDialog } from "../components";

const ConcertDetails = () => {
  const { id } = useParams();
  const [selectedConcert, setSelectedConcert] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/concerts/${id}`)
      .then(response => response.json())
      .then(data => setSelectedConcert(data))
      .catch(error => console.error('Error fetching concert details:', error));
  }, [id]);

  // Show loading or handle not found scenarios
  if (!selectedConcert) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen px-5 md:px-10 relative">
      <section className="flex flex-col md:flex-row items-start md:items-center justify-start h-full gap-y-2 py-2 md:justify-center md:py-0">
        <MenuButton></MenuButton>
        <div className="flex flex-col sm:flex-col lg:flex-row items-start justify-start w-full gap-5 lg:gap-14">
          <div className="concert-image-container w-full lg:w-[70%]">
            <img src={selectedConcert.image} width="100%" alt="concert-image" />
          </div>
          <div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
            <h3 className="font-bold text-center lg:text-right">{selectedConcert.name}</h3>
            <p className="text-xs font-semibold text-center lg:text-right mt-1">
              {selectedConcert.description}
            </p>

            <section className="mt-7">
              <ConcertTableDetails concert={selectedConcert} />
            </section>

            <section className="action flex justify-center lg:justify-end mt-5 md:mt-10 lg:mt-20">
              <Button className="bg-primaryGreen py-[0.4rem] hover:!bg-lime-600" pill>
                <TbCalendarPlus className="mr-2 h-6 w-6"></TbCalendarPlus>
                <p className="text-[0.79rem]">Reserve Concert</p>
                <PiCaretCircleRightLight className="ml-3 h-5 w-5" />
              </Button>
            </section>
          </div>
        </div>
      </section>

      <BackButton></BackButton>
    </div>
  );
};

export default ConcertDetails;
