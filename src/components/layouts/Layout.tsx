import React from "react";
styled;
import { Navigation } from "./Navigations";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrap>
      <Navigation />
      <Main>{children}</Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #f14a16;
  display: flex;
`;

const Main = styled.div`
  // min-width: 100vw;
  width: calc(100% - 80px);
`;
