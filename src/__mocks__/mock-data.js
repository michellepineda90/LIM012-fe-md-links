const slash = require('slash');

// used to ensure that test runs on other computers
const absPath = `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`;

const relPath = './src/__mocks__/markdown/all-valid-links.md';

const valDir = './src/__mocks__/markdown';

const emptyDir = './src/__mocks__/markdown/fake-empty-folder';

const invRelPath = './src/__tests__/equis.md';

const emptyFile = './src/__mocks__/markdown/empty.md';

const mdFiles = [
  './src/__mocks__/markdown/all-valid-links.md',
  './src/__mocks__/markdown/empty.md',
  './src/__mocks__/markdown/fake-folder/empty2.md',
  './src/__mocks__/markdown/fake-folder/valid2.md',
  './src/__mocks__/markdown/some-invalid-links.md',
];

const rawLinks = [
  '[Node.js](https://nodejs.org/en/)',
  '[módulos (CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)',
  '[file system](https://nodejs.org/api/fs.html)',
  '[path](https://nodejs.org/api/path.html)',
  '[http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)',
  '[markdown](https://daringfireball.net/projects/markdown/syntax)',
  '[npm-scripts](https://docs.npmjs.com/misc/scripts)',
  '[semver](https://semver.org/a)'];

const formattedLinks = [
  {
    href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'file system',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'markdown',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'npm-scripts',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
  {
    href: 'https://semver.org/a',
    text: 'semver',
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
  },
];

const validatedLinks = [
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://nodejs.org/en/',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    status: 200,
    statusText: 'OK',
    text: 'módulos (CommonJS)',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://nodejs.org/api/fs.html',
    status: 200,
    statusText: 'OK',
    text: 'file system',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://nodejs.org/api/path.html',
    status: 200,
    statusText: 'OK',
    text: 'path',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    status: 200,
    statusText: 'OK',
    text: 'http.get',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://daringfireball.net/projects/markdown/syntax',
    status: 200,
    statusText: 'OK',
    text: 'markdown',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://docs.npmjs.com/misc/scripts',
    status: 200,
    statusText: 'OK',
    text: 'npm-scripts',
  },
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'https://semver.org/a',
    status: 404,
    statusText: 'Not Found',
    text: 'semver',
  },
];

const mockValid = [
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'validurl',
    text: 'Laboratoria',
  },
];

const outputMockValid = [
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'validurl',
    text: 'Laboratoria',
    status: 200,
    statusText: 'OK',
  },
];

const mockNotFound = [
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'invalidurl',
    text: 'Not Found',
  },
];

const outputNotFound = [
  {
    file: `${slash(process.cwd())}${'/src/__mocks__/markdown/all-valid-links.md'}`,
    href: 'invalidurl',
    text: 'Not Found',
    status: 404,
    statusText: 'Not Found',
  },
];

module.exports = {
  absPath,
  relPath,
  valDir,
  emptyDir,
  invRelPath,
  emptyFile,
  mdFiles,
  rawLinks,
  formattedLinks,
  validatedLinks,
  mockValid,
  outputMockValid,
  mockNotFound,
  outputNotFound,
};
