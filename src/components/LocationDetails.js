import React, { useCallback } from 'react';
import { BiMap } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { LocationDetailsProp } from '../model/model.types';
import { reservationSelector } from '../features/storeSlice/reservationSlice';

const LocationDetails = ({ hall }) => {
  const { allReservations } = useSelector(reservationSelector);
  const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const checkIfReserved = useCallback(() => {
    if (allReservations.length) {
      const reservationExist = allReservations.find(
        (reservation) => reservation.hall_name === hall.hall_name,
      );
      if (reservationExist) {
        return (
          <span
            data-testid="reservedBadge"
            className="bg-lime-100 text-lime-700 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
          >
            <BsCheckAll className="text-lg" />
            Reserved
          </span>
        );
      }
    }

    return null;
  }, [allReservations]);

  return (
    <div className="max-w-sm px-4 py-4 pt-2 bg-white border border-gray-200 rounded-sm hover:shadow hover:cursor-pointer">
      <div className="flex items-center justify-between mb-1">
        <h5 className="text-sm font-bold tracking-tight text-gray-900 md:text-base">
          {hall.city_name}
        </h5>

        {checkIfReserved()}
      </div>

      <hr />

      <div className="flex flex-col">
        <p className="flex items-center gap-1 my-1 text-sm text-gray-700">
          <BiMap className="text-primaryGreen" />
          <span data-testid="hallname">{hall.hall_name}</span>
        </p>

        <p className="text-sm text-gray-700">
          <span className="block" data-testid="seats">
            Total Seats:
            {numberWithCommas(hall.total_seats)}
          </span>
          <span className="block" data-testid="reserved">
            Reserved:
            {numberWithCommas(hall.reserved_seats)}
          </span>
        </p>
      </div>
    </div>
  );
};

LocationDetails.propTypes = LocationDetailsProp;

export default LocationDetails;
