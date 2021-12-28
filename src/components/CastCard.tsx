import styled from "@emotion/styled";
import { CastType } from "../types/CastType";

interface CastCardProps {
  castData: CastType;
}

export const CastCard = ({ castData }: CastCardProps) => {
  const { name, born, died, bio, id } = castData;

  return (
    <Card key={`cast-${id}`}>
      <p>{name}</p>
      <p>{born}</p>
      <p>{died}</p>
      <p>{bio.text}</p>
      <p>{bio.url}</p>
    </Card>
  );
};

const Card = styled.div`
  padding: 30px;
  word-break: break-all;
  background: #fc9918;
  border-radius: 20px;
  filter: grayscale(90%);
  position: relative;

  &:hover {
    filter: grayscale(0%);
    transition-property: grayscale;
    transition: ease-in-out all 0.5s;
  }
`;
