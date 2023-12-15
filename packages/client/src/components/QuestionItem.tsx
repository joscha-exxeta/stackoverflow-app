import { gql, useMutation } from "@apollo/client";
import {
  IconThumbDown,
  IconThumbUp
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Question } from "../gql/graphql";
import { CommentsList } from "./CommentsList";

const upvoteQuestionDocument = gql`
  mutation UpvoteQuestion($vote: VoteInput!) {
    upvoteQuestion(vote: $vote) {
      _id
      upvotes
    }
  }
`;

const downvoteQuestionDocument = gql`
  mutation DownvoteQuestion($vote: VoteInput!) {
    downvoteQuestion(vote: $vote) {
      _id
      downvotes
    }
  }
`;

interface QuestionItemProps extends Question {
  showComments?: boolean;
  isLink?: boolean;
}

export const QuestionItem = ({
  _id,
  title,
  body,
  answers,
  comments,
  upvotes,
  downvotes,
  showComments = false,
  isLink = false,
}: QuestionItemProps) => {
  const [upvoteQuestion] = useMutation(upvoteQuestionDocument);
  const [downvoteQuestion] = useMutation(downvoteQuestionDocument);

  const handleUpvote = () => {
    upvoteQuestion({
      variables: { vote: { attachedTo: _id, number: 1 } },
    });
  };

  const handleDownvote = () => {
    downvoteQuestion({
      variables: { vote: { attachedTo: _id, number: 1 } },
    });
  };

  return (
    <div className="bg-purple-100 p-8 rounded-lg mb-4">
      <header className="mb-4">
        {isLink ? (
          <Link to={`question/${_id}`}>
            <h2 className="text-lg font-bold mb-2 hover:underline">{title}</h2>
          </Link>
        ) : (
          <h1 className="font-bold text-lg mb-2">{title}</h1>
        )}
        <p>{body}</p>
      </header>
      <footer
        data-testid="question-footer"
        className="border-t-2 border-purple-200 pt-4 flex gap-4"
      >
        <p
          className="flex items-center gap-2 hover:scale-110 transition-all cursor-pointer"
          onClick={handleUpvote}
        >
          {upvotes} <IconThumbUp size={20} />
        </p>
        <p
          className="flex items-center gap-2 hover:scale-110 transition-all cursor-pointer"
          onClick={handleDownvote}
        >
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
      {showComments && (
        <CommentsList comments={comments} attachedTo={_id} color="purple-200" />
      )}
    </div>
  );
};
