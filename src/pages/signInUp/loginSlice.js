import { createSlice } from '@reduxjs/toolkit';

//Initial login state
const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  isAuthentified: false,
  isRemember: false,
  error: null,
};

//login slice
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logPending: (state) => {
      state.isLoading = true;
    },
    logSuccess: (state, action) => {
      state.token = action.payload?.body?.token;
      state.isAuthentified = true;
      state.isLoading = false;
      state.error = null;
    },
    logFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logRemember: (state, action) => {
      state.isRemember = action.payload;
    },

    logOut: (state) => {
      state.isAuthentified = false;
    },
    isToken: (state) => {
      state.isAuthentified = true;
    },
  },
});
