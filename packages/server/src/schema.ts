export const typeDefs = `#graphql
  type Question {
    id: ID!
    title: String!
    body: String!
    answers: [Answer!]
    votes: [Vote!]
  }

  type Answer {
    id: ID!
    body: String!
    question: Question!
    votes: [Vote!]
  }

  type Comment {
    id: ID!
    body: String!
    question: Question
    answer: Answer
  }

  type Vote {
    id: ID!
    answer: Answer
    question: Question
  }

  type Query {
    questions: [Question!]!
    question(id: ID!): Question
  }
`;
