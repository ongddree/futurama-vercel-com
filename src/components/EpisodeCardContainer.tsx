import styled from "@emotion/styled";
import { Error, Loading, EpisodeCard } from ".";
import { useData } from "../hooks/useData";
import { EpisodeType } from "../types/EpisodeType";

interface ContainerProps {
  subject: string;
}

export const EpisodeCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((episode: EpisodeType) => {
        return (
          <EpisodeCard
            episodeData={episode}
            key={`episode-${episode.id}`}
          ></EpisodeCard>
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
