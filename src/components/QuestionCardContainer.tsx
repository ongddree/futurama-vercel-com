import styled from '@emotion/styled';
import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import { QuestionType } from '../types/QuestionType';
import React, { useState } from 'react';

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
    const answerSec = document.getElementById('answerSec');
    if (answer === `${data[current].correctAnswer}`) {
      answerSec?.classList.add('next');
      e.currentTarget.classList.add('correct');
      setTimeout(() => setCurrent((current) => current + 1), 1000);
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
        <Answersection id="answerSec">
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

const Container = styled.section`
  display: grid;
  place-items: center;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 40px;
  color: #000;
  font-weight: 700;
  letter-spacing: 1px;
  background: #fc9918;
  max-height: 400px;
  max-width: 800px;
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

const Answersection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.next {
    button {
      cursor: not-allowed;
      pointer-events: none;
      color: #fc9918;
      background: #fc9918;
      cursor: not-allowed;
      transition-property: background, color;
      transition: ease-in-out all 0.3s;
      &.correct {
        background: #9440de;
        color: #fff;
        transition-property: background, color;
        transition: ease-in-out all 0.3s;
      }
    }
  }

  button {
    letter-spacing: 1px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #0ea144;
    color: #000;
    font-size: 16px;
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
  }

  button:disabled {
    color: #fc9918;
    background: #fc9918;
    cursor: not-allowed;
    transition-property: background, color;
    transition: ease-in-out all 0.3s;
  }
`;
