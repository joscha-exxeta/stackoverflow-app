import { GqlContext } from "./create-context";
import { ObjectId } from "mongodb";

export const resolvers = {
  Mutation: {
    createQuestion: async (_, { question }, { db }: GqlContext) => {
      const { title, body } = question;
      const result = await db.questions.insertOne({
        _id: new ObjectId(),
        title,
        body,
        comments: [],
        answers: [],
        upvotes: 0,
        downvotes: 0,
      });
      const newQuestion = await db.questions.findOne({
        _id: result.insertedId,
      });
      return newQuestion;
    },
  },
  Query: {
    questions: async (_parent, _, { db }: GqlContext) => {
      return await db.questions.find().toArray();
    },
    question: async (_parent, { _id }, { db }: GqlContext) => {
      return await db.questions.findOne({ _id: new ObjectId(_id) });
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
