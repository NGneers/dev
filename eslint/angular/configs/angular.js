import angular from "angular-eslint";
import ngneers from "@ngneers/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ngneers.configs.common,
  {
    files: ["**/*.ts"],
    ignores: ["**/*.spec.ts", "**/test.ts"],
    extends: [angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,

    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Component"],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
