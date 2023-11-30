import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/argentBankLogo.png';
// import './style.css';

const HomeLogo = styled.img`
  background-color: none;
  width: 200px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 8%;
  min-height: 80px;
  // margin: 0 auto;
  // width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: green;
  }
  font-size: 24px;
  font-weight: 500;
`;

// Function generating Header Component in all pages
function Header() {
  return (
    <NavContainer className="header">
      <Link className="header_logo" to="/">
        <HomeLogo className="header_logo_img" src={Logo} alt="ArgentBank logo" />
      </Link>
        <StyledLink to="/" className="header_nav_link">
          Sign In
        </StyledLink>
    </NavContainer>
  );
}

export default Header;