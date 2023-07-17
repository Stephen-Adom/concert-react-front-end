import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	loggedIn: false,
	error: null,
	loading: false,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		setAuthToken: (state, action) => {
			state.token = action.payload;
			state.error = null;
		},
		toggleLoading: (state, action) => {
			state.loading = action.payload;
		},
		setErrors: (state, action) => {
			console.log(action, "from slice");
			state.error = action.payload;
		},
	},
});

export const { toggleLoading, setErrors, setAuthToken, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
