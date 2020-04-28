const path = require('path');
const utilityFunctions = require('./utils');

const pathEnteredByUser = './md-files/valid.md';

const mdLinks = (pathEnteredByUser, options = { validate: false }) => new Promise((resolve, reject) => {
  const absolutePath = path.normalize(path.resolve(pathEnteredByUser));
});

module.exports = mdLinks;
