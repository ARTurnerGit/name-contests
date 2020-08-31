const { graphqlHTTP } = require("express-graphql");
const { nodeEnv } = require("./util");
const ncSchema = require("../schema");
const DataLoader = require("dataloader");

require("dotenv").config();

const pg = require("pg");
const pgConfig = require("../config/pg")[nodeEnv];
const pgPool = new pg.Pool(pgConfig);
const pgdb = require("../database/pgdb")(pgPool);

const { MongoClient } = require("mongodb");
const assert = require("assert");
const mConfig = require("../config/mongo")[nodeEnv];

const app = require("express")();

MongoClient.connect(mConfig.url, (err, mPool) => {
  assert.equal(err, null);

  app.use("/graphql", (req, res) => {
    const loaders = {
      usersByIds: new DataLoader(pgdb.getUsersByIds),
    };

    graphqlHTTP({
      schema: ncSchema,
      graphiql: true,
      context: { pgPool, mPool, loaders },
    })(req, res);
  });

  console.log(`Running in ${nodeEnv} mode...`);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("server listening on PORT", PORT);
  });
});
