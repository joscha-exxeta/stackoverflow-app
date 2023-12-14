export const typeDefs = /* GraphQL */ `
  type Question {
    _id: ID!
    title: String!
    body: String!
    comments: [Comment]
    answers: [Answer]
    upvotes: Int!
    downvotes: Int!
  }

  type Answer {
    _id: ID!
    body: String!
    comments: [Comment]
    questionId: ID!
    upvotes: Int!
    downvotes: Int!
  }

  type Comment {
    _id: ID!
    body: String!
    attachedTo: ID!
  }

  type Query {
    questions: [Question!]!
    question(_id: ID!): Question
  }

  type Mutation {
    createQuestion(question: QuestionInput!): Question!
  }

  input QuestionInput {
    title: String!
    body: String!
  }
`;
