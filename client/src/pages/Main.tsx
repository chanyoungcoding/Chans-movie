import styled from "styled-components";
import MainOptimizationBackground from "../images/background1.webp";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MainOptimizationBackground}) no-repeat center/cover;
  height: 100vh;
`;

const MainIntroBox = styled.div`
  position: relative;
  top: 50%;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    top: 40%;
    margin-left: 30px;
  }

  div {
    display: flex;
    align-items: end;
    width: 80%;
    padding: 75px 0px 20px;
    border-bottom: 3px solid white;

    h1 {
      margin-right: 50px;
      font-size: 4rem; 
      font-weight: bold;
      color: #0066FF;

      @media screen and (max-width: 768px) {
        margin-right: 0px;
        font-size: 3rem;
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: white;

      @media screen and (max-width: 768px) {
        margin-top: 30px;
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      width: 70%;
    }
  }
  
  button {
    width: 250px;
    margin-top: 30px;
    padding: 20px;
    color: white;
    background-color: black;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      padding: 15px 10px;
      font-size: 1.5rem;
    }
  }
`;

const Main = () => {

  const navigate = useNavigate();

  const loginMove = () => {
    navigate('/login')
  }

  return (
    <MainContainer>
      <MainIntroBox>
        <div>
          <h1>Cinelog</h1>
          <h2>PROVIDES A GREAT EXPERIENCE</h2>
        </div>
        <button onClick={loginMove}>LOGIN</button>
      </MainIntroBox>
    </MainContainer>
  )
}

export default Main