const utilityFunctions = require('./utils');

const mdLinks = (pathEnteredByUser, options) => new Promise((resolve, reject) => {
  if (!options || options.validate === false) {
    utilityFunctions.resolvePath(pathEnteredByUser);
    resolve(utilityFunctions.validatePath(pathEnteredByUser));
  }
  if (options.validate === true) {
    resolve('sí hay opción');
  }
  reject(error);
});

module.exports = mdLinks;
