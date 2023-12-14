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
    addAnswer(answer: AnswerInput!): Answer!
    addComment(comment: CommentInput!): Comment!
    upvoteQuestion(vote: VoteInput!): Question!
    downvoteQuestion(vote: VoteInput!): Question!
    upvoteAnswer(vote: VoteInput!): Answer!
    downvoteAnswer(vote: VoteInput!): Answer!
  }

  input QuestionInput {
    title: String!
    body: String!
  }

  input AnswerInput {
    body: String!
    questionId: ID!
  }

  input CommentInput {
    body: String!
    attachedTo: ID!
  }

  input VoteInput {
    attachedTo: ID!
    number: Int!
  }
`;
