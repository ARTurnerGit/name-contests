const { nodeEnv } = require("./util");
require("dotenv").config();

const query = process.argv[2];

const ncSchema = require("../schema");
const { graphql } = require("graphql");

graphql(ncSchema, query).then((result) => console.log(result));

console.log(`Running in ${nodeEnv} mode...`);
