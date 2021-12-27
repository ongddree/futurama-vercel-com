import type { NextPage } from "next";
import { EpisodeCardContainer } from "../../components/EpisodeCardContainer";

const EpisodesIndexPage: NextPage = () => {
  const subject = "episodes";
  return (
    <div>
      <EpisodeCardContainer subject={subject} />
    </div>
  );
};

export default EpisodesIndexPage;
