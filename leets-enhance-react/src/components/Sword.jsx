import smallSword from "../assets/smallSword.png";
import bar from "../assets/bar.png";
import styled from "styled-components";
import { flexAlignCenter } from "../styles/common.style";
import theme from "../styles/theme.style";

const Sword = ({ swordName, userName, RankImage }) => {
  return (
    <SDiv>
      {RankImage && <img src={RankImage} alt="RankImage" />}
      <SImg src={smallSword} alt="smallSword" />
      <SwordName>{swordName}</SwordName>
      <img src={bar} alt="bar" />
      <UserName>{userName}</UserName>
    </SDiv>
  );
};

export default Sword;

export const SDiv = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  padding: 30px;
`;

const SImg = styled.img`
  margin-top: 20px;
`;

const SwordName = styled.p`
  margin: 5px 0;
`;

const UserName = styled.p`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;
