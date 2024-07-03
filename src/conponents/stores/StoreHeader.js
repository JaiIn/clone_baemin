import styled from "styled-components";
import Logo from "../myImages/logo/main_logo.jpg";
import ThreeLine from "../myImages/logo/threeline.jpg";
import { useContext } from "react";
import { ClickContext } from "../HomeCom/contexts/ClickContext";
import Search from "../HomeCom/Modlas/Search"

function StoreHeader() {

    const {openModal} = useContext(ClickContext);

    return (
        <Header>
            <HContainer>
                <HLogo />
                <Adrress onClick={openModal}>
                    강남대로 396 강남역[2호선]
                </Adrress>
                <SearchBar placeholder="상품이나 가게명을 입력하세요" />
                <AppBtn>앱으로 보기</AppBtn>
                <ThreeLineBtn />
            </HContainer>
            <Search/>
        </Header>
    )
}

export default StoreHeader;

const Header = styled.header`
top: 0;
display: flex;
flex-direction: row;
justify-content: center;
position: fixed;
z-index: 100;
background-color: white;
`
const HContainer = styled.div`
width: 760px;
display: flex;
align-items: center;
justify-content: space-between;
`
const HLogo = styled.div`
background-image: url(${Logo});
background-color: transparent;
background-size: cover;
background-position: center;
width: 150px;
height: 50px;
border-right: 1px solid black;
`
const Adrress = styled.button`
width: 150px;
height: 30px;
background-color: transparent;
border: none;
`
const SearchBar = styled.input`
width: 250px;
height: 30px;
border-radius: 5px;
border: none;
background-color:  #c7c7c7;
`
const AppBtn = styled.button`
width: 100px;
height: 30px;
border-radius: 10px;

`
const ThreeLineBtn = styled.div`
background-image: url(${ThreeLine});
width: 30px;
height: 30px;
background-size: cover;
background-position: center;
`
