import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "\\.jsx?$": "babel-jest", // if you have jsx tests too
  },
  moduleDirectories: [
    'node_modules'
  ],
  globals: {
    "ts-jest": {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
  ],
  collectCoverage: true,
};
export default config;