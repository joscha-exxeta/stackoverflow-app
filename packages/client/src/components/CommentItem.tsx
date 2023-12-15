import { IconUserCircle } from "@tabler/icons-react";
import { Comment } from "../gql/graphql";

interface CommentItemProps extends Comment {
  classes: string;
}

export const CommentItem = ({ body, classes }: CommentItemProps) => {
  return (
    <section
      className={`${classes} px-4 py-3 rounded-lg mb-3 flex gap-2`}
    >
      <IconUserCircle size={18} className="shrink-0" />
      <p className="text-sm">{body}</p>
    </section>
  );
};
