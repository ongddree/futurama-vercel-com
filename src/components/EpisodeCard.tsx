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
