# Marvel API

This service provides users with information about Marvel films

# Getting Started

Add an env file in the root of this directory (see sample env for details)

Run: `docker-compose up --build`

Navigate to: `http://localhost:4000/`

Use these queries as a template to test to the endpoints.

```query ExampleQuery($name: String, $limit: Int, $offset: Int) {
    findMovie(name: $name) {
        _id
        name
        releaseDate
        director
        cast {
            character
            name
        }
    }
    getMovies(limit: $limit, offset: $offset) {
        _id
        name
        releaseDate
        director
        cast {
            character
            name
        }
    }
}
```

# Technology

- Node Server
- Graphql Apollo
- MongoDb
- Mongoose
- Docker

- Jest
- TypeScript

# Approach

## Graphql

I chose GraphQL because it gives the FE the flexibility to dictate exactly what it needs from the server. This would be particularly important on mobile where we only want to request the data that is required.

The endpoint findMovie is hooked up to a "fuzzy search" mongoose method which will return matches to substrings. E.g. searching for 'Iron man' will also return 'Iron man 2'.
The endpoint getMovies has a limit and an offset variable. The FE could use these for pagination.

I also included integration tests for these endpoints: `./src/graphql/index.spec.ts`

## Mongo and mongoose

I went for an non relation DB. Primarily due to the lack of time I had. Given more time I would have gone for a relational.

## Docker

I wanted to make this app portable / scalable / deployable. Using Docker and compose was a big step towards that.

# Strengths

- Typesafe with TypeScript.
- Flexible to make quick domain model changes with non relational DB.
- Performant and reliable querying with graphql.
- Portable with Docker

# Weaknesses

Fuzzy search on mongo DB is not performant. It uses a regex which would be horrible if there were lots of movies. (Luckily Marvel don't have too many).

Lack of structure in Mongo schemas. There is currently one Movie schema. This could be broken down into Person Movie Character. But given time restraints this worked fine.
