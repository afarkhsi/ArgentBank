import axios from 'axios';
import { LOGIN_URL } from './apiSlice';

export async function userLogin(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      else delete axios.defaults.headers.common['Authorization'];
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
