import { gql, useMutation } from "@apollo/client";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { Answer } from "../gql/graphql";
import { CommentsList } from "./CommentsList";

const upvoteAnswerDocument = gql`
  mutation UpvoteAnswer($vote: VoteInput!) {
    upvoteAnswer(vote: $vote) {
      _id
      upvotes
    }
  }
`;

const downvoteAnswerDocument = gql`
  mutation DownvoteAnswer($vote: VoteInput!) {
    downvoteAnswer(vote: $vote) {
      _id
      downvotes
    }
  }
`;

export const AnswerItem = ({
  _id,
  body,
  comments,
  downvotes,
  upvotes,
}: Answer) => {
  const [upvoteAnswer] = useMutation(upvoteAnswerDocument);
  const [downvoteAnswer] = useMutation(downvoteAnswerDocument);

  const handleUpvote = () => {
    upvoteAnswer({
      variables: { vote: { attachedTo: _id, number: 1 } },
    });
  };

  const handleDownvote = () => {
    downvoteAnswer({
      variables: { vote: { attachedTo: _id, number: 1 } },
    });
  };

  return (
    <section className="bg-gray-100 p-8 rounded-lg mb-3">
      <p className="mb-4">{body}</p>
      <footer
        data-testid="votes-list"
        className="border-t-2 border-gray-200 pt-4 flex gap-4"
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
      </footer>
      <CommentsList comments={comments} />
    </section>
  );
};
