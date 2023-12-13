import { Link } from "react-router-dom";
import { Question } from "../gql/graphql";

export const QuestionItem = ({
  _id,
  title,
  body,
  answers,
  upvotes,
  downvotes,
}: Question) => {
  return (
    <div className="bg-red-100 p-8 rounded-lg mb-4">
      <header className="mb-4">
        <Link to={_id}>
          <h2 className="text-lg font-bold mb-2">{title}</h2>
        </Link>
        <p>{body}</p>
      </header>
      <footer className="border-t-2 border-red-400 pt-4 flex gap-4">
        {answers && answers.length > 0 && (
          <p>
            {answers.length === 1
              ? `${answers.length} Antwort`
              : `${answers.length} Antworten`}
          </p>
        )}
        {upvotes && <p>{upvotes} 👍</p>}
        {downvotes && <p>{downvotes} 👎</p>}
      </footer>
    </div>
  );
};
