import { IconPlus } from "@tabler/icons-react";
import { Comment } from "../gql/graphql";
import { CommentItem } from "./CommentItem";

interface CommentsListProps {
  comments: Comment[];
  color?: string;
}

export const CommentsList = ({
  comments,
  color = "gray-200",
}: CommentsListProps) => {
  return (
    <div data-testid="comments-list" className="mt-4 ml-8">
      {comments && comments.length > 0 && (
        <>
          {/* <h2 className="font-bold mb-2 mt-6">Kommentare</h2> */}
          {comments.map((comment) => (
            <CommentItem
              key={comment?._id}
              {...comment}
              classes={`bg-${color}`}
            />
          ))}
        </>
      )}
      <button
        className={`border-2 border-${color} p-3 text-sm rounded-lg mb-4 flex w-full items-center gap-2 hover:bg-${color} hover:underline transition-all`}
      >
        <IconPlus />
        Kommentar hinzufügen
      </button>
    </div>
  );
};
