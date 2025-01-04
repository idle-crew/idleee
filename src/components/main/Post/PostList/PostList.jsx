import styled from "styled-components";
import PostItem from "../PostItem/PostItem";

const PostList = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <StyledPostList>
      {posts.map((post, index) => (
        <PostItem key={index} />
      ))}
    </StyledPostList>
  );
};

export default PostList;

const StyledPostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px 47px;
  justify-content: center;
  padding: 20px;
`;
