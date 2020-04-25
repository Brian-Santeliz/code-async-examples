const util = require("util");

const newSet = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      throw new Error("algun problema");
      await newSet(700);
      return "un valor";
    } catch (e) {
      console.log(e);
    }
  },

  async taskTwo() {
    try {
      // throw new Error("algun problema");
      await newSet(100);
      return "segundo valor";
    } catch (e) {
      throw new Error(e);
    }
  }
};
