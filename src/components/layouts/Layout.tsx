import React from "react";
styled;
import { Navigation } from "./Navigations";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrap>
      <Container>
        <Navigation />
        <Main>{children}</Main>
      </Container>
    </Wrap>
  );
};
const boxFade = keyframes`
  from {
      opacity: 0.5;
      transform: translate(-50%, -40%);
  }
  to {
      opacity: 1;
      transform: translate(-50%, -50%);
  }
`;

const Wrap = styled.div`
  position: relative;
  &:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url("/assets/space_2.webp");
    z-index: 10;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 1000px;
  height: 600px;
  border-radius: 40px;
  padding: 30px;
  background: #07d962;

  background: linear-gradient(
    90deg,
    rgba(7, 217, 98, 1) 0%,
    rgba(22, 169, 215, 1) 100%
  );

  animation: ${boxFade} 1.5s;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.65);
`;

const Main = styled.div``;
