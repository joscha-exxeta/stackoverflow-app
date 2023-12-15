import { gql, useQuery } from "@apollo/client";
import { IconExclamationCircle, IconLoader } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { AnswersList } from "../components/AnswersList";
import { QuestionItem } from "../components/QuestionItem";
import { QuestionQuery } from "../gql/graphql";

const questionQueryDocument = gql`
  query Question($id: ID!) {
    question(_id: $id) {
      _id
      title
      body
      upvotes
      downvotes
      comments {
        _id
        body
      }
      answers {
        _id
        body
        upvotes
        downvotes
        comments {
          _id
          body
        }
      }
    }
  }
`;

export const QuestionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<QuestionQuery>(
    questionQueryDocument,
    {
      variables: { id },
    }
  );

  return (
    <>
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

      {data?.question && (
        <>
          <h2 className="font-bold text-xl mb-2">Frage</h2>
          <QuestionItem {...data?.question} showComments={true} />

          <AnswersList
            answers={data.question.answers}
            questionId={data.question._id}
          />
        </>
      )}
    </>
  );
};
