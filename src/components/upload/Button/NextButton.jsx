import styled from "styled-components";
import { useSetUploadStepStore } from "../../../stores/upload/uploadStep";

const NextButton = () => {
  const setUploadStep = useSetUploadStepStore();

  const handleMoveNextStep = () => {
    setUploadStep("이유");
  };

  return <StyledNextButton onClick={handleMoveNextStep}>다음</StyledNextButton>;
};

export default NextButton;

const StyledNextButton = styled.div`
  position: fixed;
  bottom: 44px;
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
`;
