import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TbCalendarCheck } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { confirmDialog } from 'primereact/confirmdialog';
import { ReserveConcertDialogProp } from '../model/model.types';
import { authSelector, toggleLoading, setErrors } from '../features/storeSlice/authSlice';
import { ErrorMessage } from '.';
import { reserveConcert } from '../services/services';
import useFetchReservations from '../hooks/useFetchReservations';

const ReserveConcertDialog = ({
  visible, setVisible, concert, fetchConcertDetails,
}) => {
  const dispatch = useDispatch();

  const [fetchReservations] = useFetchReservations();

  const { currentUser, loading } = useSelector(authSelector);

  const [initialForm, _] = useState({
    user_id: currentUser?.id,
    concert_hall_id: null,
  });

  const form = useForm({
    defaultValues: initialForm,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = form;
  const confirmReservation = (formData) => {
    confirmDialog({
      message: 'Are you sure you want book this concert?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-primary',
      accept: () => {
        dispatch(toggleLoading(true));
        reserveConcert(formData)
          .then((response) => {
            dispatch(toggleLoading(false));
            setVisible(false);
            reset();
            toast.success(response.message, {
              position: 'top-center',
              duration: 4000,
            });
            fetchConcertDetails();
            fetchReservations();
          })
          .catch((error) => {
            dispatch(toggleLoading(false));
            dispatch(setErrors(error.response.data));
          });
      },
    });
  };

  const onSubmit = (formData) => {
    confirmReservation(formData);
  };

  const formatHallName = (hall) => `${hall.city_name} - ${hall.hall_name} on ${format(new Date(hall.date), 'PPpp')}`;

  const renderIcon = () => <TbCalendarCheck className="mr-1" />;

  const showLoadingIndicator = () => (
    <>
      <svg
        aria-hidden="true"
        role="status"
        className="inline w-4 h-4 mr-3 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Loading...
    </>
  );

  const footerContent = () => (
    <div className="flex justify-end">
      <Button
        type="button"
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        disabled={loading}
        icon={loading || renderIcon()}
        label={loading ? showLoadingIndicator() : 'Reserve'}
        type="submit"
        className="border bg-primaryGreen border-primaryGreen hover:!bg-lime-600 hover:!border-lime-600"
        autoFocus
      />
    </div>
  );

  const errorBorder = (field) => {
    if (errors && errors[field]) {
      return '!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700';
    }
    return 'border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen';
  };

  return (
    <>
      <Dialog
        header="Make a Reservation"
        visible={visible}
        position="bottom"
        className="w-[100vw] sm:w-[100vw] md:w-[40vw] lg:w-[30vw]"
        onHide={setVisible}
        draggable={false}
        resizable={false}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group">
              <label
                htmlFor="concert_hall_id"
                className="block mb-2 text-sm font-medium text-left text-gray-900"
              >
                Select Concert Hall / City / Time
              </label>
              <select
                id="concert_hall_id"
                className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
								  'concert_hall_id',
                )}`}
                {...register('concert_hall_id', {
								  required: 'Choose a city & concert hall',
                })}
              >
                {concert.concert_halls.map((hall) => (
                  <React.Fragment key={hall.id}>
                    <option value={hall.id}>{formatHallName(hall)}</option>
                  </React.Fragment>
                ))}
              </select>

              <ErrorMessage error={errors} field="concert_hall_id" />
            </div>

            {footerContent()}
          </form>
        </div>
      </Dialog>
    </>
  );
};

ReserveConcertDialog.propTypes = ReserveConcertDialogProp;

export default ReserveConcertDialog;
