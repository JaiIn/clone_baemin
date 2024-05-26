import styled from "styled-components";
import intro1 from "../myImages/Intro/1.jpg";
import intro2 from "../myImages/Intro/2.jpg";
import intro3 from "../myImages/Intro/3.jpg";

function Intro() {
    return (
        <StyledBack>
            <Styledyoso>
                <StyledWords>
                    <SpanTitle>주문과 동시에</SpanTitle>
                    <SpanTitle className="title">배달이 시작됩니다</SpanTitle>
                    <SpanIntro className="intro">스토어는 상품을 준비하고,</SpanIntro>
                    <SpanIntro className="intro">라이더는 매장으로 출발합니다</SpanIntro>
                </StyledWords>
                <StyledImage style={{ background: `url(${intro1})` }} />
            </Styledyoso>

            <Styledyoso>
                <StyledImage style={{ background: `url(${intro2})` }} />
                <StyledWords>
                    <SpanTitle className="title">100개 이상의 브랜드가</SpanTitle>
                    <SpanTitle className="title">우리집 문 앞으로</SpanTitle>
                    <SpanIntro className="intro">편의점, 삼성스토어, 홈플러스 등</SpanIntro>
                    <SpanIntro className="intro">다양한 브랜드를 둘러보세요</SpanIntro>
                </StyledWords>
            </Styledyoso>
            
            <Styledyoso>
                <StyledWords>
                    <SpanTitle className="title">세상의 모든 스토어</SpanTitle>
                    <SpanIntro className="intro">우리동네 정육점, 꽃가게,</SpanIntro>
                    <SpanIntro className="intro">슈퍼마켓도 있어요!</SpanIntro>
                </StyledWords>
                <StyledImage style={{ background: `url(${intro3})` }} />
            </Styledyoso>
        </StyledBack>
    );
}

const StyledBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;
const Styledyoso = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const StyledWords = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledImage = styled.div`
    width: 300px;
    height: 250px;
    margin: 20px;
    background-size: cover;
`;
const SpanTitle = styled.span`
font-size: 20px;
font-weight: bold;
`
const SpanIntro = styled.span`
font-size: 14px;
color: #333;
`


export default Intro;