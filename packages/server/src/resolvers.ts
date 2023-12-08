import { data } from "./data";

export const resolvers = {
  Query: {
    questions: () => {
      return data.questions;
    },
    question: (_parent, args, _ctx) => {
      return data.questions.find((question) => question.id === args.id);
    },
  },
};
