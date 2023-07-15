import { configureStore } from "@reduxjs/toolkit";
import { concertSlice } from "../features";

export const store = configureStore({
	reducer: {
		concert: concertSlice,
	},
});
