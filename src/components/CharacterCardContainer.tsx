import styled from "@emotion/styled";
import { Error, Loading, CharacterCard } from ".";
import { useData } from "../hooks/useData";
import { CharacterType } from "../types/CharacterType";
import React, { useState } from "react";
import { keyframes } from "@emotion/react";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContainerProps {
  subject: string;
}

export const CharacterCardContainer = ({ subject }: ContainerProps) => {
  const [current, setCurrent] = useState(0);

  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const {
    age,
    gender,
    homePlanet,
    id,
    name,
    images,
    occupation,
    sayings,
    species,
  } = data;

  const handleForward = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (current > 12) setCurrent((current) => (current = 0));
    else setCurrent((current) => current + 1);
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (current > 0) setCurrent((current) => current - 1);
    else setCurrent((current) => (current = 13));
  };

  return (
    <Container>
      <Card key={`character-${data[current].id}`}>
        <Profile src={data[current].images.main} alt="" />

        <Desc>
          <h1>
            {data[current].name.first} {data[current].name.middle}{" "}
            {data[current].name.last}
          </h1>
          <p>Home Planet : {data[current].homePlanet}</p>
          <p>Age : {data[current].age}</p>
          <p>Gender : {data[current].gender}</p>
          <p>Occupation : {data[current].occupation}</p>
          <p>Saying : {data[current].sayings[0]}</p>
        </Desc>
        <Btnwrap>
          <button onClick={handleBack}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} color="white" size="3x" />
          </button>

          <button onClick={handleForward}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              color="white"
              size="3x"
            />
          </button>
        </Btnwrap>
      </Card>
    </Container>
  );
};

const colorChange = keyframes`
  // 0% { filter: hue-rotate(30deg);}
  // 15% { filter: hue-rotate(70deg); }
  // 30% { filter: hue-rotate(100deg);}
  // 45% {filter: hue-rotate(140deg); }
  // 60% {filter: hue-rotate(190deg); }
  // 75% { filter: hue-rotate(240deg); }
  // 90% { filter: hue-rotate(300deg); } 
  // 100% {filter: hue-rotate(330deg); }

  0% { filter: hue-rotate(30deg); }
  15% { filter: hue-rotate(190deg); }
  30% { filter: hue-rotate(90deg);}
  45% {filter: hue-rotate(140deg); }
  60% {filter: hue-rotate(120deg); }
  75% { filter: hue-rotate(280deg); }
  90% { filter: hue-rotate(50deg); } 
  100% {filter: hue-rotate(150deg); }
`;

const typing = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  margin: 0 auto;
`;

const Card = styled.section`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 70px;
  align-items: top;
  position: relative;
`;

const Desc = styled.article`
  justify-self: start;
  font-size: 20px;
  word-break: break-all;
  margin-top: 35px;
  color: #9440de;

  h1 {
    color: transparent;
    overflow: hidden;
    height: 30px;
    & {
      color: #9440de;
      animation: ${typing} 3s steps(71);
    }
  }

  p {
    font-size: 18px;
    font-weight: 700;
    height: 21px;
    overflow: hidden;
    & {
      color: #8e6abd;
      animation: ${typing} 2.5s steps(71);
    }
  }
`;

const Profile = styled.img`
  display: block;
  height: 370px;
  justify-self: end;
  transition: ease-in-out 0.3s;
  filter: hue-rotate(30deg);

  &:hover {
    animation: ${colorChange} 3s infinite;
    animation-direction: alternate;
  }
`;

const Btnwrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 25px;
  top: 34%;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    transition: ease-in-out 0.3s;

    svg {
      transition: ease-in-out 0.3s;
    }
  }

  button:nth-child(1):hover {
    transform: translateX(-15%);

    svg {
      color: #ffad2c;
    }
  }

  button:nth-child(2):hover {
    transform: translateX(15%);
    svg {
      color: #ffad2c;
    }
  }
`;
