import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './pages/signIn/loginSlice';
import { userSlice } from './pages/user/profileSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
