// import './style.css';
import styled from 'styled-components';
import Banner from '../../components/Banner/Banner';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 92%;
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



const HomePage = () => (
  <HomeContainer>
    <Banner />
  </HomeContainer>
);

export default HomePage;