import styled from "@emotion/styled";
import { InventoryType } from "../types/InventoryType";

interface InventoryCardProps {
  inventoryData: InventoryType;
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
  const { title, category, description, slogan, price, stock, id } =
    inventoryData;

  return (
    <Card key={`inventory-${id}`}>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{id}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
