import styled from "styled-components";
import UploadButton from "../UploadButton/UploadButton";

const Profile = () => {
  return (
    <StyledProfile>
      <UploadButton />
      <StyledProfileImage
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_l79k8QHVv5CZBiAJKFJ5TqIjpOfUVNxylrYKwGs2NuqTy2crDPBuD5DIUOnapTqat0&usqp=CAU"
        }
        alt="Profile"
      />
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const StyledProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 5px;
  object-fit: cover;
`;
