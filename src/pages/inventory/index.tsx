import type { NextPage } from 'next';
import { InventoryCardContainer } from '../../components/InventoryCardContainer';

const InventoryIndexPage: NextPage = () => {
  const subject = 'inventory';
  return (
    <div>
      <InventoryCardContainer subject={subject} />
    </div>
  );
};

export default InventoryIndexPage;
