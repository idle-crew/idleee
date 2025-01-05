import styled from "styled-components";

const PostItem = ({ onClick }) => {
  return (
    <StyledPostItem onClick={onClick}>
      <StyledImage />
      <StyledTitle>마루</StyledTitle>
      <Wrapper>
        <StyledCost>900원</StyledCost>
        <StyledDiscussion>협의 가능</StyledDiscussion>
      </Wrapper>
      <StyledCondition>N빵</StyledCondition>
      <StyledDescrip>
        번거로운 오프라인 서류 처리 없이 온라인으로 원서를 접수받고 관리할 수
        있는 입학 전형 서비스입니다.
      </StyledDescrip>
      <CategoryWrapper>
        <StyledCategory>교과</StyledCategory>
        <StyledDate>12월 12일</StyledDate>
      </CategoryWrapper>
    </StyledPostItem>
  );
};

export default PostItem;

const StyledPostItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.div`
  width: 367px;
  height: 254px;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 10px;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

const StyledCost = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const StyledDiscussion = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

const StyledCondition = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const StyledDescrip = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 18px;
  max-width: 367px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

const CategoryWrapper = styled.div`
  width: 367px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledCategory = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  border-radius: 5px;
  background-color: transparent;
  color: #f72798;
  border: 1px solid #f72798;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 9px;
  width: fit-content;
  white-space: nowrap;
`;

const StyledDate = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 400;
`;
