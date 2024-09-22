const { Query } = require("mongoose");
const User = require("../models/User");
const Netflix = require("../models/Netflix");

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find();
    },
    getNetflixes: async () => {
      return await Netflix.find();
    },
    getNetflixByTitle: async (_, { title }) => {
      return await Netflix.find({ title });
    },
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      const user = new User({
        ...userInput,
      });
      const res = await user.save();
      return { id: res.id, ...res._doc };
    },
    createNetflix: async (_, { netflixInput }) => {
      const netflix = new Netflix({
        ...netflixInput,
      });
      const res = await netflix.save();
      return res;
    },
    updateNetflix: async (_, { title, updateInput }) => {
      const updatedNetflix = await Netflix.findOneAndUpdate(
        { title },
        { $set: updateInput },
        { new: true }
      );
      return updatedNetflix;
    },
    deleteNetflix: async (_, { title }) => {
      await Netflix.deleteOne({ title });
      return `Deleted Netflix item with title: ${title}`;
    },
  },
};

module.exports = { resolvers };
