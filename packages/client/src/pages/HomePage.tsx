import { Link, Navigate } from "react-router-dom";
import { QuestionDetailPage } from "./QuestionDetailPage";

export const HomePage = () => {
  return (
    <>
      <header>
        <h1 className="font-bold text-xl mb-2">HomePage</h1>
      </header>
      <nav>
        <Link to={"list"} className="mr-2 underline">QuestionListPage</Link>
        {/* TODO: add id */}
        <Link to={"question/1"} className="mr-2 underline">QuestionDetailPage</Link>
      </nav>
    </>
  );
};
