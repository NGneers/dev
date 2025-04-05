import ngneers from "@ngneers/eslint-config";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  ngneers.configs.common,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: globals.node,
    },
  },
]);
