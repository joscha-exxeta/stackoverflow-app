import { gql, useQuery } from "@apollo/client";
import {
  IconExclamationCircle,
  IconLoader,
  IconPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { QuestionItem } from "../components/QuestionItem";
import { Question, QuestionsQuery } from "../gql/graphql";

const questionsQueryDocument = gql`
  query Questions {
    questions {
      _id
      title
      body
      answers {
        _id
      }
      upvotes
      downvotes
    }
  }
`;

export const QuestionListPage = () => {
  const { loading, error, data } = useQuery<QuestionsQuery>(
    questionsQueryDocument
  );
  let sortedQuestions: Question[] = [];

  if (data?.questions) {
    sortedQuestions = [...data.questions].sort((a, b) => {
      const votesA = a.upvotes - a.downvotes;
      const votesB = b.upvotes - b.downvotes;
      return votesB - votesA;
    });
  }

  return (
    <>
      <h1 className="font-bold text-xl mb-2">Alle Fragen</h1>
      <section data-testid="questions-list">
        {loading && (
          <p className="flex gap-2 my-8">
            <IconLoader className="animate-spin" /> Lädt...
          </p>
        )}
        {error && (
          <p className="flex gap-2 my-8">
            <IconExclamationCircle /> Es ist ein Fehler aufgetreten:{" "}
            {error.message}
          </p>
        )}
        {sortedQuestions?.map((question) => (
          <QuestionItem key={question?._id} {...question} isLink={true} />
        ))}
        <Link to="question/create">
          <div className="border-2 border-purple-200 p-8 rounded-lg mb-4 flex items-center gap-2 hover:bg-purple-200 hover:underline transition-all">
            <IconPlus />
            Neue Frage erstellen
          </div>
        </Link>
      </section>
    </>
  );
};
