import { Link } from "react-router-dom";
import { Question } from "../gql/graphql";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";

export const QuestionItem = ({
  _id,
  title,
  body,
  answers,
  upvotes,
  downvotes,
}: Question) => {
  return (
    <div className="bg-purple-100 p-8 rounded-lg mb-4">
      <header className="mb-4">
        <Link to={`question/${_id}`}>
          <h2 className="text-lg font-bold mb-2 hover:underline">{title}</h2>
        </Link>
        <p>{body}</p>
      </header>
      <footer
        data-testid="question-footer"
        className="border-t-2 border-purple-200 pt-4 flex gap-4"
      >
        <p className="flex items-center gap-2">
          {upvotes} <IconThumbUp size={20} />
        </p>
        <p className="flex items-center gap-2">
          {downvotes} <IconThumbDown size={20} />
        </p>
        {answers && answers.length > 0 && (
          <p>
            {answers.length === 1
              ? `${answers.length} Antwort`
              : `${answers.length} Antworten`}
          </p>
        )}
      </footer>
    </div>
  );
};
