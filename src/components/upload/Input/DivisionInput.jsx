import styled from "styled-components";

const DivisionInput = () => {
  return (
    <Container>
      <Label>수익분배</Label>
      <Wrapper>
        <InputWrapper>
          <StyledNameInput placeholder="분배 비율" />
        </InputWrapper>
        <Persent>%</Persent>
      </Wrapper>
    </Container>
  );
};

export default DivisionInput;

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
  padding-right: 21px;
`;

const StyledNameInput = styled.input`
  width: 75.01px;
  height: 50px;
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Persent = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 500;
`;
