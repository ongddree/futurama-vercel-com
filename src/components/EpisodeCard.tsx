import styled from "@emotion/styled";
import { EpisodeType } from "../types/EpisodeType";

interface EpisodeCardProps {
  episodeData: EpisodeType;
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
  const { number, title, writers, originalAirDate, desc, id } = episodeData;

  return (
    <Card key={`episode-${id}`}>
      <p>{number}</p>
      <p>{title}</p>
      <p>{writers}</p>
      <p>{originalAirDate}</p>
      <p>{desc}</p>
      <p>{id}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
