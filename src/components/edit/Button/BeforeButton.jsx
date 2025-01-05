import styled from "styled-components";
import { useSetEditStepStore } from "../../../stores/edit/editStep";

const BeforeButton = () => {
  const setEditStep = useSetEditStepStore();

  const handleMoveBeforeStep = () => {
    setEditStep("상품정보");
  };

  return <StyledButton onClick={handleMoveBeforeStep}>이전</StyledButton>;
};

export default BeforeButton;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 149px;
  height: 47px;
  background-color: #2d2d2d;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
