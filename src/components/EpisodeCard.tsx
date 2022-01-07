import styled from "@emotion/styled";
import { EpisodeType } from "../types/EpisodeType";
import Link from "next/link";
import { SEARCH_ENDPOINT } from "../constants";

interface EpisodeCardProps {
  episodeData: EpisodeType;
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
  const { number, title, writers, originalAirDate, desc, id } = episodeData;

  const queryTitle = title.replaceAll(" ", "+");

  return (
    <>
      <Card key={`episode-${id}`}>
        <td>{number}</td>
        <td>{title}</td>
        <td>{writers}</td>
        {/* <td>{originalAirDate}</td> */}

        <Linkdata>
          <Link href={`${SEARCH_ENDPOINT}${queryTitle}`} passHref>
            <a target="_blank">VIEW</a>
          </Link>
        </Linkdata>
        {/* <p>{desc}</p> */}
        {/* <p>{id}</p> */}
      </Card>
    </>
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

const Linkdata = styled.td`
  a {
    width: 100%;
    display: block;
    padding: 10px;
    transition: ease-in-out 0.2s;
  }

  a: hover {
    color: #0ea144;
    background: #ffad2c;
  }
`;
