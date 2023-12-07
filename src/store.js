import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './pages/signIn/loginSlice';
import { userSlice } from './pages/user/profileSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
