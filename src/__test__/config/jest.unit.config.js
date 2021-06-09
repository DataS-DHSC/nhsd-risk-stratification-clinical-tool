const config = require('./jest.config');

module.exports = {
  ...config,
  testMatch: [
    '<rootDir>/src/**/__test__/**/*.test.js',
    '<rootDir>/test/**/__test__/**/*.test.js',
  ],
  coverageDirectory: 'reports/coverage',
};
