import type { NextPage } from "next";
import { InfoCardContainer } from "../../components/InfoCardContainer";

const InfoIndexPage: NextPage = () => {
  const subject = "info";
  return (
    <div>
      <InfoCardContainer subject={subject} />
    </div>
  );
};

export default InfoIndexPage;
