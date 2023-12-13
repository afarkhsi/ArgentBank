import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import userSlice, {
  userLogout,
  userSuccess,
} from '../../pages/user/profileSlice';
import { loginSlice } from '../../pages/signIn/loginSlice';

const StyledLink = styled(NavLink)`
  color: #2c3e50;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: green;
  }
`;

const LogInOut = () => {
  const dispatch = useDispatch();
  const { isAuthentified } = useSelector((state) => state.login);
  const { firstName } = useSelector((state) => state.user);
  //   const firstNameStorage = localStorage.getItem('firstName');

  const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(userSlice.actions.userLogout());
    dispatch(loginSlice.actions.logOut());
  };

  return (
    <>
      {isAuthentified ? (
        <StyledLink to="/profile" className="header_nav_link sign_in">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </StyledLink>
      ) : (
        <StyledLink to="/login" className="header_nav_link sign_in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </StyledLink>
      )}
      {isAuthentified && (
        <StyledLink
          to="/"
          className="header_nav_link sign_out"
          onClick={() => signOut()}
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </StyledLink>
      )}
    </>
  );
};

export default LogInOut;
