import Header from "../components/Header";
import bigSword from "../assets/bigSword.png";
import Button from "../components/Button";
import { SDiv } from "../components/Sword";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const nav = useNavigate();

  return (
    <Div>
      <Header title={"검의 이름을 입력해주세요"} />
      <div>
        <img src={bigSword} alt="bigSword" />
      </div>
      <Sinput placeholder="ex) 박보검" />
      <Button text={"이름짓기"} onClick={() => nav("/enhance")} />
    </Div>
  );
};

export default Create;

const Div = styled(SDiv)`
  gap: 50px;
`;

const Sinput = styled.input`
  border: none;
  border-bottom: 7px solid rgb(206, 205, 205);
  text-align: center;
  width: 200px;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;
