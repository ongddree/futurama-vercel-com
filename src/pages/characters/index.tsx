import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/CharacterCardContainer";

const CharacterIndexPage: NextPage = () => {
  const subject = "characters";
  return (
    <div>
      <CharacterCardContainer subject={subject} />
    </div>
  );
};

export default CharacterIndexPage;
