import styled from "styled-components";
import { flexAlignCenter, flexCenter, title } from "../styles/common.style";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { swordList } from "../utils/constants";
import Sword from "../components/Sword";
import Rank1 from "../assets/Rank1.png";
import Rank2 from "../assets/Rank2.png";
import Rank3 from "../assets/Rank3.png";
const Rank = () => {
  const nav = useNavigate();

  const onClickToLogin = () => {
    nav("/login");
  };
  return (
    <>
      <Wrapper>
        <Header
          title={"명예의 전당"}
          leftChild={
            <Button text={"로그인 하러가기"} onClick={onClickToLogin} />
          }
          rightChild={
            <Button text={"강화하러 가기"} onClick={() => nav("/Create")} />
          }
        />
      </Wrapper>
      <div></div>
      <SDiv>
        <div>
          <Sword
            key={swordList[1].swordId}
            swordName={swordList[1].swordName}
            userName={swordList[1].userName}
            RankImage={Rank2}
          />
        </div>
        <div>
          <Sword
            key={swordList[0].swordId}
            swordName={swordList[0].swordName}
            userName={swordList[0].userName}
            RankImage={Rank1}
          />
        </div>
        <div>
          <Sword
            key={swordList[2].swordId}
            swordName={swordList[2].swordName}
            userName={swordList[2].userName}
            RankImage={Rank3}
          />
        </div>
      </SDiv>
      <SwordContainer>
        {swordList.slice(3).map((sword) => (
          <Sword
            key={sword.swordId}
            swordName={sword.swordName}
            userName={sword.userName}
          />
        ))}
      </SwordContainer>
    </>
  );
};

export default Rank;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  ${flexCenter}
  flex-direction: column;
`;

export const SDiv = styled.div`
  ${flexCenter}
  margin-top: 30px;
`;

const SwordContainer = styled.div`
  ${flexAlignCenter}
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
