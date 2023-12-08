import { gql, useQuery } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";

const GET_QUESTION = gql`
  query GetQuestion($id: ID!) {
    question(id: $id) {
      id
      title
      body
      comments {
        id
        body
      }
      answers {
        id
        body
        comments {
          id
          body
        }
      }
      votes {
        id
      }
    }
  }
`;

export const QuestionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_QUESTION, {
    variables: { id },
  });
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <header className="mb-4">
        <button onClick={() => navigate(-1)} className="underline">
          Zurück
        </button>
      </header>

      <h2 className="font-bold text-lg mb-2">Frage</h2>
      <div className="bg-red-100 p-8 rounded-lg mb-4">
        <h1 className="font-bold text-lg mb-2">{data.question.title}</h1>
        <p className="">{data.question.body}</p>
        {data.question.comments?.length > 0 && (
          <div className="ml-8">
            <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
            {data.question.comments.map((comment) => (
              <section
                key={comment.id}
                className="bg-red-200 p-4 rounded-lg mb-3"
              >
                <p className="text-sm">{comment.body}</p>
              </section>
            ))}
          </div>
        )}
      </div>

      {data.question.answers && (
        <div>
          <h2 className="font-bold text-lg mb-2">Antworten</h2>
          {data.question.answers.map((answer) => (
            <section
              key={answer.id}
              className="bg-blue-100 p-8 rounded-lg mb-3"
            >
              <p>{answer.body}</p>
              {answer.comments?.length > 0 && (
                <div className="ml-8">
                  <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
                  {answer.comments.map((comment) => (
                    <section
                      key={comment.id}
                      className="bg-blue-200 p-4 rounded-lg mb-3"
                    >
                      <p className="text-sm">{comment.body}</p>
                    </section>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </>
  );
};
