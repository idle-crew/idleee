import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostItem from "../PostItem/PostItem";

const PostList = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <StyledPostList>
      {posts.map((post, index) => (
        <PostItem key={index} onClick={() => handlePostClick(index)} />
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
