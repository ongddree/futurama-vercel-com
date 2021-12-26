import styled from "@emotion/styled";
import { Character } from "../types/characters";

interface CharacterCardProps {
  characterData: Character;
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
        {name.first} {name.middle} {name.last}
      </h1>
      <p>home planet: {homePlanet}</p>
      <p>age: {age}</p>
      <p>gender:{gender}</p>
      <p>occupation: {occupation}</p>
      <p>sayings: {sayings[0]}</p>
      <p>species: {species}</p>
    </Card>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
