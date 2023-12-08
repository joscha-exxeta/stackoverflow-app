import { gql, useQuery } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";

const GET_QUESTIONS = gql`
  query GetQuestions {
    questions {
      id
      title
      body
      answers {
        id
      }
      votes {
        id
      }
    }
  }
`;

export const QuestionListPage = () => {
  const { loading, error, data } = useQuery(GET_QUESTIONS);
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
      <h1 className="font-bold text-xl mb-2">Alle Fragen</h1>
      <section>
        {data?.questions.map((question) => (
          <div key={question.id} className="bg-red-100 p-8 rounded-lg mb-4">
            <header className="mb-4">
              <Link to={question.id}>
                <h2 className="text-lg font-bold mb-2">{question.title}</h2>
              </Link>
              <p>{question.body}</p>
            </header>
            <footer className="border-t-2 border-red-400 pt-4 flex gap-4">
              <p>
                {question.answers.length > 1
                  ? `${question.answers.length} Antworten`
                  : `${question.answers.length} Antwort`}
              </p>
              <p>
                {question.votes.length > 1
                  ? `${question.votes.length} Votes`
                  : `${question.votes.length} Vote`}
              </p>
            </footer>
          </div>
        ))}
      </section>
    </>
  );
};
