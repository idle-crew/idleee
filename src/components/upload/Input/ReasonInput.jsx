import styled from "styled-components";
import { useState } from "react";

const ReasonInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Label>판매 이유</Label>
      <Wrapper>
        <StyledTextArea
          placeholder="판매하려는 이유를 알려주세요."
          maxLength={150}
          value={inputValue}
          onChange={handleChange}
        />
        <CharacterCount>{inputValue.length}/150</CharacterCount>
      </Wrapper>
    </Container>
  );
};

export default ReasonInput;

const Container = styled.div`
  width: 840.18px;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  width: 855px;
  height: 115px;
  background-color: #2d2d2d;
  border: none;
  border-radius: 8px;
  padding: 16px 21px;
  color: white;
  font-size: 20px;
  resize: none;
  outline: none;

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
