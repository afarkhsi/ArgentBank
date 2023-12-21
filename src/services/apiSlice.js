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
      const res = await axios.post(LOGIN_URL, { email, password, rememberMe });
      const { token } = res.data?.body;
      // console.log('response login:', res);
      resolve(res.data);

      if (rememberMe === true) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        // console.log('data remember:', email, password);
      }

      if (res.data?.status === 200) {
        sessionStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('token', JSON.stringify(token));
      }
    } catch (error) {
      console.log(error.message);
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
      // console.log('response userPorfile:', res.data?.body);
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

    // console.log('response de user :', res);
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
