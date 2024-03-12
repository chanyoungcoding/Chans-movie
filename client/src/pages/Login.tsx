import styled from "styled-components";
import LoginBackground from "../images/background1.jpg";
import LoginBox from "../components/LoginBox";
import { useState } from "react";
import SignUpBox from "../components/SignUpBox";

const LoginContain= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${LoginBackground}) no-repeat center/cover;
`;

const Login = () => {

  const [state, setState] = useState(false);

  const onClickSignUp = () => {
    setState(!state)
  }

  return (
    <LoginContain>
      {state ? <SignUpBox onClickSignUp={onClickSignUp} /> : <LoginBox onClickSignUp = {onClickSignUp}/> }
    </LoginContain>
  )
}

export default Login