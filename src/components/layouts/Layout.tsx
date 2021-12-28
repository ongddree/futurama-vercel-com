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
  min-height: 100vh;
`;

const Main = styled.div`
  width: calc(100% - 80px);
`;
