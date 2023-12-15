import { gql, useMutation } from "@apollo/client";
import { IconCheck, IconLoader } from "@tabler/icons-react";
import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { QuestionInput } from "../gql/graphql";

const createQuestionDocument = gql`
  mutation CreateQuestion($question: QuestionInput!) {
    createQuestion(question: $question) {
      _id
      title
      body
    }
  }
`;

export const QuestionCreatePage = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionInput>();
  const [createQuestion, { data, loading }] = useMutation(
    createQuestionDocument,
    {
      refetchQueries: ["Questions"],
    }
  );
  const { ref, ...rest } = register("title", { required: true });

  const onSubmit: SubmitHandler<QuestionInput> = (data) => {
    createQuestion({
      variables: { question: data },
    });
    reset();
  };

  useImperativeHandle(ref, () => titleRef.current);

  useEffect(() => {
    titleRef?.current?.focus();
  }, []);

  useEffect(() => {
    if (data) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        titleRef?.current?.focus();
      }, 2000);
    }
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-bold">Titel</span>
            <input type="text" {...rest} ref={titleRef} />
          </label>
          {errors.title && (
            <span className="bg-purple-200 px-2 py-1 text-sm rounded-md">
              Bitte "Titel" ausfüllen.
            </span>
          )}
          <label className="flex flex-col">
            <span className="text-sm font-bold">Body</span>
            <textarea
              {...register("body", { required: true })}
              className="min-h-[120px]"
            />
          </label>
          {errors.body && (
            <span className="bg-purple-200 px-2 py-1 text-sm rounded-md">
              Bitte "Body" ausfüllen.
            </span>
          )}
          <Button classes="mt-2 p-4 self-start">
            Frage erstellen {loading && <IconLoader className="animate-spin" />}
          </Button>
        </div>
      </form>
      {showMessage && (
        <div className="max-w-[600px] flex items-center gap-2 mt-4 bg-purple-200 rounded-lg p-4">
          <IconCheck />
          Die Frage wurde erfolgreich erstellt.
        </div>
      )}
    </>
  );
};
