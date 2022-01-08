import styled from '@emotion/styled';
import { InventoryType } from '../types/InventoryType';

interface InventoryCardProps {
  inventoryData: InventoryType;
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
  const { title, category, price, stock, id } = inventoryData;

  return (
    <Card key={`inventory-${id}`}>
      <td>{title}</td>
      <td>{category}</td>
      <td>{price}$</td>
      <td>{stock}</td>
    </Card>
  );
};

const Card = styled.tr`
  text-align: center;

  td {
    color: #8e6abd;
    font-weight: 700;
    font-size: 15px;
  }
`;
