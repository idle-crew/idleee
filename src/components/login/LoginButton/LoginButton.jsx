import styled from "styled-components";
import IconGoogle from "../../../icons/IconGoogle";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <StyledLoginButton to="/">
      <IconGoogle />
      <StyledLogin>구글로 시작하기</StyledLogin>
    </StyledLoginButton>
  );
};

export default LoginButton;

const StyledLoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 451px;
  height: 66px;
  background-color: white;
  border-radius: 5px;
  padding: 0 12px;
  text-decoration: none;
`;

const StyledLogin = styled.div`
  font-size: 18px;
  color: black;
  font-weight: 500;
  padding-left: 142px;
`;
