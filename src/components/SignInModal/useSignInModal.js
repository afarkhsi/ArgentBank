import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, logUp, login } from '../../services/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSlice } from '../../pages/signInUp/loginSlice';

const useSignInModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(
    localStorage.getItem('password') || ''
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const { isRemember, error } = useSelector((state) => state.login);
  const { isCreated } = useSelector((state) => state.createUser);

  function remember() {
    if (isRemember === true) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setEmail(email);
      setPassword(password);
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
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
    remember();
    dispatch(loginSlice.actions.logPending());

    try {
      const isAuthentified = await login(email, password, isRemember);
      if (isAuthentified.status === 'error') {
        return dispatch(loginSlice.actions.logFail(isAuthentified.message));
      }

      // console.log('test:', isAuthentified.token);
      dispatch(loginSlice.actions.logSuccess(isAuthentified));
      dispatch(getUserProfile());
      navigate('/profile');
    } catch (error) {
      console.log(error);
      dispatch(loginSlice.actions.logFail(error.message));
    }
  };

  const handleOnSignUp = async (e) => {
    e.preventDefault();
    dispatch(logUp(email, password, firstName, lastName));
    navigate('/login');
  };

  return {
    handleOnSignUp,
    handleOnSubmit,
    handleOnChange,
    signUp,
    isRemember,
    setSignUp,
    error,
    setEmail,
    email,
    setPassword,
    password,
    setFirstName,
    setLastName,
    isCreated,
  };
};

export default useSignInModal;
