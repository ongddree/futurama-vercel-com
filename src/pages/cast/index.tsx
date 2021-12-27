import type { NextPage } from "next";
import { CastCardContainer } from "../../components/CastCardContainer";

const CastIndexPage: NextPage = () => {
  const subject = "cast";
  return (
    <div>
      <CastCardContainer subject={subject} />
    </div>
  );
};

export default CastIndexPage;
