import styled from 'styled-components';
import Img from '../../assets/bank-tree.jpeg'

const BannerContainer = styled.div`
width: 100%;
height: 300px;
`

const BannerImg = styled.img`
object-fit: cover;
width:100%;
`

const Banner =() => {
    return (
        <BannerContainer>
            <BannerImg src={Img} alt='Banner image' />
        </BannerContainer>
    )
}

export default Banner;