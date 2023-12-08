import styled from 'styled-components';
import AmountCard from '../../components/AmountCard/AmoutCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import auth_service from '../../services/apiSlice';
import { useEffect } from 'react';
import axios from 'axios';

const UserContainer = styled.div``;

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const UserPage = () => {
  // document.title = 'Argent Bank - User Page';
  // const token = useSelector((state) =>
  //   state.login.token !== null
  //     ? state.login.token
  //     : localStorage.getItem('token') !== null
  //     ? localStorage.getItem('token')
  //     : null
  // );
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // dispatch(auth_service.userProfile(token));

  // useEffect(() => {
  //   if (token === null) {
  //     navigate('/');
  //     sessionStorage.clear();
  //   }
  // }, [token, navigate]);
  return (
    <>
      {/* {token !== null ? ( */}
      <UserContainer className="bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <AmountCard />
      </UserContainer>
      {/* ) : ( */}
      <UserContainer className="bg-dark"></UserContainer>
      {/* )} */}
    </>
  );
};

export default UserPage;
