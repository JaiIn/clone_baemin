import styled from "styled-components";
import mainLogo from "../myImages/logo/main_logo.jpg";

function IconCon(){
    return(
        <StyledIconContainer>
            <StyledIcon src={mainLogo} />
        </StyledIconContainer>
    );
}

export default IconCon;

const StyledIconContainer = styled.div`
display:flex;
position: relative;
justify-content: center;
`
const StyledIcon = styled.img`
    position: absolute;
    width: 200px;
    height: 50px;
`;