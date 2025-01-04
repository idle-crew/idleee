import styled from "styled-components";
import IconLogo from "../../../icons/IconLogo";
import { Storage } from "../../../apis/storage/storage";
import Profile from "../Profile/Profile";
import LoginButton from "../LoginButton/LoginButton";
import { Link } from "react-router-dom";

const Header = () => {
  const token = Storage.getItem("access-token");

  return (
    <StyledHeader>
      <IconWrapper to="/">
        <IconLogo width={63} height={28} />
      </IconWrapper>
      <ProfileWrapper>{token ? <Profile /> : <LoginButton />}</ProfileWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 82px;
  background: linear-gradient(0deg, #191919 0%, #3d3d3d 100%);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 120px;
  max-width: 1440px;
  margin: 0 auto;
`;

const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
