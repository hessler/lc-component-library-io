/**
 * @module JestConfig
 */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/src/lib/themes/*',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|jpg|jpeg|png|gif|eot|otf|webp)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  modulePathIgnorePatterns: [
    '/node_modules',
    '<rootDir>/dist',
    '<rootDir>/src/lib/themes/*',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules',
    '<rootDir>/dist',
    '<rootDir>/src/lib/themes/*',
  ],
};
