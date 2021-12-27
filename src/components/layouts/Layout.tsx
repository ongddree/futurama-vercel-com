import React from "react";
styled;
import { Navigation } from "./Navigations";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrap>
      <Navigation />
      <main>{children}</main>
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #f14a16;
  display: flex;
`;
