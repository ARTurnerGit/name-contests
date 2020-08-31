const { graphqlHTTP } = require("express-graphql");
const { nodeEnv } = require("./util");
const ncSchema = require("../schema");
require("dotenv").config();

const pg = require("pg");
const pgConfig = require("../config/pg")[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

const app = require("express")();

app.use(
  "/graphql",
  graphqlHTTP({ schema: ncSchema, graphiql: true, context: { pgPool } })
);

console.log(`Running in ${nodeEnv} mode...`);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening on PORT", PORT);
});
