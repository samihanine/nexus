/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@nexus/configs/eslint/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
