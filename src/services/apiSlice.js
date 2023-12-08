// import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
//   endpoints: (builder) => ({
//     urlLogin: builder.query({
//       query: () => '/user/login',
//       // method: 'POST',
//     }),
//     urlSignup: builder.query({
//       query: () => '/user/signup',
//       method: 'POST',
//     }),
//     urlProfile: builder.query({
//       query: () => '/user/profile',
//       method: 'POST',
//     }),
//     updateProfile: builder.mutation({
//       query: (post) => ({
//         url: '/user/profile',
//         method: 'PATCH',
//         body: post,
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginQuery,
//   useSignupQuery,
//   useProfileQuery,
//   useUpdateQuery,
// } = apiSlice;

import axios from 'axios';
import { loginSlice } from '../pages/signIn/loginSlice';
import { userSlice } from '../pages/user/profileSlice';

const BASE_URL = 'http://localhost:3001/api/v1';
export const LOGIN_URL = BASE_URL + '/user/login';

// const login = (email, password, rememberMe) => (dispatch) => {
//   axios
//     .post(BASE_URL + '/user/login', { email, password })
//     .then((response) => {
//       if (rememberMe) {
//         localStorage.setItem('token', JSON.stringify(response.data.body.token));
//       } else {
//         sessionStorage.setItem(
//           'token',
//           JSON.stringify(response.data.body.token)
//         );
//       }
//       dispatch(loginSlice.actions.logSucces(response.data));
//       return response.data;
//     })
//     .catch((err) => {
//       dispatch(loginSlice.actions.logFail(err.response.data.message));
//     });
// };

// const userProfile = (value_token) => (dispatch) => {
//   const token =
//     localStorage.getItem('token') !== null
//       ? localStorage
//           .getItem('token')
//           .slice(1, localStorage.getItem('token').length - 1)
//       : value_token;
//   axios
//     .post(
//       BASE_URL + '/user/profile',
//       { token },
//       { headers: { Authorization: `Bearer ${token}` } }
//     )
//     .then((response) => {
//       dispatch(userSlice.actions.userSuccess(response.data));
//       dispatch(loginSlice.actions.isToken());
//     })
//     .catch((err) => {
//       dispatch(userSlice.actions.userFail(err.response));
//     });
// };

// const auth_service = { login, userProfile };
// export default auth_service;

// const accessToken = 'elepHantGun';
// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      // axios.defaults.headers.common['Authorization'] =
      //   'Bearer ' + res.data.body.token;
      const { token } = res.data?.body;
      // localStorage.setItem('authToken', token);
      console.log(res);
      resolve(res.data?.body);
      if (res.data?.status === 200) {
        sessionStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('token', JSON.stringify(token));
      }
    } catch (error) {
      console.log(error.message);
      console.log(LOGIN_URL);
      reject(error);
    }
  });
};

// V2
// export const login = async (email, password) => {
//   try {
//     const res = await axios.post(LOGIN_URL, { email, password });
//     axios.defaults.headers.common['Authorization'] =
//       'Bearer ' + res.data.body.token;
//     const { token } = res.data.body;
//     localStorage.setItem('authToken', token);
//     console.log(res);
//     console.log(axios.defaults.headers.common);
//     // if (res) {
//     //   sessionStorage.setItem('token', JSON.stringify(res.data.body.token));
//     // }
//     if (isAuthenticated()) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     sessionStorage.setItem('token', 'Tokentest');
//     console.log(error.message);
//     console.log(LOGIN_URL);
//     throw new Error(error);
//   }
// };

// function isAuthenticated() {
//   const token = window.localStorage.getItem('authToken');
//   //console.log(token)
//   if (token) {
//     const { exp } = jwtDecode(token);
//     //console.log(exp)

//     if (exp * 1000 > new Date().getTime()) {
//       return true;
//     }
//   }
//   return false;
// }

// const authAPI = {
//   isAuthenticated,
// };
// export default authAPI;

/**
 * Step 1 : login
 * Step 2 : cas success => set token dans le local storage
 * Step 3 : set token dans axios config (autorization: bearer)
 * Step 4 : test route user/profile GET / POST
 */
