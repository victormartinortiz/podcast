module.exports = {
  moduleFileExtensions: ['js'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/.now/', '/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js'
  }
};
