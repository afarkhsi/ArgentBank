import axios from 'axios';
import userSlice from '../pages/user/profileSlice';
import createUserSlice from '../pages/signInUp/createProfileSlice';

const BASE_URL = 'http://localhost:3001/api/v1';
export const LOGIN_URL = BASE_URL + '/user/login';
const USER_URL = BASE_URL + '/user/profile';
export const SIGNUP_URL = BASE_URL + '/user/signup';

// CALL API /LOGIN
export const login = (email, password, rememberMe) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      // axios.defaults.headers.common['Authorization'] =
      //   'Bearer ' + res.data.body.token;
      const { token } = res.data?.body;
      // localStorage.setItem('authToken', token);
      console.log('response login:', res);
      resolve(res.data);

      if (rememberMe) {
        localStorage.setItem('token', JSON.stringify(token));
      }
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

// CALL API /SIGNUP
export const logUp = (email, password, firstName, lastName) => (dispatch) => {
  dispatch(createUserSlice.actions.createUserPending());
  axios
    .post(SIGNUP_URL, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
    .then((res) => {
      dispatch(createUserSlice.actions.createUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createUserSlice.actions.createUserFail(err.message));
      console.log(err.message);
    });
};

// CALL API /PROFILE => GET
export const userProfile = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      if (!token) {
        reject('Token not found!');
      }
      const res = await axios.post(USER_URL);
      if (token) {
        const userInfo = res?.data?.body;
        localStorage.setItem('firstName', userInfo?.firstName);
        localStorage.setItem('lastName', userInfo?.lastName);
      }

      console.log('response userPorfile:', res.data?.body);
      resolve(res);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(userSlice.actions.userPending());

    const res = await userProfile();
    if (res) {
      return dispatch(userSlice.actions.userSuccess(res.data));
    }

    console.log('response de user :', res);
    dispatch(userSlice.actions.userFail('User is not found'));
  } catch (error) {
    dispatch(userSlice.actions.userFail(error));
    console.log(error.message);
  }
};

// CALL API /PROFILE => UPDATE
export const updateUser = (firstName, lastName) => (dispatch) => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  axios
    .put(USER_URL, { firstName: firstName, lastName: lastName })
    .then((res) => {
      dispatch(userSlice.actions.userUpdateSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userSlice.actions.userUpdateFail(err.message));
    });
};

/**
 * Step 1 : login
 * Step 2 : cas success => set token dans le local storage
 * Step 3 : set token dans axios config (autorization: bearer)
 * Step 4 : test route user/profile GET / POST
 */
