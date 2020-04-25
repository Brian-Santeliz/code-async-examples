const util = require("util");

const newSet = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      throw new Error("algun problema");
      await newSet(4000);
      return "un valor";
    } catch (e) {
      console.log(e);
    }
  },

  async taskTwo() {
    try {
      await newSet(2000);
      return "segundo valor";
    } catch (e) {
      throw new Error(e);
    }
  }
};
