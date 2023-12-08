import { Link, useParams } from "react-router-dom";

export const QuestionDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <header>
        <Link to={"/"} className="mb-4 underline">
          Zurück
        </Link>
        <h1 className="font-bold text-xl mb-2">QuestionDetailPage</h1>
      </header>
      <div>Answers</div>
    </>
  );
};
