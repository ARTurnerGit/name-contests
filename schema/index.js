const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const MeType = require("./types/me");
const pgdb = require("../database/pgdb");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    me: {
      type: MeType,
      description: "Current user identified by API key",
      args: {
        key: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (obj, args, context) => {
        const { pgPool } = context;
        return pgdb(pgPool).getUserByApiKey(args.key);
      },
    },
  },
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = ncSchema;
