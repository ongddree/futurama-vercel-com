import styled from "@emotion/styled";
import { Error, Loading, CastCard } from ".";
import { useData } from "../hooks/useData";
import { CastType } from "../types/CastType";

interface ContainerProps {
  subject: string;
}

export const CastCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((cast: CastType) => {
        return <CastCard castData={cast} key={`cast-${cast.id}`}></CastCard>;
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
