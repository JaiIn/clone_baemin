import styled, { keyframes } from "styled-components";
import Rolling from "../myImages/moving/rolling.png";

function SildProducts() {
    return (
        <StyledBack>
            <StyledH1>신상 스마트폰부터 우리 동네 정육점까지</StyledH1>
            <StyledH2>다양한 상품 배달 됩니다</StyledH2>
            <Imgwrap>
                <ImageRolling />
                <ImageRolling />
            </Imgwrap>
        </StyledBack>
    );
}

export default SildProducts;

const StyledBack = styled.div`
    position: relative;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Imgwrap = styled.div`
display: flex;
width: 3840px;
`

const StyledH1 = styled.h1`
`;

const StyledH2 = styled.h2`
`;

const slideFrame = keyframes`
    0% { transform: translateX(50%); }
    100% { transform: translateX(-50%); }
`;

const ImageRolling = styled.div`
    width: 1920px;
    height: 250px;
    background-size: cover;
    background-image: url(${Rolling});
    animation: ${slideFrame} 20s linear infinite;
`;
