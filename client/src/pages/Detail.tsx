import styled from "styled-components";

import DetailImg from "../components/Detail/DetailImg";

const Detail = () => {

  return (
    <DetailContainer>
      <DetailBox>
        <DetailImg/>

      </DetailBox>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  padding-top: 150px;
`

const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  img {
    min-width: 213px;
    min-height: 305px;
  }
`

export default Detail