import styled from "styled-components";
import { useState } from "react";

const NameInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Label>판매가격</Label>
      <Wrapper>
        <InputWrapper>
          <StyledNameInput
            placeholder="판매 가격을 작성해주세요."
            maxLength={6}
            value={inputValue}
            onChange={handleChange}
          />
        </InputWrapper>
        <CharacterCount>{inputValue.length}/6</CharacterCount>
      </Wrapper>
    </Container>
  );
};

export default NameInput;

const Container = styled.div`
  width: 488px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 500;
  color: white;
  padding-bottom: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #2d2d2d;
  border-radius: 8px;
  padding-left: 21px;
`;

const StyledNameInput = styled.input`
  width: 488px;
  height: 51px;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #b9b9bc;
    font-size: 20px;
    font-weight: 400;
  }
`;

const CharacterCount = styled.span`
  font-size: 18px;
  color: #b9b9bc;
  margin-left: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
