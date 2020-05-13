const valAbsPath = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md';

const valRelPath = './tests/md-files/all-valid-links.md';

const invRelPath = './tests/equis.md';

const emptyFile = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/empty.md';

const mdFilesFromDirectory = [
  'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/empty.md',
  'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/some-invalid-links.md',
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

const formatdLinks = [
  {
    href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'file system',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'markdown',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'npm-scripts',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
  {
    href: 'https://semver.org/a',
    text: 'semver',
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
  },
];

const validatdLinks = [
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://nodejs.org/en/',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    status: 200,
    statusText: 'OK',
    text: 'módulos (CommonJS)',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://nodejs.org/api/fs.html',
    status: 200,
    statusText: 'OK',
    text: 'file system',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://nodejs.org/api/path.html',
    status: 200,
    statusText: 'OK',
    text: 'path',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    status: 200,
    statusText: 'OK',
    text: 'http.get',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://daringfireball.net/projects/markdown/syntax',
    status: 200,
    statusText: 'OK',
    text: 'markdown',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://docs.npmjs.com/misc/scripts',
    status: 200,
    statusText: 'OK',
    text: 'npm-scripts',
  },
  {
    file: 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/all-valid-links.md',
    href: 'https://semver.org/a',
    status: 404,
    statusText: 'Not Found',
    text: 'semver',
  },
];

module.exports = {
  valAbsPath,
  valRelPath,
  invRelPath,
  emptyFile,
  mdFilesFromDirectory,
  rawLinks,
  formatdLinks,
  validatdLinks,
};
