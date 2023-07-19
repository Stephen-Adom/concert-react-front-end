import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	latestConcerts: [],
	newConcertInfo: {
		concert_name: "",
		description: "",
		band: "",
		artist: "",
		image: "",
	},
	allConcerts: [],
	concertLocations: [],
	errors: null,
};

export const concertSlice = createSlice({
	name: "concert",
	initialState,
	reducers: {
		setAllConcerts: (state, action) => {
			state.allConcerts = action.payload;
		},
		saveLatestConcerts: (state, action) => {
			state.latestConcerts = action.payload;
		},
		setErrors: (state, action) => {
			state.errors = action.payload;
		},
		setNewConcertInfo: (state, action) => {
			state.newConcertInfo = action.payload;
		},
		setConcertLocations: (state, action) => {
			state.concertLocations = action.payload;
		},
		resetConcertForm: (state) => {
			state.newConcertInfo = {
				concert_name: "",
				description: "",
				band: "",
				artist: "",
				image: "",
			};
			state.concertLocations = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	saveLatestConcerts,
	setErrors,
	setNewConcertInfo,
	setConcertLocations,
	resetConcertForm,
	setAllConcerts,
} = concertSlice.actions;

export const concertSelector = (state) => state.concert;

export default concertSlice.reducer;
