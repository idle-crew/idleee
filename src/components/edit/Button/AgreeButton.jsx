import styled from "styled-components";

const AgreeButton = ({ name, isActive, onClick }) => {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default AgreeButton;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
  background-color: ${(props) => (props.isActive ? "#F72798" : "#282b34")};
  font-size: 16px;
  font-weight: 400;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
