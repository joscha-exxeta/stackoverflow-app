import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { GqlContext, createContext } from "./create-context";

dotenv.config();

async function main() {
  const server = new ApolloServer<GqlContext>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: createContext,
  });

  console.log(`🚀 Server ready at: ${url}graphql`);
}

main();
