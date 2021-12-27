import type { NextPage } from "next";
import { QuestionCardContainer } from "../../components/QuestionCardContainer";

const QuestionIndexPage: NextPage = () => {
  const subject = "questions";
  return (
    <div>
      <QuestionCardContainer subject={subject} />
    </div>
  );
};

export default QuestionIndexPage;
