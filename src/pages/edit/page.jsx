import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import { SwitchCase } from "@toss/react";
import { useEditStepValueStore } from "../../stores/edit/editStep";
import Information from "./information/information";
import Reason from "./reason/reason";

const Edit = () => {
  const editStep = useEditStepValueStore();

  return (
    <StyledEditPage>
      <Header />
      <SwitchCase
        value={editStep}
        caseBy={{
          상품정보: <Information />,
          이유: <Reason />,
        }}
        defaultComponent={<Information />}
      />
    </StyledEditPage>
  );
};

export default Edit;

const StyledEditPage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  padding-top: 116px;
`;
