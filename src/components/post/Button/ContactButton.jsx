import styled from "styled-components";

const ContactButton = () => {
  return <StyledButton>CONTACT</StyledButton>;
};

export default ContactButton;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 47px;
  background-color: #f72798;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
