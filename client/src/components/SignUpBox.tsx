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
  username: string;
  email: string;
  password: string;
  repeatpassword: string;
}

interface SignUpEvent {
  onClickSignUp: () => void;
}

const SignUpBox:React.FC<SignUpEvent> = ({onClickSignUp}) => {

  const {register, handleSubmit, formState: {errors}, getValues } = useForm<UserInput>();

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
  }

  return (
    <LoginContainer>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">이름</label>
        <input {...register("username", { required: true, maxLength: 6 })} type="text" id="username" placeholder="username" />
        {errors.username?.type === "required" && (<div className="inputerror">이름을 입력해 주세요.</div>)}
        {errors.username?.type === "maxLength" && (<div className="inputerror">7 글자 이상은 넘길 수 없습니다.</div>)}

        <label htmlFor="email">이메일</label>
        <input {...register("email", { required: true, minLength: 6 , maxLength: 15 })} type="text" id="email" placeholder="email" />
        {errors.email?.type === "required" && (<div className="inputerror">아이디를 입력해 주세요.</div>)}
        {errors.email?.type === "minLength" && (<div className="inputerror">6 자리 이상을 입력해 주세요.</div>)}
        {errors.email?.type === "maxLength" && (<div className="inputerror">15 자리 이하를 입력해 주세요.</div>)}

        <label htmlFor="password">비밀번호</label>
        <input {...register("password", { required: true, pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/})} type="password"  id="password" placeholder="password" />
        {errors.password?.type === "pattern" && (<div className="inputerror">영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요</div>)}

        <label htmlFor="repeatpassword">비밀번호 확인</label>
        <input {...register("repeatpassword", { required: true, validate: { matchPassword: (value) => value === getValues("password") || "비밀번호가 일치하지 않습니다."}})} type="password"  id="repeatpassword" placeholder="repeat password" />
        {errors.repeatpassword && <div className="inputerror">{errors.repeatpassword.message}</div>}

        <input className="inputsubmit" type="submit" value="회원가입" />
        <p onClick={onClickSignUp}>로그인 하러 가기</p>
      </form>
    </LoginContainer>
  )
}

export default SignUpBox