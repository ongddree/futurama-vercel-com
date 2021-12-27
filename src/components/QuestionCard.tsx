import styled from "@emotion/styled";
import { QuestionType } from "../types/QuestionType";

interface QuestionCardProps {
  questionData: QuestionType;
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
  const { id, question, possibleAnswers, correctAnswer } = questionData;

  return (
    <Card key={`question-${id}`}>
      <p>{id}</p>
      <p>{question}</p>
      <p>{possibleAnswers}</p>
      <p>{correctAnswer}</p>
    </Card>
  );
};

const Card = styled.div`
  max-width: 360px;
`;
