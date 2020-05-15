module.exports = {
  rootDir: './src/',
  testRegex: '(.)+(.spec.js)$',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/**/__*__/',
  ],
  coverageDirectory: '/coverage',
};
