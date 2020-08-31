require("dotenv").config();

module.exports = {
  development: {
    // url: `mongodb+srv://ARTurnerGit:${process.env.DB_PASSWORD}@sandbox.f58os.mongodb.net/graphql`,
    url: `mongodb://ARTurnerGit:${process.env.DB_PASSWORD}@sandbox-shard-00-00.f58os.mongodb.net:27017,sandbox-shard-00-01.f58os.mongodb.net:27017,sandbox-shard-00-02.f58os.mongodb.net:27017/graphql?ssl=true&replicaSet=atlas-jto95c-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};
