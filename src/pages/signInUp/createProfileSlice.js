import { createSlice } from '@reduxjs/toolkit';

//Initial user state
const initialState = {
  isLoading: false,
  isCreated: false,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  id: '',
  error: null,
};

//User slices
const createUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserPending: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, action) => {
      state.isCreated = true;
      state.email = action.payload.body?.email;
      state.firstName = action.payload.body?.firstName;
      state.lastName = action.payload.body?.lastName;
      state.password = action.payload.body?.password;
      state.id = action.payload.body?.id;
      state.error = null;
      state.isLoading = false;
    },
    createUserFail: (state, action) => {
      state.isCreated = false;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.password = null;
      state.id = null;
      state.error = action.payload.message;
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

export default createUserSlice;
