import styled from 'styled-components';
import AmountCard from '../../components/AmountCard/AmoutCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import { useEffect } from 'react';

const UserContainer = styled.div``;

const UserPage = () => {
  document.title = 'Argent Bank - User Page';
  const token = useSelector((state) =>
    state.login.token !== null
      ? state.login.token
      : localStorage.getItem('token') !== null
      ? localStorage.getItem('token')
      : null
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate('/');
      sessionStorage.clear();
    }
  }, [token, navigate]);

  return (
    <>
      {token !== null ? (
        <UserContainer className="bg-dark">
          <UserInfo />
          <AmountCard />
        </UserContainer>
      ) : (
        <UserContainer className="bg-dark"></UserContainer>
      )}
    </>
  );
};

export default UserPage;
