import { useState } from "react";
import styled from "styled-components";
import slide from '../../myImages/sliding/1.jpg';

function Slicking() {
    return (
        <BackDiV>
            <CarouselWrap>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </CarouselWrap>
        </BackDiV>
    );
}

export default Slicking;

const BackDiV = styled.div`
width: 1818px;
overflow: hidden;
`

const CarouselItem = styled.div`
width: 300px;
height: 135px;
background-image: url(${slide});
border-radius: 10px;
margin: 3px;
`

const CarouselWrap = styled.div`
display: flex;
justify-content: center;
`;
