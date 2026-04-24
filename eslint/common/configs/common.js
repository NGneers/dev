import eslint from "@eslint/js";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import _import from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";
import globals from "globals";

const typeScriptExtensions = [".ts", ".tsx", ".cts", ".mts"];
const allExtensions = [...typeScriptExtensions, ".js", ".jsx", ".cjs", ".mjs"];

export default defineConfig([
  eslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.ts", "**/*.mts", "**/*.cts"],
    extends: [_import.flatConfigs.recommended],

    plugins: {
      "@typescript-eslint": tsEslint,
      "unused-imports": unusedImports,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      "import-x/extensions": allExtensions,
      "import-x/external-module-folders": ["node_modules", "node_modules/@types"],
      "import-x/parsers": {
        "@typescript-eslint/parser": [...typeScriptExtensions],
      },
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },

    rules: {
      "prefer-template": "error",
      "import-x/named": "off",
      "no-unused-vars": "off",
      "no-redeclare": "off",

      ...tsEslint.configs.recommended.rules,
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "off",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "off",
          },
        },
      ],
      "@typescript-eslint/parameter-properties": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "import-x/no-unresolved": "off",
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      "import-x/no-duplicates": "error",
    },
  },
  {
    files: ["**/*.spec.ts", "**/*.test.ts", "**/test/**/*.ts"],
    languageOptions: {
      globals: globals.jest,
    },

    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",

      "unused-imports/no-unused-vars": "off",
    },
  },
]);
