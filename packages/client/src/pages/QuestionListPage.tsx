import { Link } from "react-router-dom";

export const QuestionListPage = () => {
  return (
    <>
      <header>
        <Link to={"/"} className="mb-4 underline">
          Zurück
        </Link>
        <h1 className="font-bold text-xl mb-2">QuestionListPage</h1>
      </header>
      <div>Questions</div>
    </>
  );
};
