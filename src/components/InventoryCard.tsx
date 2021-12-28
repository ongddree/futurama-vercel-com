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
      <p>title : {title}</p>
      <p>category: {category}</p>
      <p>description: {description}</p>
      <p>slogan: {slogan}</p>
      <p>price: {price}</p>
      <p>stock: {stock}</p>
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
