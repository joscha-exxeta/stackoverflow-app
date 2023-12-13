import { Comment } from "../gql/graphql";

interface CommentItemProps extends Comment {
  classes: string;
}

export const CommentItem = ({ body, classes }: CommentItemProps) => {
  return (
    <section className={`${classes} p-4 rounded-lg mb-3`}>
      <p className="text-sm">{body}</p>
    </section>
  );
};
