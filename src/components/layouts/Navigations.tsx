import Link from "next/link";
import { ROUTES } from "../../constants";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import logo from "../../assets/futurama_logo.png";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <header>
      <nav>
        <Navlist>
          <Link href="/" passHref>
            <a>
              <Logo src={logo.src}></Logo>
            </a>
          </Link>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`navi-${routeObject.ID}`}>
                <Link href={routeObject.PATH} passHref>
                  <Linkbtn>{routeObject.LABEL}</Linkbtn>
                </Link>
              </li>
            );
          })}
        </Navlist>
      </nav>
    </header>
  );
};

const boxFade = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const Navlist = styled.ul`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 40px 0;
  list-style: none;
  height: 100vh;
  animation: ${boxFade} 3s;
`;

const Linkbtn = styled.a`
  display: block;
  text-align: center;
  padding: 10px 0;
  width: 150px;
  border-radius: 10px;
  color: #370665;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;

  &:hover {
    background: #fc9918;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;
