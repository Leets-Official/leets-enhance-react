import { flexCenter } from "../styles/common.style";
import styled from "styled-components";
const Button = ({ text, onClick }) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};

export default Button;

export const SButton = styled.button`
  ${flexCenter}
  background-color: rgb(196, 195, 195);
  padding: 15px 45px;
  border-radius: 15px;
  border: none;
  width: auto;
  margin: 0 auto;
  color: black;
`;
