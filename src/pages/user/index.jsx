import styled from 'styled-components';
import AmountCard from '../../components/AmountCard/AmoutCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import { useEffect } from 'react';

const UserContainer = styled.div``;
const AmoutCardContainer = styled.section``;

// PROFILE PAGE
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
          <AmoutCardContainer>
            <AmountCard
              title="Argent Bank Checking (x8349)"
              value="$2,082.79"
              description="Available Balance"
            />
            <AmountCard
              title="Argent Bank Savings (x6712)"
              value="$10,928.42"
              description="Available Balance"
            />
            <AmountCard
              title="Argent Bank Credit Card (x8349)"
              value="$184.30"
              description="Current Balance"
            />
          </AmoutCardContainer>
        </UserContainer>
      ) : (
        <UserContainer className="bg-dark"></UserContainer>
      )}
    </>
  );
};

export default UserPage;
