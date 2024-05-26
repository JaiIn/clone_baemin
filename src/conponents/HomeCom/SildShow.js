import styled from "styled-components";
import food1 from "../myImages/food/1.jpg";
import { useState } from "react";
import Search from "./Modlas/Search";
import gps from "../myImages/logo/gps.png";

function SildShow() {
    const [isClicked, setIsClicked] = useState(false);

    const openModal = () => {
        setIsClicked(true);
    };

    const closeModal = () => {
        setIsClicked(false);
    };

    return (
        <StyledImageBack key={1}>
            <StyledImage style={{ backgroundImage: `url(${food1})` }}>
                <StyledH2>내일까지 어떻게 기다려요?</StyledH2>
                <StyledH1>배민 스토어는 지금 옵니다.</StyledH1>
                <InputWrap>
                    <GpsBtn onClick={openModal} />
                    <StyledInput
                        type="text"
                        placeholder="주소를 입력하세요"
                        onClick={openModal}
                    />
                </InputWrap>
                <StyledGangnamBtn>'강남역' 주소로 구경하기</StyledGangnamBtn>
            </StyledImage>
            <Search isOpen={isClicked} onClose={closeModal} />
        </StyledImageBack>
    );
}

export default SildShow;

const StyledImageBack = styled.div`
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-items: center;
`;

const StyledH2 = styled.h2``;

const StyledH1 = styled.h1``;

const StyledInput = styled.input`
    border-radius: 30px;
    width: 400px;
    height: 50px;
    padding-left: 50px;
    padding-right: 50px;
`;

const StyledGangnamBtn = styled.button`
    background-color: transparent;
    border-radius: 30px;
    width: 200px;
    height: 25px;
    text-align: center;
    margin-top: 20px;
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 400px;
`;

const GpsBtn = styled.button`
position: absolute;
left:10px;
width: 20px;
height: 20px;
background-image: url(${gps});
background-size: cover;
background-color: transparent;
border: 0px;
align-self: center;
justify-content: flex-start;
`