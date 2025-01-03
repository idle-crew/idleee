import styled from "styled-components";
import { Link } from "react-router-dom";

const UploadButton = () => {
  return <StyledUploadButton to="/upload">프로젝트 업로드</StyledUploadButton>;
};

export default UploadButton;

const StyledUploadButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 41px;
  background-color: #f72798;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;
