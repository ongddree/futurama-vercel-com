import styled from "@emotion/styled";
import { Error, Loading, QuestionCard } from ".";
import { useData } from "../hooks/useData";
import { QuestionType } from "../types/QuestionType";

interface ContainerProps {
  subject: string;
}

export const QuestionCardContainer = ({ subject }: ContainerProps) => {
  const { data, error } = useData(subject);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((question: QuestionType) => {
        return (
          <QuestionCard
            questionData={question}
            key={`question-${question.id}`}
          ></QuestionCard>
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
