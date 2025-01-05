import { useState } from "react";
import styled from "styled-components";
import IconArrow from "../../../icons/IconArrow";

const categories = ["웹사이트", "웹앱", "모바일 앱", "반응형"];

const TypeDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("종류를 선택해주세요.");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectCategory = (category) => {
    setSelectedType(category);
    setIsOpen(false);
  };

  return (
    <Container>
      <Label>종류</Label>
      <DropDownContainer isOpen={isOpen}>
        <DropDownHeader onClick={toggleDropdown}>
          <SelectedText>{selectedType}</SelectedText>
          <Arrow isOpen={isOpen}>
            <IconArrow />
          </Arrow>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {categories.map((category, index) => (
              <DropDownItem
                key={index}
                onClick={() => handleSelectCategory(category)}
              >
                {category}
              </DropDownItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </Container>
  );
};

export default TypeDropDown;

const Container = styled.div`
  width: 488px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const DropDownContainer = styled.div`
  width: 488px;
  background-color: #333333;
  border-radius: ${(props) => (props.isOpen ? "10px 10px 0 0" : "10px")};
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  transition: border-radius 0.3s ease;
`;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 21px;
  cursor: pointer;
`;

const SelectedText = styled.div`
  color: #cccccc;
`;

const Arrow = styled.div`
  font-size: 14px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const DropDownList = styled.ul`
  margin: 0;
  padding: 10px 0;
  list-style: none;
  background-color: #333333;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 100%;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropDownItem = styled.li`
  padding: 10px 21px;
  cursor: pointer;
  &:hover {
    background-color: #444444;
  }
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 500;
  color: white;
  padding-bottom: 15px;
`;
