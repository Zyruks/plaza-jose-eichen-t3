/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Add any additional configuration that is specific to your project below.
  // Example:
  // moduleNameMapper: {
  //   '^@components/(.*)$': '<rootDir>/components/$1',
  // },
  // testPathIgnorePatterns: ['/node_modules/'],
};

export default createJestConfig(config);
