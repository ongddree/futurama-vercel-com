import styled from "@emotion/styled";
import axios from "axios";
import useSWR from "swr";
import { Character } from "../types/characters";
import { CharacterCard } from "./CharacterCard";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export const CharacterCardContainer = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  console.log(data);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

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
