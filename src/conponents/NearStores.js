import styled from "styled-components";
import StoreHeader from "./stores/StoreHeader";
import StoreBody from "./stores/StoreBody";

function NearStores() {
    return (
        <Boding>
            <StoreHeader />
            <InnerDiv>
                <StoreBody />
            </InnerDiv>
        </Boding>
    );
}

export default NearStores;

const Boding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const InnerDiv = styled.div`
width: 760px;
display: flex;
flex-direction: column;
align-items: center;
`

const SlickPart = styled.div`
`