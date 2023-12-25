// import './style.css';
import styled from 'styled-components';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
// import { callApi } from '../../callApi';

const HomeContainer = styled.div`
  position: relative;
  // display: flex;
  width: 100%;
  // height: 92%;
  flex-direction: column;
  flex: 1;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50%;
  top: 50%;
  color: #e60000;
`;

// HOME PAGE
const HomePage = () => {
  document.title = 'Argent Bank - Home';
  return (
    <HomeContainer>
      <Banner />
      <Features />
    </HomeContainer>
  );
};

export default HomePage;
