const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://<username>:<pwd>@cluster0.8oncn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const server = new ApolloServer({ typeDefs, resolvers });
mongoose
  .connect(MONGODB, {})
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
