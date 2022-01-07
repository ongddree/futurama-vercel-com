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
      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>title</th>
            <th>writers</th>
            <th>youtube</th>
          </tr>
        </thead>
        <tbody>
          {data.map((episode: EpisodeType) => {
            return (
              <EpisodeCard
                episodeData={episode}
                key={`episode-${episode.id}`}
              ></EpisodeCard>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  width: 800px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 18px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(143, 48, 112, 1) 100%
    );

    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      0deg,
      rgba(148, 64, 222, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    border-radius: 11px;
    box-shadow: inset 0px 0px 8px purple;
  }
`;

const Table = styled.table`
  margin-top: 20px;
  th {
    color: #9440de;
    text-transform: capitalize;
    font-size: 18px;
    background: #ffad2c;
  }

  th,
  td {
    border: 1px solid #9440de;
    padding: 10px;
    border-spacing: 10px;
  }

  td:last-child {
    padding: 0;
    background: #0ea144;
    color: #ffad2c;
  }
`;
