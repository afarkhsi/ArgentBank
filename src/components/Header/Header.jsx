import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/argentBankLogo.png';
import './style.css';
import LogInOut from '../LogInOut/LogInOut';

const HomeLogo = styled.img``;

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

// Function generating Header Component in all pages
function Header() {
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
        <LogInOut />
      </div>
    </NavContainer>
  );
}

export default Header;
