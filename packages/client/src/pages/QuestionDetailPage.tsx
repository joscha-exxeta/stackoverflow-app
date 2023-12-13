import { gql, useQuery } from "@apollo/client";
import { IconExclamationCircle, IconLoader } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentItem } from "../components/CommentItem";
import { QuestionQuery } from "../gql/graphql";

const questionQueryDocument = gql`
  query Question($id: ID!) {
    question(_id: $id) {
      _id
      title
      body
      comments {
        _id
        body
      }
      answers {
        _id
        body
        comments {
          _id
          body
        }
      }
      upvotes
      downvotes
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
        <button onClick={() => navigate(-1)} className="underline">
          Zurück
        </button>
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
          <h2 className="font-bold text-lg mb-2">Frage</h2>
          <div className="bg-red-100 p-8 rounded-lg mb-4">
            <h1 className="font-bold text-lg mb-2">{data?.question?.title}</h1>
            <p className="">{data?.question?.body}</p>
            {data?.question?.comments && data.question.comments?.length > 0 && (
              <div className="ml-8">
                <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
                {data.question.comments.map((comment) => (
                  <CommentItem key={comment?._id} {...comment} />
                ))}
              </div>
            )}
          </div>

          {data?.question?.answers && (
            <div>
              <h2 className="font-bold text-lg mb-2">Antworten</h2>
              {data.question.answers.map((answer) => (
                <section
                  key={answer?._id}
                  className="bg-blue-100 p-8 rounded-lg mb-3"
                >
                  <p>{answer?.body}</p>
                  {answer?.comments && answer?.comments.length > 0 && (
                    <div className="ml-8">
                      <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
                      {answer?.comments.map((comment) => (
                        <section
                          key={comment?._id}
                          className="bg-blue-200 p-4 rounded-lg mb-3"
                        >
                          <p className="text-sm">{comment?.body}</p>
                        </section>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
