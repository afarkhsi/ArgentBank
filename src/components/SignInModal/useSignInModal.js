import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, logUp, login } from '../../services/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSlice } from '../../pages/signInUp/loginSlice';

const useSignInModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const { isRemember, error } = useSelector((state) => state.login);
  const { isCreated } = useSelector((state) => state.createUser);

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
    setPassword,
    setFirstName,
    setLastName,
    password,
    isCreated,
  };
};

export default useSignInModal;
