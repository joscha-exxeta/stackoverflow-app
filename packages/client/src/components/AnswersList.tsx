import { gql, useMutation } from "@apollo/client";
import { IconLoader, IconPlus } from "@tabler/icons-react";
import { useImperativeHandle, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Answer, AnswerInput } from "../gql/graphql";
import { AnswerItem } from "./AnswerItem";
import { Button } from "./Button";

const addAnswerDocument = gql`
  mutation AddAnswer($answer: AnswerInput!) {
    addAnswer(answer: $answer) {
      _id
      body
    }
  }
`;

interface AnswersListProps {
  answers: Answer[];
  questionId: string;
}

export const AnswersList = ({ answers, questionId }: AnswersListProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [editMode, setEditMode] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AnswerInput>();
  const [createAnswer, { loading }] = useMutation(addAnswerDocument, {
    refetchQueries: ["Question"],
  });
  const { ref, ...rest } = register("body", { required: true });
  let sortedAnswers: Answer[] = [];

  if (answers) {
    sortedAnswers = [...answers].sort((a, b) => {
      const votesA = a.upvotes - a.downvotes;
      const votesB = b.upvotes - b.downvotes;
      return votesB - votesA;
    });
  }

  const onSubmit: SubmitHandler<AnswerInput> = (data) => {
    createAnswer({
      variables: { answer: { ...data, questionId } },
    });
    reset();
    setEditMode(false);
  };

  const handleAddAnswerClick = () => {
    setEditMode(true);
    setTimeout(() => textAreaRef?.current?.focus(), 0);
  };

  useImperativeHandle(ref, () => textAreaRef.current);

  return (
    <div data-testid="answers-list">
      <h2 className="font-bold text-xl mb-2">Antworten</h2>
      {answers && answers.length > 0 && (
        <>
          {sortedAnswers.map((answer) => (
            <AnswerItem key={answer?._id} {...answer} />
          ))}
        </>
      )}
      {editMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...rest} ref={textAreaRef} className="w-full" />
          {errors.body && (
            <span className="bg-purple-200 px-2 py-1 text-sm rounded-md">
              Bitte Antwort eingeben.
            </span>
          )}
          <Button classes="mt-2 p-4 self-start" size="md">
            Antwort absenden{" "}
            {loading && <IconLoader className="animate-spin" />}
          </Button>
        </form>
      ) : (
        <button
          onClick={handleAddAnswerClick}
          className="border-2 border-gray-200 p-8 rounded-lg mb-4 flex w-full items-center gap-2 hover:bg-gray-200 hover:underline transition-all"
        >
          <IconPlus />
          Antwort hinzufügen
        </button>
      )}
    </div>
  );
};
