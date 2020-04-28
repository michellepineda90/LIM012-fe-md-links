const utilityFunctions = require('./utils');

const mdLinks = (pathEnteredByUser, options) => new Promise((resolve, reject) => {
  if (!options || options.validate === false) {
    resolve('no hay opción');
  }
  if (options.validate === true) {
    resolve('sí hay opción');
  }
});

module.exports = mdLinks;
