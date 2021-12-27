import styled from "@emotion/styled";
import { Error, Loading, InfoCard } from ".";
import { useData } from "../hooks/useData";
import { InfoType } from "../types/InfoType";

interface ContainerProps {
  subject: string;
}

export const InfoCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((info: InfoType) => {
        return <InfoCard infoData={info} key={`info-${info.id}`}></InfoCard>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
