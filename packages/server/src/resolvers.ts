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
    addAnswer: async (_, { answer }, { db }: GqlContext) => {
      const { body, questionId } = answer;
      const newAnswer = await db.answers.insertOne({
        _id: new ObjectId(),
        body,
        questionId,
        comments: [],
        upvotes: 0,
        downvotes: 0,
      });
      await db.questions.updateOne(
        { _id: new ObjectId(questionId) },
        { $push: { answers: newAnswer.insertedId } }
      );
      return newAnswer;
    },
    addComment: async (_, { comment }, { db }: GqlContext) => {
      const { body, attachedTo } = comment;
      const result = await db.comments.insertOne({
        _id: new ObjectId(),
        body,
        attachedTo: new ObjectId(attachedTo),
      });
      const newComment = await db.comments.findOne({
        _id: result.insertedId,
      });
      return newComment;
    },
    upvoteQuestion: async (_, { vote }, { db }: GqlContext) => {
      const { attachedTo, number } = vote;
      await db.questions.updateOne(
        { _id: new ObjectId(attachedTo) },
        { $inc: { upvotes: number } }
      );
      return db.questions.findOne({ _id: new ObjectId(attachedTo) });
    },
    downvoteQuestion: async (_, { vote }, { db }: GqlContext) => {
      const { attachedTo, number } = vote;
      await db.questions.updateOne(
        { _id: new ObjectId(attachedTo) },
        { $inc: { downvotes: number } }
      );
      return db.questions.findOne({ _id: new ObjectId(attachedTo) });
    },
    upvoteAnswer: async (_, { vote }, { db }: GqlContext) => {
      const { attachedTo, number } = vote;
      await db.answers.updateOne(
        { _id: new ObjectId(attachedTo) },
        { $inc: { upvotes: number } }
      );
      return db.answers.findOne({ _id: new ObjectId(attachedTo) });
    },
    downvoteAnswer: async (_, { vote }, { db }: GqlContext) => {
      const { attachedTo, number } = vote;
      await db.answers.updateOne(
        { _id: new ObjectId(attachedTo) },
        { $inc: { downvotes: number } }
      );
      return db.answers.findOne({ _id: new ObjectId(attachedTo) });
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
