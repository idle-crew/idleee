import React, { useState } from "react";
import styled from "styled-components";

const ImageUploadInput = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleFileRemove = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <Container>
      <Label>이미지</Label>
      <Description>프로젝트를 한 눈에 볼 수 있는 이미지면 좋아요!</Description>
      <UploadWrapper>
        <FileInputLabel htmlFor="file-upload">파일 업로드</FileInputLabel>
        <FileInput
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </UploadWrapper>
      <FileListWrapper>
        {files.map((file, index) => (
          <FileItem key={index}>
            <FileName>{file.name}</FileName>
            <RemoveButton onClick={() => handleFileRemove(index)}>
              삭제
            </RemoveButton>
          </FileItem>
        ))}
      </FileListWrapper>
    </Container>
  );
};

export default ImageUploadInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #b9b9bc;
`;

const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 16px 66px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 1px solid #b9b9bc;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444444;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FileItem = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d2d2d;
  border-radius: 8px;
  padding: 10px 15px;
  color: white;
`;

const FileName = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #b9b9bc;
  word-break: break-word;
  flex: 1;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #f72798;
  color: #f72798;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f72798;
    color: white;
  }
`;
