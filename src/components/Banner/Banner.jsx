import styled from 'styled-components';
import Img from '../../assets/bank-tree.jpeg';
import './style.css';

const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

const BannerImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

const BannerDescription = styled.div`
  background-color: white;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImg src={Img} className="banner-img" alt="Banner image" />
      <BannerDescription className="banner-description">
        <p className="banner-description_subtitle">No fees.</p>
        <p className="banner-description_subtitle">No minimum deposit.</p>
        <p className="banner-description_subtitle">High interest rates.</p>
        <p className="banner-description_text">
          Open a savings account with Argent Bank today!
        </p>
      </BannerDescription>
    </BannerContainer>
  );
};

export default Banner;
