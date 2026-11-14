# NGneers dev

This repository contains some common things that most projects need in the NGneers organization.

| Package name                   | Status                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @ngneers/prettier-config       | [![npm](https://img.shields.io/npm/v/@ngneers/prettier-config?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/prettier-config)             |
| @ngneers/eslint-config         | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config)                 |
| @ngneers/eslint-config-nodejs  | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config-nodejs?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config-nodejs)   |
| @ngneers/eslint-config-angular | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config-angular?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config-angular) |

# 🚀 Setup a new repository

1. Create a new repository in the NGneers organization
2. Clone the repository
3. Copy the following files and folders from this repository to the new repository:
   - `.vscode` (remove comments if necessary)
   - `.editorconfig`

## Prettier & ESLint

Install the following dev dependencies:

- **prettier:**<br>
  `@ngneers/prettier-config`
  `prettier`
- **eslint:**<br>
  `@eslint/js`
  `@ngneers/eslint-config`
  `eslint`
  `eslint-config-prettier`
  `eslint-import-resolver-typescript`
  `eslint-plugin-import-x`
  `eslint-plugin-unused-imports`
  `typescript-eslint`
  - **Additional packages for NodeJS projects:**<br>
    `@ngneers/eslint-config-nodejs`
  - **Additional packages for Angular projects:**<br>
    `angular-eslint`
    `@ngneers/eslint-config-angular`

Add `"prettier": "@ngneers/prettier-config"` to the package.json.

### NodeJS projects

- Create `eslint.config.mjs` in the root folder of the project:

  ```js
  import { defineConfig } from "eslint/config";
  import ngneers from "@ngneers/eslint-config-nodejs";

  export default defineConfig([
    ngneers.configs.nodejs,
    {
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
        },
      },
    },
  ]);
  ```

### Angular projects

- Create `eslint.config.mjs` in the root folder of the project:

  ```js
  import { defineConfig } from "eslint/config";
  import ngneers from "@ngneers/eslint-config-angular";

  export default defineConfig([
    ngneers.configs.angular,
    {
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
        },
      },
    },
  ]);
  ```

### Other projects

- Create `eslint.config.mjs` in the root folder of the project:

  ```js
  import { defineConfig } from "eslint/config";
  import ngneers from "@ngneers/eslint-config";

  export default defineConfig([
    ngneers.configs.common,
    {
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
        },
      },
    },
  ]);
  ```

## Vitest

Angular libraries use the Vitest runner of Angular's `@angular/build:unit-test` builder.

Install the following dev dependencies:

- `@angular/build`
  `vitest`
  `@vitest/coverage-v8`
  `jsdom`

- Add a `test` target to `angular.json`:

  ```json
  "test": {
    "builder": "@angular/build:unit-test",
    "options": {
      "tsConfig": "tsconfig.spec.json",
      "runner": "vitest",
      "coverage": true
    }
  }
  ```

- Add `"vitest/globals"` to `compilerOptions.types` in `tsconfig.spec.json`
- Use `ng test` as the `test` script in `package.json`
