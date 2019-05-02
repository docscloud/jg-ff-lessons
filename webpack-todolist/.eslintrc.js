module.exports = {
  parser: "babel-eslint",
  extends: "eslint:recommended",
  rules: {
    "no-console": 0,
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "no-var": 2
  },
  globals: {
    console: true,
    document: true,
    require: true,
    module: true,
    __dirname: true,
    window: true,
    Event: true
  }
};
