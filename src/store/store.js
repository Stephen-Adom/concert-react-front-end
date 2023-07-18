import { configureStore } from "@reduxjs/toolkit";
import { concertSlice, authSlice } from "../features";

const store = configureStore({
	reducer: {
		auth: authSlice,
		concert: concertSlice,
	},
});

export default store;
