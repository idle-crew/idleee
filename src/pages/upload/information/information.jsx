import styled from "styled-components";
import NameInput from "../../../components/upload/Input/NameInput";
import PriceInput from "../../../components/upload/Input/PriceInput";
import AgreeButton from "../../../components/upload/Button/AgreeButton";
import { useState } from "react";
import NextButton from "../../../components/upload/Button/NextButton";
import DivisionInput from "../../../components/upload/Input/DivisionInput";
import CategoryDropDown from "../../../components/upload/DropDown/CategoryDropDown";
import TypeDropDown from "../../../components/upload/DropDown/TypeDropDown";

const Information = () => {
  const [activeButton, setActiveButton] = useState("협의불가");

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  return (
    <>
      <StyledInformation>
        <NameInput />
        <WrapperWrapper>
          <PriceInput />
          <Wrapper>
            <AgreeButton
              name="협의불가"
              isActive={activeButton === "협의불가"}
              onClick={() => handleButtonClick("협의불가")}
            />
            <AgreeButton
              name="협의가능"
              isActive={activeButton === "협의가능"}
              onClick={() => handleButtonClick("협의가능")}
            />
          </Wrapper>
        </WrapperWrapper>
        <DivisionInput />
        <CategoryDropDown />
        <TypeDropDown />
      </StyledInformation>
      <WrapperWrapperWrapper>
        <NextButton />
      </WrapperWrapperWrapper>
    </>
  );
};

export default Information;

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-left: 119px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

const WrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const WrapperWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
