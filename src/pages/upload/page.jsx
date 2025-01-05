import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import { SwitchCase } from "@toss/react";
import { useUploadStepValueStore } from "../../stores/upload/uploadStep";
import Information from "./information/information";
import Reason from "./reason/reason";

const Upload = () => {
  const uploadStep = useUploadStepValueStore();

  return (
    <StyledUploadPage>
      <Header />
      <SwitchCase
        value={uploadStep}
        caseBy={{
          상품정보: <Information />,
          이유: <Reason />,
        }}
        defaultComponent={<Information />}
      />
    </StyledUploadPage>
  );
};

export default Upload;

const StyledUploadPage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  padding-top: 116px;
`;
