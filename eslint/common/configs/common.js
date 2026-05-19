import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import _import from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";
import globals from "globals";

const typeScriptExtensions = [".ts", ".tsx", ".cts", ".mts"];
const allExtensions = [...typeScriptExtensions, ".js", ".jsx", ".cjs", ".mjs"];
const tsRecommendedRules = Object.fromEntries(
  Object.entries(tseslint.plugin.configs.recommended.rules ?? {}).map(
    ([ruleName, ruleConfig]) => [
      ruleName.replace("@typescript-eslint/", "ts/"),
      ruleConfig,
    ],
  ),
);

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
      ts: tseslint.plugin,
      "unused-imports": unusedImports,
    },

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      "import-x/extensions": allExtensions,
      "import-x/external-module-folders": [
        "node_modules",
        "node_modules/@types",
      ],
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },

    rules: {
      "prefer-template": "error",
      "import-x/named": "off",
      "no-unused-vars": "off",
      "no-redeclare": "off",

      ...tsRecommendedRules,
      "ts/prefer-readonly": "error",
      "ts/no-inferrable-types": "off",
      "ts/explicit-member-accessibility": [
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
      "ts/parameter-properties": "warn",
      "ts/no-non-null-assertion": "warn",
      "ts/no-explicit-any": "warn",
      "ts/no-unused-vars": "off",

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
      "ts/no-non-null-assertion": "off",
      "ts/no-explicit-any": "off",
      "ts/no-empty-function": "off",

      "unused-imports/no-unused-vars": "off",
    },
  },
]);
