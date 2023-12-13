import React, { useEffect, useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service, { getUserProfile, login } from '../../services/apiSlice';
import { loginSlice } from '../../pages/signIn/loginSlice';
import styled from 'styled-components';
import { userLogin } from '../../services/userApi';
import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const SignInModal = () => {
  document.title = 'Argent Bank - Sign In';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const token = useSelector((state) => state.login.token);
  // const error = useSelector((state) => state.login.error);

  // console.log(email, password);

  const { token, isLoading, isAuthentified, isRemember, error } = useSelector(
    (state) => state.login
  );

  //   V2
  // const [credientials, setCredientials] = useState({
  //   email: '',
  //   password: '',
  // });

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
      default:
        break;
    }
  };

  // V2
  //   function handelChange({ currentTarget }) {
  //     const { value, name } = currentTarget;
  //     setCredientials({
  //       ...credientials,
  //       [name]: value,
  //     });
  //   }

  // useEffect(() => {
  //   if (token !== null || localStorage.getItem('token') !== null) {
  //     navigate('/profile');
  //   }
  // }, [token, navigate]);

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

  // V2
  // async function handelSubmit(e) {
  //   e.preventDefault();

  //   dispatch(loginSlice.actions.logPending());
  //   try {
  //     const isAuth = await userLogin(credientials);

  //     if (isRemember) {
  //       localStorage.setItem('token', isAuth.body.token);
  //     } else {
  //       localStorage.removeItem('token');
  //     }

  //     dispatch(loginSlice.actions.logSucces());
  //     navigate('/profile');
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(loginSlice.actions.logFail(error.response.data.message));
  //   }
  // }

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   dispatch(auth_service.login(email, password, rememberMe));
  // };

  // useEffect(() => {
  //   if (token != null || localStorage.getItem('token') != null) {
  //     navigate('/profile');
  //   }
  // }, [token, navigate]);
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <div variant="danger">{error}</div>}
        <form onSubmit={handleOnSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              // value={password}
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={isRemember}
              onChange={() =>
                dispatch(loginSlice.actions.logRemember(!isRemember))
              }
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
          {/* {error !== null ? <label className="error">{error}</label> : ''} */}
        </form>
      </section>
    </main>
  );
};

export default SignInModal;
