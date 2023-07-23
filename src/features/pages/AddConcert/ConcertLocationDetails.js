import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { PiCaretCircleRightLight, PiCaretCircleLeftLight } from 'react-icons/pi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTrash3 } from 'react-icons/bs';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { concertSelector, setConcertLocations } from '../../storeSlice/concertSlice';
import { ErrorMessage } from '../../../components';
import { ConcertLocationDetailsProp } from '../../../model/model.types';

const ConcertLocationDetails = ({ setStep }) => {
  const dispatch = useDispatch();
  const { concertLocations } = useSelector(concertSelector);
  const cityNames = ['New York', 'Los Angeles', 'London', 'Paris', 'Tokyo', 'Sydney'];

  const [hallInfo] = useState({
    hall_name: '',
    city: '',
    seats_no: 0,
    event_date: '',
  });

  const form = useForm({
    defaultValues: {
      concert_halls: concertLocations.length ? concertLocations : [hallInfo],
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = form;

  const { fields, append, remove } = useFieldArray({ name: 'concert_halls', control });

  const errorBorder = (field, index) => {
    if (Object.keys(errors).length && errors?.concert_halls[index]?.[field]) {
      return '!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700';
    }
    return 'border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen';
  };

  const addNewHall = () => {
    append(hallInfo);
  };

  const onSubmit = (formData) => {
    dispatch(setConcertLocations(formData.concert_halls));
    setStep(3);
  };

  const stepBack = () => {
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex items-center justify-center gap-x-3 mb-7 md:mb-0">
        <span className="block text-sm" data-testid="pageTitle">
          Enter Location Details
        </span>
        <hr className="w-[80%] my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 hidden md:block" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hall Name
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Total Seats
              </th>
              <th scope="col" className="px-6 py-3">
                Event Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={field.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[200px]"
                >
                  <input
                    type="text"
                    id="hall_name"
                    className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50  ${errorBorder(
                      'hall_name',
                      index,
                    )}`}
                    placeholder="Main Town Hall"
                    required
                    {...register(`concert_halls.${index}.hall_name`, {
                      required: 'Enter Hall Name',
                    })}
                  />
                  <ErrorMessage
                    error={
                     Object.keys(errors).length
                     && errors?.concert_halls?.[index] !== undefined
                     && errors?.concert_halls?.[index]
                     }
                    field="hall_name"
                  />
                </th>
                <td className="px-6 py-4 min-w-[200px]">
                  <select
                    id="city"
                    className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50  ${errorBorder(
                      'city',
                      index,
                    )}`}
                    {...register(`concert_halls.${index}.city`, {
                      required: 'Select City',
                    })}
                  >
                    {cityNames.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ErrorMessage
                    error={
                     Object.keys(errors).length
                     && errors?.concert_halls?.[index] !== undefined
                     && errors?.concert_halls?.[index]
                     }
                    field="city"
                  />
                </td>
                <td className="px-6 py-4 min-w-[200px]">
                  <section>
                    <input
                      type="number"
                      id="seats_no"
                      className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
                        'seats_no',
                        index,
                      )}`}
                      placeholder="000"
                      {...register(`concert_halls.${index}.seats_no`, {
                        required: 'Enter seat number',
                        valueAsNumber: true,
                        min: {
                          value: 5,
                          message: 'Enter at least 5 seats',
                        },
                      })}
                    />
                    <ErrorMessage
                      error={
                       Object.keys(errors).length
                       && errors?.concert_halls?.[index] !== undefined
                       && errors?.concert_halls?.[index]
                       }
                      field="seats_no"
                    />
                  </section>
                </td>

                <td className="px-6 py-4">
                  <input
                    type="datetime-local"
                    className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50  ${errorBorder(
                      'event_date',
                      index,
                    )}`}
                    data-testid="datetime"
                    placeholder="Select date"
                    {...register(`concert_halls.${index}.event_date`, {
                      required: 'Select Date and time',
                    })}
                  />
                  <ErrorMessage
                    error={
                      Object.keys(errors).length
                      && errors?.concert_halls?.[index] !== undefined
                      && errors?.concert_halls?.[index]
                      }
                    field="event_date"
                  />
                </td>
                <td className="px-6 py-4">
                  {index > 0 && (
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-red-600 btn hover:underline"
                    onClick={() => remove(index)}
                  >
                    <BsTrash3 className="text-base" />
                    Remove
                  </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-3">
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-medium btn text-lime-600"
            onClick={addNewHall}
          >
            <AiOutlinePlusCircle className="text-lg" />
            Add New Hall
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 form-group gap-x-4">
        <Button
          className="bg-primaryGrey py-[0.3rem] hover:!bg-neutral-400 px-4"
          pill
          onClick={() => stepBack()}
        >
          <PiCaretCircleLeftLight className="w-6 h-6 mr-3" />
          <p className="text-[0.79rem]">Back</p>
        </Button>

        <Button type="submit" className="bg-primaryGreen py-[0.3rem] hover:!bg-lime-600 px-4" pill>
          <p className="text-[0.79rem]">Continue</p>
          <PiCaretCircleRightLight className="w-6 h-6 ml-3" />
        </Button>
      </div>
    </form>
  );
};

ConcertLocationDetails.propTypes = ConcertLocationDetailsProp;

export default ConcertLocationDetails;
