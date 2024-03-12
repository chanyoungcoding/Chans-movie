import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const LoginContainer = styled.div`
  min-width: 30%;
  padding: 0px 20px;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
  border-radius: 5px;

  h1 {
    margin: 20px 10px;
    font-size: 2rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    .inputerror {
      margin-bottom: 30px;
      font-size: 14px;
      color: #E87C03;
    }
    .inputsubmit {
      min-width: 80%;
      margin: 20px auto;
      background-color: #0066FF;
      cursor: pointer;
    }
  }

  input {
    margin: 15px 0px;
    padding: 10px;
    font-size: 1.5rem;
    background-color: #333333;
    color: white;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  label {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #999AA0;
  }

  p {
    margin: 10px 0px 20px;
    text-align: center;
    color: #999AA0;
    cursor: pointer;
  }
`;

interface UserInput {
  email: string;
  password: string;
}

interface SignUpEvent {
  onClickSignUp: () => void;
}

const LoginBox:React.FC<SignUpEvent> = ({onClickSignUp}) => {

  const {register, handleSubmit, formState: {errors} } = useForm<UserInput>();

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
  }

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">EMAIL</label>
        <input {...register("email", { required: true, maxLength: 9 })} type="text" id="username" placeholder="email" />
        {errors.email?.type === "required" && (<div className="inputerror">이름을 입력해 주세요.</div>)}

        <label htmlFor="password">PASSWORD</label>
        <input {...register("password", { required: true })} type="password"  id="password" placeholder="password" />
        {errors.password?.type === "required" && (<div className="inputerror">패스워드를 입력해 주세요.</div>)}

        <input className="inputsubmit" type="submit" value="로그인" />
        <p onClick={onClickSignUp}>계정이 없으신가요?</p>
      </form>
    </LoginContainer>
  )
}

export default LoginBox;