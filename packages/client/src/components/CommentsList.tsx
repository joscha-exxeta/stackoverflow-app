import { gql, useMutation } from "@apollo/client";
import { IconLoader, IconPlus } from "@tabler/icons-react";
import { useImperativeHandle, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Comment, CommentInput } from "../gql/graphql";
import { Button } from "./Button";
import { CommentItem } from "./CommentItem";

const createCommentDocument = gql`
  mutation CreateComment($comment: CommentInput!) {
    addComment(comment: $comment) {
      _id
      body
    }
  }
`;

interface CommentsListProps {
  comments: Comment[];
  color?: string;
  attachedTo: string;
}

export const CommentsList = ({
  comments,
  color = "gray-200",
  attachedTo,
}: CommentsListProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [editMode, setEditMode] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentInput>();
  const [createComment, { loading }] = useMutation(createCommentDocument, {
    refetchQueries: ["Question"],
  });
  const { ref, ...rest } = register("body", { required: true });

  const onSubmit: SubmitHandler<CommentInput> = (data) => {
    createComment({
      variables: { comment: { ...data, attachedTo } },
    });
    reset();
    setEditMode(false);
  };

  const handleAddCommentClick = () => {
    setEditMode(true);
    setTimeout(() => textAreaRef?.current?.focus(), 0);
  };

  useImperativeHandle(ref, () => textAreaRef.current);

  return (
    <div data-testid="comments-list" className="mt-4 ml-8">
      {comments && comments.length > 0 && (
        <>
          {comments.map((comment) => (
            <CommentItem
              key={comment?._id}
              {...comment}
              classes={`bg-${color}`}
            />
          ))}
        </>
      )}
      {editMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...rest} ref={textAreaRef} className="w-full" />
          {errors.body && (
            <span className="bg-purple-200 px-2 py-1 text-sm rounded-md">
              Bitte Kommentar eingeben.
            </span>
          )}
          <Button classes="mt-2 p-4 self-start" size="md">
            Kommentar absenden{" "}
            {loading && <IconLoader className="animate-spin" />}
          </Button>
        </form>
      ) : (
        <button
          onClick={handleAddCommentClick}
          className={`border-2 border-${color} p-3 text-sm rounded-lg mb-4 flex w-full items-center gap-2 hover:bg-${color} hover:underline transition-all`}
        >
          <IconPlus />
          Kommentar hinzufügen
        </button>
      )}
    </div>
  );
};
