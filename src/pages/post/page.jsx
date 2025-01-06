import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import ContactButton from "../../components/post/Button/ContactButton";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMoveEditPage = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <StyledPostDetailPage>
        <Header />
        <WrapperWrapper>
          <Wrapper>
            <StyledImage />
            <StyledImage />
          </Wrapper>
          <Container>
            <StyledTitle>마루</StyledTitle>
            <ETCButton onClick={handleMoveEditPage}>수정</ETCButton>
            <ETCButton>삭제</ETCButton>
          </Container>
          <ETCButton>개발자・정홍섭</ETCButton>
          <WrapperWrapperWrapperWrapper>
            <WrapperWrapperWrapper>
              <StyledCost>900,000,000원</StyledCost>
              <StyledDiscussion>협의 가능</StyledDiscussion>
            </WrapperWrapperWrapper>
            <StyledCondition>N빵</StyledCondition>
          </WrapperWrapperWrapperWrapper>
          <StyledCategory>교과</StyledCategory>
          <Contain>
            <StyledH2>판매 이유</StyledH2>
            <StyledContent>
              열심히 피 땀 흘려 만든 ‘마루'가 쓰임있는 곳에서 도움이 되었으면
              합니다.
              <br />
              취업 후, 더이상 운영이 불가하기에 ‘마루'가 필요한 곳에 판매합니다.
            </StyledContent>
          </Contain>
          <Contain>
            <StyledH2>프로젝트 설명</StyledH2>
            <StyledContent>그냥 열심히 진행한 프로젝트</StyledContent>
          </Contain>
          <Contain>
            <StyledH2>기술 스택</StyledH2>
            <StyledContent>Next.js 짱, 스프링</StyledContent>
          </Contain>
        </WrapperWrapper>
      </StyledPostDetailPage>
      <FixedButtonContainer>
        <ContactButton />
      </FixedButtonContainer>
    </>
  );
};

export default PostDetail;

const StyledPostDetailPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 123px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: black;
  padding-bottom: 90px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 11px;
`;

const StyledImage = styled.div`
  width: 594px;
  height: 461px;
  background-color: gray;
`;

const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const WrapperWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`;

const StyledCost = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: white;
`;

const StyledDiscussion = styled.div`
  color: #d4d4d4;
  font-size: 22px;
  font-weight: 400;
`;

const WrapperWrapperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
`;

const StyledCondition = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

const WrapperWrapperWrapperWrapper = styled.div`
  gap: 6px;
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
  margin-bottom: 26px;
`;

const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const StyledH2 = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: white;
`;

const StyledContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 52px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 20px;
`;

const ETCButton = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #d4d4d4;
`;
