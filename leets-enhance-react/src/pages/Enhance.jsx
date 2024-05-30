import Header from "../components/Header";
import card from "../assets/card.png";
import message from "../assets/message.png";
import { flexAlignCenter } from "../styles/common.style";
import styled from "styled-components";
import bigSword from "../assets/bigSword.png";
import Button from "../components/Button";
import { SDiv } from "../components/Sword";
const Enhance = () => {
  return (
    <SDiv>
      <Header
        title={"박보검"}
        leftChild={<img src={message} alt="message" />}
        rightChild={<img src={card} alt="card" />}
      />

      <img src={bigSword} alt="bigSword" />
      <Button text={"강화하기"} />
    </SDiv>
  );
};

export default Enhance;
