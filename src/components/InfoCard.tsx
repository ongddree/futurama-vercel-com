import styled from "@emotion/styled";
import { InfoType } from "../types/InfoType";

interface InfoCardProps {
  infoData: InfoType;
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
  const { synopsis, yearsAired, creators, id } = infoData;

  return (
    <Card key={`info-${id}`}>
      <p>{synopsis}</p>
      <p>{yearsAired}</p>
      <p>{creators[0].name}</p>
      <p>{creators[0].url}</p>
      <p>{id}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
