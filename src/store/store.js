import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { concertSlice } from "../features";

const store = configureStore({
  reducer: {
    users: userReducer,
    concert: concertSlice,
  },
});

export default store;
