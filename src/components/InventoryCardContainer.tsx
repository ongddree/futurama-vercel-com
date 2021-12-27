import styled from "@emotion/styled";
import { Error, Loading, InventoryCard } from ".";
import { useData } from "../hooks/useData";
import { InventoryType } from "../types/InventoryType";

interface ContainerProps {
  subject: string;
}

export const InventoryCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((inventory: InventoryType) => {
        return (
          <InventoryCard
            inventoryData={inventory}
            key={`inventory-${inventory.id}`}
          ></InventoryCard>
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
