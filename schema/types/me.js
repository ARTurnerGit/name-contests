const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const ContestType = require("./contest");
const pgdb = require("../../database/pgdb");
const mdb = require("../../database/mdb");

module.exports = new GraphQLObjectType({
  name: "MeType",
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLString },
    contests: {
      type: new GraphQLList(ContestType),
      resolve(obj, args, context) {
        const { pgPool } = context;
        return pgdb(pgPool).getContests(obj);
      },
    },
    contestsCount: {
      type: GraphQLInt,
      resolve(obj, args, context, { fieldName }) {
        const { mPool } = context;
        return mdb(mPool).getCounts(obj, fieldName);
      },
    },
    namesCount: {
      type: GraphQLInt,
      resolve(obj, args, context, { fieldName }) {
        const { mPool } = context;
        return mdb(mPool).getCounts(obj, fieldName);
      },
    },
    votesCount: {
      type: GraphQLInt,
      resolve(obj, args, context, { fieldName }) {
        const { mPool } = context;
        return mdb(mPool).getCounts(obj, fieldName);
      },
    },
  },
});
