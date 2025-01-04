import styled from "styled-components";
import IconLogin from "../../icons/IconLogin";
import LoginButton from "../../components/login/LoginButton/LoginButton";

const Login = () => {
  return (
    <StyledLoginPage>
      <IconWrapper>
        <IconLogin />
      </IconWrapper>
      <StyledLogin>SNS로 간편 가입하기</StyledLogin>
      <LoginButton />
    </StyledLoginPage>
  );
};

export default Login;

const StyledLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const IconWrapper = styled.div`
  padding-bottom: 201px;
`;

const StyledLogin = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 500;
  padding-bottom: 21px;
`;
