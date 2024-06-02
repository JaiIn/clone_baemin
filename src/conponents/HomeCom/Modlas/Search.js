import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";
import { ClickContext } from "../contexts/ClickContext";

function Search() {

    const {isClicked, closeModal} = useContext(ClickContext);

    useEffect(() => {
        if (isClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isClicked])
    return (
        <ModalPortal>
            {isClicked ?
                (<ModalWrap>
                    <Overlay onClick={closeModal} />
                    <ModalBack isClicked={isClicked}>
                        <StyledCon>
                            <StyledSpan> 주소 검색 </StyledSpan>
                            <ExitButton onClick={closeModal}>X</ExitButton>
                        </StyledCon>
                        <InputAdd
                            type="text"
                            placeholder="지번, 도로명, 건물명으로 검색" />
                        <Graydiv>
                            <StyledSpan>
                                이렇게 입력해 보세요
                            </StyledSpan>
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
                </ModalWrap>):null}
        </ModalPortal>
    );
}

export default Search;

const Overlay = styled.div`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
`

const ModalWrap = styled.div`
`

const ModalBack = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
transform: translateY(${props => (props.isClicked ? "0%" : "100%")});
transition: transform 0.5s linear;
`;

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