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
      <p>{id}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;
