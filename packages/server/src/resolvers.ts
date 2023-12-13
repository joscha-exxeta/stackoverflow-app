import { GqlContext } from "./create-context";

export const resolvers = {
  Query: {
    questions: async (_parent, _, { db }: GqlContext) => {
      return await db.questions.find().toArray();
    },
    question: async (_parent, { _id }, { db }: GqlContext) => {
      return await db.questions.findOne({ _id });
    },
  },
  Question: {
    comments: async (question, _, { db }) => {
      return await db.comments.find({ attachedTo: question._id }).toArray();
    },
    answers: async (question, _, { db }) => {
      return await db.answers.find({ questionId: question._id }).toArray();
    },
  },
  Answer: {
    comments: async (answer, _, { db }) => {
      return await db.comments.find({ attachedTo: answer._id }).toArray();
    },
  },
};
