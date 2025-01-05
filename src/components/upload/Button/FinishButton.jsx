import styled from "styled-components";
import { Link } from "react-router-dom";

const FinishButton = () => {
  return <StyledButton to={"/"}>작성 완료</StyledButton>;
};

export default FinishButton;

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 47px;
  background-color: #f72798;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
`;
