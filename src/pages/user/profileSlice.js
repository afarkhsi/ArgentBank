import { createSlice } from '@reduxjs/toolkit';

//Initial user state
const initialState = {
  isLoading: false,
  email: '',
  firstName: '',
  lastName: '',
  id: '',
  error: null,
};

//User slices
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, action) => {
      state.email = action.payload.body?.email;
      state.firstName = action.payload.body?.firstName;
      state.lastName = action.payload.body?.lastName;
      state.id = action.payload.body?.id;
      state.error = null;
      state.isLoading = false;
    },
    userFail: (state, action) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.error = action.payload.message;
    },
    userLogout: (state) => {
      state.email = null;
      state.firstName = '';
      state.lastName = '';
      state.id = '';
      state.error = null;
      state.isLoading = false;
    },
    userUpdateSuccess: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
    userUpdateFail: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
  },
});

// const { reducer, actions } = userSlice;
// export const {
//   userPending,
//   userSuccess,
//   userFail,
//   userLogout,
//   userUpdateSuccess,
//   userUpdateFail,
// } = actions;

export default userSlice;
