const slash = require('slash');

// used to ensure that test runs on other computers
const absPath = `${slash(process.cwd())}${'/src/__tests__/mocks/markdown/all-valid-links.md'}`;

const relPath = './src/__tests__/mocks/markdown/all-valid-links.md';

const valDir = './src/__tests__/mocks/markdown';

const emptyDir = './src/__tests__/mocks/markdown/fake-empty-folder';

const invRelPath = './src/__tests__/equis.md';

const emptyFile = './src/__tests__/mocks/markdown/empty.md';

const mdFiles = [
  './src/__tests__/mocks/markdown/all-valid-links.md',
  './src/__tests__/mocks/markdown/empty.md',
  './src/__tests__/mocks/markdown/fake-folder/empty2.md',
  './src/__tests__/mocks/markdown/fake-folder/valid2.md',
  './src/__tests__/mocks/markdown/some-invalid-links.md',
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
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'file system',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'markdown',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'npm-scripts',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
  {
    href: 'https://semver.org/a',
    text: 'semver',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
  },
];

const validatedLinks = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://nodejs.org/en/',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    status: 200,
    statusText: 'OK',
    text: 'módulos (CommonJS)',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://nodejs.org/api/fs.html',
    status: 200,
    statusText: 'OK',
    text: 'file system',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://nodejs.org/api/path.html',
    status: 200,
    statusText: 'OK',
    text: 'path',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    status: 200,
    statusText: 'OK',
    text: 'http.get',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://daringfireball.net/projects/markdown/syntax',
    status: 200,
    statusText: 'OK',
    text: 'markdown',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://docs.npmjs.com/misc/scripts',
    status: 200,
    statusText: 'OK',
    text: 'npm-scripts',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://semver.org/a',
    status: 404,
    statusText: 'Not Found',
    text: 'semver',
  },
];

const mockValid = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
  },
];

const outputMockValid = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://www.laboratoria.la/',
    text: 'Laboratoria',
    status: 200,
    statusText: 'OK',
  },
];

const mockNotFound = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://www.laboratoria.la/aerys',
    text: 'Not Found',
  },
];

const outputNotFound = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/src/__tests__/mocks/markdown/all-valid-links.md',
    href: 'https://www.laboratoria.la/aerys',
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
