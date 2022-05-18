import { createTestClient } from "apollo-server-testing";
import { ApolloServer, gql } from "apollo-server";

import { typeDefs, resolvers } from ".";
import { Movie } from "../models";

describe("graphql", () => {
  it("findMovie", async () => {
    const { query } = createTestClient(
      new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req, res }) => ({
          req,
          res,
          Movie,
        }),
      }) as any
    );

    const FIND_MOVIE = gql`
      query findMovie($name: String!) {
        findMovie(name: $name) {
          name
        }
      }
    `;

    const { data } = await query({
      query: FIND_MOVIE,
      variables: {
        name: "Iron man",
      },
    });

    // fuzzy search finds two items that match the query
    expect(data).toMatchInlineSnapshot(`
Object {
  "findMovie": Array [
    Object {
      "name": "Iron man 2",
    },
    Object {
      "name": "Iron man",
    },
  ],
}
`);
  });
  it("getMovies", async () => {
    const { query } = createTestClient(
      new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req, res }) => ({
          req,
          res,
          Movie,
        }),
      }) as any
    );

    const GET_MOVIES = gql`
      query getMovies($offset: Int, $limit: Int) {
        getMovies(limit: $limit, offset: $offset) {
          name
        }
      }
    `;

    // with offset we should only return three items
    const { data } = await query({
      query: GET_MOVIES,
      variables: {
        offset: 0,
        limit: 3,
      },
    });

    expect(data).toMatchInlineSnapshot(`
Object {
  "getMovies": Array [
    Object {
      "name": "Iron man 2",
    },
    Object {
      "name": "Iron man",
    },
    Object {
      "name": "The Avengers",
    },
  ],
}
`);
  });
});
