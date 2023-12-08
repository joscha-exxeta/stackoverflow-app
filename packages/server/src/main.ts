import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { MongoClient } from "mongodb";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

async function main() {
  // const client = new MongoClient("mongodb://localhost:27017");
  // client.connect();

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}graphql`);
}

main();
