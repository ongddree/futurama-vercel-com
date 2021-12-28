import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { CharacterType } from "../types/CharacterType";

interface CharacterCardProps {
  characterData: CharacterType;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
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
  } = characterData;

  return (
    <Card key={`character-${id}`}>
      <Profile src={images.main} alt="" />
      <h1>
        {name.first} <br /> {name.middle} {name.last}
      </h1>
      <p>home planet: {homePlanet}</p>
      <p>age: {age}</p>
      <p>gender:{gender}</p>
      <p>occupation: {occupation}</p>
      {/* <p>saying: {sayings[0]}</p> */}
      <p>species: {species}</p>
    </Card>
  );
};

const typing = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

// animation: ${typing} 3s steps(51);

const Card = styled.div`
  min-width: 250px;
  max-width: 300px;
  padding: 30px;
  word-break: break-all;
  background: #fc9918;
  border-radius: 20px;
  filter: grayscale(90%);
  position: relative;

  p {
    height: 20px;
    color: transparent;
    overflow: hidden;
  }

  &:hover {
    filter: grayscale(0%);
    transition-property: grayscale;
    transition: ease-in-out all 0.5s;

    p {
      color: black;
      animation: ${typing} 3s steps(71);
    }
  }
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
