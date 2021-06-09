module.exports = {
  verbose: true,
  rootDir: '../../..',
  setupFiles: ['<rootDir>/src/__test__/config/setupTests.js'],
  setupFilesAfterEnv: [
    'jest-allure/dist/setup',
    '<rootDir>/src/__test__/config/setupAllure.js',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['__test__'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$':
      '<rootDir>/src/__test__/config/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/config/__mocks__/fileMock.js',
  },
  reporters: ['default', 'jest-junit', 'jest-allure'],
  maxWorkers: '50%',
};
