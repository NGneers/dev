# NGneers dev

This repository contains some common things that most projects need in the NGneers organization.

| Package name                   | Status                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @ngneers/prettier-config       | [![npm](https://img.shields.io/npm/v/@ngneers/prettier-config?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/prettier-config)             |
| @ngneers/eslint-config         | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config)                 |
| @ngneers/eslint-config-nodejs  | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config-nodejs?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config-nodejs)   |
| @ngneers/eslint-config-angular | [![npm](https://img.shields.io/npm/v/@ngneers/eslint-config-angular?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/eslint-config-angular) |
| @ngneers/jest-config           | [![npm](https://img.shields.io/npm/v/@ngneers/jest-config?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/jest-config)                     |
| @ngneers/jest-config-angular   | [![npm](https://img.shields.io/npm/v/@ngneers/jest-config-angular?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/@ngneers/jest-config-angular)     |

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
  `@typescript-eslint/eslint-plugin`
  `@typescript-eslint/parser`
  `eslint`
  `eslint-config-prettier`
  `eslint-plugin-import`
  `eslint-plugin-unused-imports`
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

## Jest

Install the following dev dependencies:

- `@ngneers/jest-config`
  `@types/jest`
  `jest`
  `jest-junit`
  `ts-jest`
  - **Additional packages for Angular projects:**<br>
    `@ngneers/jest-config-angular`
    `jest-preset-angular`

### Angular projects

- Create `jest.config.js` in the root folder of the project:

  ```js
  import { getAngularJestConfig } from "@ngneers/jest-config-angular";

  /** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
  export default {
    ...getAngularJestConfig(/* Optionally provide options */),
  };
  ```

### Other projects

- Create `jest.config.js` in the root folder of the project:

  ```js
  import { getJestConfig } from "@ngneers/jest-config";

  /** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
  export default {
    ...getJestConfig(/* Optionally provide options */),
  };
  ```
