import styled from "styled-components";
import { useState } from "react";

const SkillInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Label>기술스택</Label>
      <Wrapper>
        <InputWrapper>
          <StyledNameInput
            placeholder="사용한 기술 스택을 알려주세요."
            maxLength={100}
            value={inputValue}
            onChange={handleChange}
          />
        </InputWrapper>
        <CharacterCount>{inputValue.length}/100</CharacterCount>
      </Wrapper>
    </Container>
  );
};

export default SkillInput;

const Container = styled.div`
  width: 855px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 500;
  color: white;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  flex: 1;
  background-color: #2d2d2d;
  border-radius: 8px;
  padding: 0 21px;
`;

const StyledNameInput = styled.input`
  width: 100%;
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
  margin-left: 16px;
  white-space: nowrap;
`;
