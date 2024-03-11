
import styled from "styled-components";
import MainBackground from "../images/background1.jpg";

const MainContainer = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MainBackground}) no-repeat center/cover;
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
    }
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      width: 70%;
      h1 {
        margin-right: 0px;
        font-size: 3rem;
      }
      h2 {
        margin-top: 30px;
        font-size: 1.5rem;
      }
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
`


const Main = () => {
  return (
    <MainContainer>
      <MainIntroBox>
        <div>
          <h1>Cinelog</h1>
          <h2>PROVIDES A GREAT EXPERIENCE</h2>
        </div>
        <button>LOGIN</button>
      </MainIntroBox>
    </MainContainer>
  )
}

export default Main