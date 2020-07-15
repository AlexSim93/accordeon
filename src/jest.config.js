module.exports = {
  rootDir: '../../',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{js,jsx,ts,tsx}',
    '!./**/*.d.ts',
    '!./**/*.stories.{js,jsx}',
    '!./**/*.mock.js',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  notifyMode: 'always',
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/tests'],
  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  testMatch: [
    '<rootDir>/tests/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/tests/**/*.(spec|test).{js,jsx,ts,tsx}',
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.svg$': '<rootDir>/config/jest/svgTransform.js',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/config/enzyme/setupTests.ts'],
};
