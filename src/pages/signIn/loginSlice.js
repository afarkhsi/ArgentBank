import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  isAuthentified: false,
  isRemember: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logPending: (state) => {
      state.isLoading = true;
    },
    logSuccess: (state, action) => {
      state.token = action.payload.body?.token;
      state.isAuthentified = true;
      state.isLoading = false;
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

// export const {
//   logOnLaoding,
//   logSucces,
//   logError,
//   logRemember,
//   logOut,
//   isToken,
// } = loginSlice;
