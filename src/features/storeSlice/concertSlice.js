import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const concertSlice = createSlice({
	name: "concert",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function

export default concertSlice.reducer;
