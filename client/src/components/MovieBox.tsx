import styled from 'styled-components'

import { FiPlusSquare } from "react-icons/fi";

import TestImage from "../images/test.jpg";

const MovieBox = () => {

  const INTROMAXLENGTH = 20;
  let text = "바다 탐험대 옥토넛 어보브 앤 비욘드 : 육지 넘어 하늘까지!";

  if(text.length > INTROMAXLENGTH) {
    text = text.substring(0, INTROMAXLENGTH) + "...";
  }

  return (
    <MovieBoxContainer>
      <img src={TestImage} alt="#" />
      <MovieBoxIntroBox className='moviebox-introbox'>
        <div>
          <h1>윌리웡카</h1>
          <p>전체 관람가</p>
        </div>
        <h2>{text}</h2>
        <div>
          <h3>개봉 날짜</h3>
          <FiPlusSquare size={30}/>
        </div>
      </MovieBoxIntroBox>
    </MovieBoxContainer>
  )
}

const MovieBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 213px;
  height: 305px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: transform 0.5s ease 0.2s;

  overflow-y: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
  &:hover {
    .moviebox-introbox {
      transform: translateY(-100px);
    }
  }
`

const MovieBoxIntroBox = styled.div`
  position: absolute;
  bottom: -110px;
  width: 100%;
  height: 130px;
  padding: 20px 0px;
  background-color: rgba(0,0,0, 0.7);
  border-radius: 0px 0px 15px 15px;
  transition: all 0.4s;
  z-index: 10;
  color: white;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }
  h2 {
    padding: 30px 10px;
  }
`

export default MovieBox