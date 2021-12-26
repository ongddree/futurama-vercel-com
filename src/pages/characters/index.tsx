import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);
const CharacterIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  console.log(data);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        const {
          age,
          gender,
          homePlanet,
          id,
          images,
          name,
          occupation,
          sayings,
          species,
        } = character;

        return (
          <Card key={`character-${id}`}>
            <Profile src={images.main} alt="" />
            <h1>
              {name.first} {name.middle} {name.last}
            </h1>
            <p>home planet: {homePlanet}</p>
            <p>age: {age}</p>
            <p>gender:{gender}</p>
            <p>occupation: {occupation}</p>
            <p>sayings: {sayings[0]}</p>
            <p>species: {species}</p>
          </Card>
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

const Card = styled.div`
  max-width: 300px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 20px;
`;

const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: contain;
`;

export default CharacterIndexPage;
