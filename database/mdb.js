const { orderedFor } = require("../lib/util");

module.exports = (mPool) => {
  return {
    getUsersByIds(userIds, countsField) {
      return mPool
        .collection("users")
        .find({ userId: { $in: userIds } })
        .toArray()
        .then((rows) => orderedFor(rows, userIds, "userId", true));
    },
  };
};
