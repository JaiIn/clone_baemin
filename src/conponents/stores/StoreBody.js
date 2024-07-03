import styled from "styled-components";
import Slicking from "./inbody/Slicking";

function StoreBody() {
    return (
        <Backdiv>
            <Slicking/>
        </Backdiv>
    );
}

export default StoreBody;

const Backdiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;