import { gql, useQuery } from "@apollo/client";
import { IconExclamationCircle, IconLoader } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { QuestionItem } from "../components/QuestionItem";
import { QuestionsQuery } from "../gql/graphql";

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
  const navigate = useNavigate();

  return (
    <>
      <header className="mb-4">
        <button onClick={() => navigate(-1)} className="underline">
          Zurück
        </button>
      </header>
      <h1 className="font-bold text-xl mb-2">Alle Fragen</h1>
      <section>
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
        {data?.questions.map((question) => (
          <QuestionItem key={question?._id} {...question} />
        ))}
      </section>
    </>
  );
};
