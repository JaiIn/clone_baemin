import styled from "styled-components";

function Downbtn(){
    return(
        <StyledBack>
            <StyledBtn>앱 다운로드</StyledBtn>
        </StyledBack>
    );
}
export default Downbtn;

const StyledBack = styled.div`
background-color:blue;
display:flex;
flex-direction: column;
padding:10px;
align-items: center;
`;
const StyledBtn = styled.button`
Background-color:white;
width:100px;
height:50px;
margin: 0;
`;