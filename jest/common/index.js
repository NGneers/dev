/**
 * @typedef {Object} JestConfigOptions
 * @property {string[]} [roots]
 * @property {string[]} [testMatch]
 * @property {string} [tsconfig]
 * @property {string[]} [testSetupFiles]
 * @property {string} [testOutputDir]
 */

/** @type {JestConfigOptions} */
export const defaultJestConfigOptions = {
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(spec|test).+(ts)"],
  tsconfig: "<rootDir>/tsconfig.spec.json",
  testSetupFiles: undefined,
  testOutputDir: "<rootDir>/.jest",
};

/**
 * @param {JestConfigOptions} [options]
 * @return {import('ts-jest/dist/types').JestConfigWithTsJest}
 * */
export function getJestConfig(options) {
  options = { ...defaultJestConfigOptions, ...options };
  return {
    roots: options.roots,
    testMatch: ["**/+(*.)+(spec|test).+(ts)"],
    preset: "ts-jest/presets/default-esm",
    globals: {
      "ts-jest": {
        tsconfig: options.tsconfig,
        useESM: true,
      },
    },
    moduleFileExtensions: ["mts", "ts", "js", "mjs", "html", "json"],
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    setupFilesAfterEnv: options.testSetupFiles,
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: options.testOutputDir,
          outputName: "junit.xml",
        },
      ],
    ],
    coverageDirectory: `${options.testOutputDir}/coverage`,
    collectCoverage: true,
  };
}
