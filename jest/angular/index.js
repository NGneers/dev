import { getJestConfig, defaultJestConfigOptions } from "@ngneers/jest-config";

/**
 * @typedef {import("@ngneers/jest-config").JestConfigOptions} AngularJestConfigOptions
 */

/** @type {AngularJestConfigOptions} */
export const defaultAngularJestConfigOptions = {
  ...defaultJestConfigOptions,
  testSetupFiles: ["<rootDir>/src/test.ts"],
};

/**
 * @param {AngularJestConfigOptions} [options]
 * @return {import('ts-jest/dist/types').JestConfigWithTsJest}
 */
export function getAngularJestConfig(options) {
  options = { ...defaultAngularJestConfigOptions, ...options };

  const baseConfig = getJestConfig(options);
  delete baseConfig.globals;
  delete baseConfig.moduleFileExtensions;
  delete baseConfig.moduleNameMapper;

  return {
    ...baseConfig,
    preset: "jest-preset-angular",
    globalSetup: "jest-preset-angular/global-setup",
  };
}
