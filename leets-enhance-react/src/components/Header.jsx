import styled from "styled-components";
import { flexAlignCenter, title } from "../styles/common.style";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <SHeader>
      <SDiv position="left">{leftChild}</SDiv>
      <SDiv position="center">{title}</SDiv>
      <SDiv position="right">{rightChild}</SDiv>
    </SHeader>
  );
};

export default Header;

export const SHeader = styled.header`
  ${title};
  padding-top: 40px;
  ${flexAlignCenter}
`;

const SDiv = styled.div`
  width: ${(props) => (props.position === "center" ? "300px" : "150px")};
  justify-content: ${(props) => {
    switch (props.position) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  }};
`;
