import { configureStore } from "@reduxjs/toolkit";
import { concertSlice, authSlice, reservationSlice } from "../features";

const store = configureStore({
	reducer: {
		auth: authSlice,
		concert: concertSlice,
		reservation: reservationSlice,
	},
});

export default store;
