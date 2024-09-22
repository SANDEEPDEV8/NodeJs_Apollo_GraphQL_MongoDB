const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    age: Int
    gender: String
  }

  type Query {
    getUsers: [User!]!
  }

  input UserInput {
    id: Int!
    name: String!
    age: Int
    gender: String
  }

  type Mutation {
    createUser(userInput: UserInput): User!
  }

  type Netflix {
    age_certification: String
    description: String
    genres: [String]
    id: String
    imdb_score: Float
    production_countries: [String]
    release_year: Int
    runtime: Int
    title: String
    type: String
  }

  type Query {
    getNetflixes: [Netflix!]!
    getNetflixByTitle(title: String!): [Netflix!]!
  }

  input NetflixInput {
    age_certification: String
    description: String
    genres: [String]
    id: String
    imdb_score: Float
    production_countries: [String]
    release_year: Int
    runtime: Int
    title: String
    type: String
  }

  input UpdateNetflixInput {
    description: String
    genres: [String]
    imdb_score: Float
    runtime: Int
  }

  type Mutation {
    createNetflix(netflixInput: NetflixInput): Netflix!
    updateNetflix(title: String!, updateInput: UpdateNetflixInput): Netflix!
    deleteNetflix(title: String!): String
  }
`;

module.exports = { typeDefs };
