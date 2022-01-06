import Link from "next/link";
import { ROUTES } from "../../constants";
import styled from "@emotion/styled";

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
              <Logo src="assets/futurama_logo.png"></Logo>
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

const Navlist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  list-style: none;
  margin: 0;
  color: #442f73;
`;

const Linkbtn = styled.a`
  padding: 15px 7px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
  display: inline-block;
  transition: ease-in-out 0.3s;

  &:hover {
    color: #9440de;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #9440de;
    display: block;
    -webkit-transform-origin: right top;
    -ms-transform-origin: right top;
    transform-origin: right top;
    -webkit-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  &:hover::before {
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`;

const Logo = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  filter: hue-rotate(90deg);
  transition: ease-in-out 0.2s;

  &:hover {
    filter: hue-rotate(280deg);
  }
`;
