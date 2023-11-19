# NGneeds dev

This repository contains some common things that most projects need in the NGneers organization.

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
    `@angular-eslint/builder`
    `@angular-eslint/eslint-plugin`
    `@angular-eslint/eslint-plugin-template`
    `@angular-eslint/template-parser`
    `@ngneers/eslint-config-angular`

Add `"prettier": "@ngneers/prettier-config"` to the package.json.

### NodeJS projects

- Create `.eslintrc.json` in the root folder of the project:
  ```json
  {
    "extends": ["@ngneers/eslint-config-nodejs"],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
  ```

### Angular projects

- Create `.eslintrc.json` in the root folder of the project:
  ```json
  {
    "extends": ["@ngneers/eslint-config-angular"],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
  ```

### Other projects

- Create `.eslintrc.json` in the root folder of the project:
  ```json
  {
    "extends": ["@ngneers/eslint-config"],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
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

  /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
  export default {
    ...getAngularJestConfig(/* Optionally provide options */),
  };
  ```

### Other projects

- Create `jest.config.js` in the root folder of the project:

  ```js
  import { getJestConfig } from "@ngneers/jest-config";

  /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
  export default {
    ...getJestConfig(/* Optionally provide options */),
  };
  ```