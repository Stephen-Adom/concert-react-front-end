import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allReservations: [],
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setAllReservations: (state, action) => {
      state.allReservations = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllReservations } = reservationSlice.actions;

export const reservationSelector = (state) => state.reservation;

export default reservationSlice.reducer;
