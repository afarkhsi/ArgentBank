import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/argentBankLogo.png';
import './style.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LogInOut from '../LogInOut/LogInOut';

const HomeLogo = styled.img`
  background-color: none;
  width: 200px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  // height: 8%;
  min-height: 80px;
  // margin: 0 auto;
  // width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: #2c3e50;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: green;
  }
`;

// Function generating Header Component in all pages
function Header() {
  // const { token } = useSelector((state) => state.login);

  // const logOut = () => {
  //   localStorage.removeItem('token');
  //   sessionStorage.removeItem('token');
  // };
  return (
    <NavContainer className="header">
      <Link className="header_logo" to="/">
        <HomeLogo
          className="header_logo_img"
          src={Logo}
          alt="ArgentBank logo"
        />
      </Link>
      <div className="header_nav">
        {/* {token === null || !token || token === '' ? (
        <StyledLink to="/login" className="header_nav_link sign_in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </StyledLink>
      ) : (
        <StyledLink
          to={'/'}
          className="header_nav_link sign_out"
          onClick={logOut}
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </StyledLink>
      )} */}
        <LogInOut />
      </div>
    </NavContainer>
  );
}

export default Header;
