import styled from "styled-components";

function Company() {
    return (
        <MyFooter>
            <Atag>
                이용약관 | 개인정보처리방침
                <br />
            </Atag>
            <br />
            
            <StyledSpan>(주)우아한형제들</StyledSpan>
            
            <Bigdiv>
                <Contant>
                    서울특별시 송파구 위례성대로 2 장은빌딩 | 대표이사 이국환 |
                    사업자등록번호 120-87-65763 | 호스팅서비스 제공자 (주)우아한형제들
                </Contant>
                <Contant>
                    통신판매업 서울 송파-0515 | CS@woowahan.com |
                    전자금융분쟁처리 Tel 1600-0987(유료), 080-849-0987(무료) |
                    Fax 050-6050-0400
                </Contant>

                <Table>
                    <TableRow>
                        <TableData>
                            고객센터(대표) <br />
                            1600-0987 <br />
                            24시간 운영, 연중무휴
                        </TableData>
                        <TableData>
                            고객센터(배민스토어) <br />
                            1600-0025 <br />
                            오전 09:00~익일 새벽 01:00
                        </TableData>
                    </TableRow>
                </Table>
                <StyledSpan>
                    소비자중심경영 인증기업
                </StyledSpan>
                <Contant>
                    (주)우아한형제들은
                    통신판매중개자로 거래 당사자가 아니므로,
                    판매자가 등록한 상품정보 및 거래 등에 대해
                    책임을 지지 않습니다. 단,
                    (주)우아한형제들이 판매자로 등록 판매한 상품은
                    판매자로서 책임을 부담합니다.
                </Contant>

            </Bigdiv>
        </MyFooter>
    );
}

export default Company;

const MyFooter = styled.footer`
display: flex;
flex-direction: column;
`

const Bigdiv = styled.div`
margin-top: 20px;
`
const StyledSpan = styled.span`
font-weight: bold;
`
const Contant = styled.div`
margin-top: 10px;
margin-bottom: 10px;
font-size: 12px;
color: #555;
`
const Atag = styled.a`
color: #555;
`
const Table = styled.table`
border-collapse: collapse;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
`
const TableData = styled.td`
padding: 8px;
font-size: 20px;
border: 1px solid;
`
const TableRow = styled.tr`
border: 1px solid;
`