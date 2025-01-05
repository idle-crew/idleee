import Header from "../../components/common/Header/Header";
import styled from "styled-components";
import PostList from "../../components/main/Post/PostList/PostList";

const Main = () => {
  return (
    <StyledMainPage>
      <Header />
      <PostList />
    </StyledMainPage>
  );
};

export default Main;

const StyledMainPage = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding-bottom: 133px;
`;
