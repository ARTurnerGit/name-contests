const { nodeEnv } = require("./util");
require("dotenv").config();

const ncSchema = require("../schema");
const { graphqlHTTP } = require("express-graphql");

const app = require("express")();

app.use("/graphql", graphqlHTTP({ schema: ncSchema, graphiql: true }));

console.log(`Running in ${nodeEnv} mode...`);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening on PORT", PORT);
});
