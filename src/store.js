import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './pages/signInUp/loginSlice';
import userSlice from './pages/user/profileSlice';
import createUserSlice from './pages/signInUp/createProfileSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    user: userSlice.reducer,
    createUser: createUserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
