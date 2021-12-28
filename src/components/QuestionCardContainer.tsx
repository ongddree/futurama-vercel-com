import styled from "@emotion/styled";
import { Error, Loading } from ".";
import { useData } from "../hooks/useData";
import { QuestionType } from "../types/QuestionType";
import React, { useState } from "react";

interface ContainerProps {
  subject: string;
}

export const QuestionCardContainer = ({ subject }: ContainerProps) => {
  const [current, setCurrent] = useState(0);

  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { id, question, possibleAnswers, correctAnswer } = data;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = (e.target as HTMLInputElement).value;
    if (answer === `${data[current].correctAnswer}`) {
      alert("🥳정답입니다🥳");
      setCurrent((current) => current + 1);
    } else {
      e.currentTarget.disabled = true;
    }
  };

  return (
    <Container>
      <Card key={`question-${data[current].id}`}>
        <header>
          <Quiznumber>
            <span>{data[current].id}</span>/28
          </Quiznumber>
          <Quiztext>{data[current].question}</Quiztext>
        </header>
        <Answersection>
          <button
            onClick={handleClick}
            value={data[current].possibleAnswers[0]}
          >
            {data[current].possibleAnswers[0]}
          </button>
          <button
            onClick={handleClick}
            value={data[current].possibleAnswers[1]}
          >
            {data[current].possibleAnswers[1]}
          </button>
          <button
            onClick={handleClick}
            value={data[current].possibleAnswers[2]}
          >
            {data[current].possibleAnswers[2]}
          </button>
          <button
            onClick={handleClick}
            value={data[current].possibleAnswers[3]}
          >
            {data[current].possibleAnswers[3]}
          </button>
        </Answersection>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  margin-top: 100px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px;
  color: #00000;
  font-weight: 500;
  background: #fc9918;
  max-width: 340px;
  border-radius: 20px;

  header {
    padding: 0;
    margin: 0;
  }
`;

const Quiznumber = styled.p`
  margin: 5px 0 10px;
  span {
    font-size: 25px;
  }
`;
const Quiztext = styled.div`
  font-size: 20px;
  margin: 0 0 20px;
`;

const Answersection = styled.div`
  display: flex;
  flex-direction: column;
  button {
    cursor: pointer;
    background: #35589a;
    font-size: 15px;
    color: #ffffff;
    width: 300px;
    padding: 10px 0;
    margin: 5px 0;
  }

  button:disabled {
    color: #808080;
    cursor: not-allowed;
    filter: grayscale(80%);
    transition-property: grayscale, color;
    transition: ease-in-out all 0.4s;
  }
`;
