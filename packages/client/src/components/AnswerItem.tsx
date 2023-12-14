import { IconThumbUp, IconThumbDown } from "@tabler/icons-react";
import { Answer } from "../gql/graphql";
import { CommentItem } from "./CommentItem";

export const AnswerItem = ({ body, comments, downvotes, upvotes }: Answer) => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg mb-3">
      <p className="mb-4">{body}</p>
      <footer data-testid="votes-list" className="border-t-2 border-gray-200 pt-4 flex gap-4">
        <p className="flex items-center gap-2">
          {upvotes} <IconThumbUp size={20} />
        </p>
        <p className="flex items-center gap-2">
          {downvotes} <IconThumbDown size={20} />
        </p>
      </footer>
      {comments && comments.length > 0 && (
        <div data-testid="comments-list" className="ml-8">
          <h2 className="font-bold mb-2 mt-6">Kommentare</h2>
          {comments.map((comment) => (
            <CommentItem
              key={comment?._id}
              {...comment}
              classes="bg-gray-200"
            />
          ))}
        </div>
      )}
    </section>
  );
};
