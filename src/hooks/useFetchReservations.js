import { useDispatch } from 'react-redux';
import { setAllReservations } from '../features/storeSlice/reservationSlice';
import { fetchAllUserReservations } from '../services/services';
import { setErrors } from '../features/storeSlice/authSlice';

const useFetchReservations = () => {
  const dispatch = useDispatch();
  const fetchReservations = () => {
    fetchAllUserReservations()
      .then((response) => {
        dispatch(setAllReservations(response.reservations));
      })
      .catch((error) => {
        dispatch(setErrors(error.response.data));
      });
  };
  return [fetchReservations];
};

export default useFetchReservations;
