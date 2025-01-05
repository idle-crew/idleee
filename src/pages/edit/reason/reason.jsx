import styled from "styled-components";
import ReasonInput from "../../../components/edit/Input/ReasonInput";
import ProjectInput from "../../../components/edit/Input/ProjectInput";
import SkillInput from "../../../components/edit/Input/SkillInput";
import ImageUploadInput from "../../../components/edit/Input/ImageUploadInput";
import BeforeButton from "../../../components/edit/Button/BeforeButton";
import FinishButton from "../../../components/edit/Button/FinishButton";

const Reason = () => {
  return (
    <>
      <StyledInformation>
        <ReasonInput />
        <ProjectInput />
        <SkillInput />
        <ImageUploadInput />
      </StyledInformation>
      <WrapperWrapperWrapper>
        <BeforeButton />
        <FinishButton />
      </WrapperWrapperWrapper>
    </>
  );
};

export default Reason;

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-left: 119px;
`;

const WrapperWrapperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 35px;
  padding-bottom: 44px;
`;
