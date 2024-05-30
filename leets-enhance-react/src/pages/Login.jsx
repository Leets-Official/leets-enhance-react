import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { SButton } from "../components/Button";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const nav = useNavigate();

  const onClickLoginButton = async () => {
    try {
      const currentUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        userInfo.id,
        userInfo.password
      );
      console.log("currentUserInfo", currentUserInfo);
      setIsError(false);
      nav("/");
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("존재하지 않는 아이디입니다!");
          setIsError(true);
          break;
        case "auth/wrong-password":
          setErrorMessage("비밀번호가 일치하지 않습니다!");
          setIsError(true);
          break;
        case "auth/invalid-email":
          setErrorMessage("유효하지 않은 이메일 형식입니다.");
          setIsError(true);
          break;
        case "auth/invalid-credential":
          setErrorMessage("존재하지 않는 아이디입니다!");
          setIsError(true);
          break;
        default:
          setErrorMessage("로그인에 실패했습니다.");
          setIsError(true);
          break;
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>로그인 화면</h1>
      <form onSubmit={onSubmitLogin}>
        <div>
          <StyledInput
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
          />

          <StyledInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
          <SButton onClick={onClickLoginButton}>로그인하기</SButton>
        </div>
        {isError && <ErrorText>{errorMessage}</ErrorText>}
      </form>
    </FormContainer>
  );
};

export default LoginPage;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ErrorText = styled.p`
  color: red;
  font-size: small;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  background-color: rgb(196, 195, 195);
  width: 600px;
  font-size: 10px;
  color: black;
  padding: 20px 10px;
  border-radius: 25px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  &::placeholder {
    color: black;
  }
`;
