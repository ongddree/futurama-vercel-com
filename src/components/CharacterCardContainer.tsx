import styled from "@emotion/styled";
import { CharacterCard } from "./CharacterCard";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useCharacterData } from "../hooks/useCharacterData";
import { Character } from "../types/characters";

export const CharacterCardContainer = () => {
  const { data, error } = useCharacterData();

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((character: Character) => {
        return (
          <CharacterCard
            characterData={character}
            key={`character-${character.id}`}
          ></CharacterCard>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
