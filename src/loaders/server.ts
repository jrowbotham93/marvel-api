import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "../graphql";

export async function server() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  return server;
}
