import styled from "styled-components";
import { useState } from "react";

const ProjectInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Label>프로젝트 설명</Label>
      <Wrapper>
        <StyledTextArea
          placeholder="프로젝트에 대해 알 수 있도록 설명해주세요."
          maxLength={1000}
          value={inputValue}
          onChange={handleChange}
        />
        <CharacterCount>{inputValue.length}/1,000</CharacterCount>
      </Wrapper>
    </Container>
  );
};

export default ProjectInput;

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
