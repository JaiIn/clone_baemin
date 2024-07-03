import React, { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { ClickContext } from "../contexts/ClickContext";
import { useLocation } from "react-router-dom";

function Search() {

    const { isClicked, closeModal } = useContext(ClickContext);
    const location = useLocation();

    useEffect(() => {
        if (isClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isClicked])

    const isStore = location.pathname === '/store';

    return (
        <ModalWrap>
            <Overlay isClicked={isClicked} onClick={closeModal} />

            <ModalBack isClicked={isClicked} isStore={isStore}>
                <StyledCon>
                    <StyledSpan> 주소 검색 </StyledSpan>
                    <ExitButton onClick={closeModal}>X</ExitButton>
                </StyledCon>
                <InputAdd type="text" placeholder="지번, 도로명, 건물명으로 검색" />

                <Graydiv>
                    <StyledSpan>이렇게 입력해 보세요</StyledSpan>
                    <ul>
                        <li>
                            도로명 + 건물번호<br />
                            예) 배민로 12길 3
                        </li>
                        <li>
                            건물명 + 번지<br />
                            예) 배민로 12-3
                        </li>
                        <li>
                            건물명, 아파트명<br />
                            예) 배민아파트 101동
                        </li>
                    </ul>
                </Graydiv>
            </ModalBack>
        </ModalWrap>
    );
}

export default Search;

const Overlay = styled.div`
position: fixed;
top:0;
display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
`

const ModalWrap = styled.div`
position:fixed;
z-index:100;
width:100%;
`

const ModalBack = styled.div`
position: fixed;
bottom: ${({ isClicked }) => (isClicked ? '0px' : '-800px')};
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
transition: bottom 0.2s ease-in-out;

${({ isStore, isClicked }) => isStore && css`
    @media screen and (max-width: 768px) {
        ${isClicked ? `
            width: 300px;
            height: 400px;
            top: 30px;
            left: 30px;
            border-radius: 10px;
        ` : `
            transition: none;
        `}
    }
`}
`

const InputAdd = styled.input`
margin-top: 10px;
border-radius: 10px;
width: 80%;
height: 50px;
background-color: #c7c7c7;
align-self: center;
padding-left: 10px;
`;

const StyledCon = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
`;

const StyledSpan = styled.span`
margin-top: 10px;
font-size: 18px;
`;

const ExitButton = styled.button`
background-color: transparent;
border: none;
font-size: 18px;
padding-right: 20px;
`;

const Graydiv = styled.div`
padding: 10px;
flex: 1;
background-color: #c7c7c7;
margin-top: 20px;
`

