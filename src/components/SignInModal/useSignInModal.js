import { useDispatch, useSelector } from 'react-redux';
import createUserSlice from '../../pages/user/createProfileSlice';
import axios from 'axios';
import { SIGNUP_URL, getUserProfile, login } from '../../services/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSlice } from '../../pages/signIn/loginSlice';

const useSignInModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const user = useSelector((state) => state.createUser);
  const { isRemember, error } = useSelector((state) => state.login);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'remember-me':
        setRememberMe(checked);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Fill up all the form');
    }

    dispatch(loginSlice.actions.logPending());
    console.log(email, password);

    try {
      const isAuthentified = await login(email, password);
      if (isAuthentified.status === 'error') {
        return dispatch(loginSlice.actions.logFail(isAuthentified.message));
      }
      console.log('test:', isAuthentified.token);
      dispatch(loginSlice.actions.logSuccess(isAuthentified));
      dispatch(getUserProfile());
      navigate('/profile');
    } catch (error) {
      console.log(error);
      dispatch(loginSlice.actions.logFail(error.message));
    }
  };

  const logUp = (e) => {
    e.preventDefault();
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

  return {
    logUp,
    handleOnSubmit,
    handleOnChange,
    signUp,
    isRemember,
    setSignUp,
    error,
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    password,
  };
};

export default useSignInModal;
