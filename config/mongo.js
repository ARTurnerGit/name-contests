require("dotenv").config();

module.exports = {
  development: {
    url: `mongodb+srv://ARTurnerGit:${process.env.DB_PASSWORD}@sandbox.f58os.mongodb.net/graphql`,
  },
};
