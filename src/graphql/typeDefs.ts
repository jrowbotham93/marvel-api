import { gql } from "apollo-server-core";

const typeDefs = gql`
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  # server side cache config
  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Query {
    getMovies(limit: Int, offset: Int): [Movie]
    findMovie(name: String): [Movie]
  }

  type Movie @cacheControl(maxAge: 240) {
    _id: String
    name: String
    releaseDate: String
    director: String
    cast: [Cast]
  }

  type Cast {
    character: String
    name: String
  }
`;

export default typeDefs;
