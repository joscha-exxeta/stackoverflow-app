import { gql, useQuery } from "@apollo/client";
import {
  IconArrowNarrowLeft,
  IconExclamationCircle,
  IconLoader,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { AnswerItem } from "../components/AnswerItem";
import { Button } from "../components/Button";
import { CommentItem } from "../components/CommentItem";
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
  const navigate = useNavigate();

  return (
    <>
      <header className="mb-4">
        <Button onClick={() => navigate(-1)} type="secondary">
          <IconArrowNarrowLeft />
          Zurück
        </Button>
      </header>

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
          <div className="bg-purple-100 p-8 rounded-lg mb-4">
            <header className="mb-4">
              <h1 className="font-bold text-lg mb-2">
                {data?.question?.title}
              </h1>
              <p className="">{data?.question?.body}</p>
            </header>
            <footer
              data-testid="votes-list"
              className="border-t-2 border-purple-200 pt-4 flex gap-4"
            >
              <p className="flex items-center gap-2">
                {data?.question?.upvotes} <IconThumbUp size={20} />
              </p>
              <p className="flex items-center gap-2">
                {data?.question?.downvotes} <IconThumbDown size={20} />
              </p>
            </footer>
            {data?.question?.comments && data.question.comments?.length > 0 && (
              <div data-testid="comments-list" className="ml-8">
                <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
                {data.question.comments.map((comment) => (
                  <CommentItem
                    key={comment?._id}
                    {...comment}
                    classes="bg-purple-200"
                  />
                ))}
              </div>
            )}
          </div>

          {data?.question?.answers && (
            <div data-testid="answers-list">
              <h2 className="font-bold text-xl mb-2">Antworten</h2>
              {data.question.answers.map((answer) => (
                <AnswerItem key={answer?._id} {...answer} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
