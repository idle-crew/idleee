import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return <StyledLoginButton to="/login">로그인</StyledLoginButton>;
};

export default LoginButton;

const StyledLoginButton = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-decoration: none;
`;
