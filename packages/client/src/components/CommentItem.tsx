import { Comment } from "../gql/graphql";

export const CommentItem = ({ body }: Comment) => {
  return (
    <section className="bg-red-200 p-4 rounded-lg mb-3">
      <p className="text-sm">{body}</p>
    </section>
  );
};
