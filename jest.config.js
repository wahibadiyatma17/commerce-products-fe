module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  injectGlobals: true,
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@config(.*)$": "<rootDir>/config$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@constant(.*)$": "<rootDir>/constant$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
    "^@tests(.*)$": "<rootDir>/tests$1",
    "\\.(css|jpg|png)$": "<rootDir>/components/styleMock.js",
  },
};
