import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	latestConcerts: [],
	errors: null,
};

export const concertSlice = createSlice({
	name: "concert",
	initialState,
	reducers: {
		saveLatestConcerts: (state, action) => {
			state.latestConcerts = action.payload;
		},
		setErrors: (state, action) => {
			state.errors = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { saveLatestConcerts, setErrors } = concertSlice.actions;

export const concertSelector = (state) => state.concert;

export default concertSlice.reducer;
