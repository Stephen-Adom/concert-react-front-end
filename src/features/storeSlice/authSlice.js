import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
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
      state.error = action.payload;
    },
    clearStore: (state) => {
      state.currentUser = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  toggleLoading, setErrors, setAuthToken, setCurrentUser, clearStore,
} = authSlice.actions;

export const authSelector = (state) => state.auth;

export default authSlice.reducer;
