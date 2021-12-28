import styled from "@emotion/styled";
import { Error, Loading, CharacterCard } from ".";
import { useData } from "../hooks/useData";
import { CharacterType } from "../types/CharacterType";

interface ContainerProps {
  subject: string;
}

export const CharacterCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((character: CharacterType) => {
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
  padding: 50px;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 20px;
  width: 790px;
  margin: 0 auto;
`;
